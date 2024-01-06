import express from 'express';
import Patient from './models/patients.js';
import mongoose from 'mongoose';

const router = express.Router();


/* This is GET method api used to get the information of all patients */
router.get('/', (req, res) => {
  Patient.find()
    .select('_id patientName phoneNumber email items quantities amount')
    .exec()
    .then((documents) => {
      if (documents.length === 0) {
        // No documents found
        return res.status(404).json({
          message: 'No patients data found.',
        });
      }

      res.status(200).json(documents);
    })
    .catch((err) => {
      console.error('Error retrieving patients:', err);

      // Checking for specific MongoDB error (e.g., connection issues)
      if (err.name === 'MongoError') {
        return res.status(500).json({
          message: 'Internal Server Error: MongoDB operation failed.',
        });
      }

      res.status(500).json({
        message: 'Internal Server Error.',
        error: err.message || err,
      });
    });
});



/* This is a POST method api used to create a new patient resource on the server */
router.post('/', (req, res) => {
  const patient = new Patient({
    _id: new mongoose.Types.ObjectId(),
    patientName: req.body.patientName,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    items: req.body.items,
    quantities: req.body.quantities,
    amount: req.body.amount,
  });

  patient.save()
    .select('_id patientName phoneNumber email items quantities amount')
    .then((result) => {
      res.status(201).json({
        message: 'Patient created successfully',
        createdPatient: result,
      });
    })
    .catch((err) => {
      console.error('Error creating patient:', err);

      // Checking for specific MongoDB validation error (e.g., unique constraint violation)
      if (err.name === 'MongoError' && err.code === 11000) {
        return res.status(400).json({
          message: 'Duplicate patient entry. Ensure unique values for email and other unique fields.',
        });
      }

      // Checking for other MongoDB-specific errors
      if (err.name === 'MongoError') {
        return res.status(500).json({
          message: 'Internal Server Error: MongoDB operation failed.',
        });
      }

      // Checking for Mongoose validation errors
      if (err.name === 'ValidationError') {
        return res.status(422).json({
          message: 'Validation error. Check the request payload.',
          errors: err.errors,
        });
      }

      res.status(500).json({
        message: 'Internal Server Error.',
        error: err.message || err,
      });
    });
});



/* This is GET method api used to retrieve patient data using their unique IDs */
router.get('/:patientId', (req, res) => {
  const id = req.params.patientId;
  Patient.findById(id)
    .select('_id patientName phoneNumber email items quantities amount')
    .exec()
    .then((document) => {
      if (document) {
        res.status(200).json(document);
      } else {
        res.status(404).json({
          message: 'No valid entry found for the provided patient ID.',
        });
      }
    })
    .catch((err) => {
      console.error('Error retrieving patient by ID:', err);

      // Checking for specific MongoDB error (e.g., invalid ObjectId format)
      if (err.name === 'CastError' && err.kind === 'ObjectId') {
        return res.status(400).json({
          message: 'Invalid patient ID format.',
        });
      }

      if (err.name === 'MongoError') {
        return res.status(500).json({
          message: 'Internal Server Error: MongoDB operation failed.',
        });
      }

      res.status(500).json({
        message: 'Internal Server Error.',
        error: err.message || err,
      });
    });
});


/* This is a DELETE method used to delete a patient data from the resource using their ID's */
router.delete('/:patientId', (req, res) => {
  const id = req.params.patientId;
  Patient.deleteOne({ _id: id })
    .select('_id patientName phoneNumber email items quantities amount')
    .exec()
    .then((result) => {
      console.log(result.n); // n means the Number of documents deleted
      if (result.n === 0) {
        // No document matched the provided patient ID
        return res.status(404).json({
          message: 'No valid entry found for provided patient ID.',
        });
      }

      res.status(200).json({
        message: 'Patient deleted successfully',
        deletedPatient: result,
      });
    })
    .catch((err) => {
      console.error('Error deleting patient by ID:', err);

      // Checking for specific MongoDB error (e.g., invalid ObjectId format)
      if (err.name === 'CastError' && err.kind === 'ObjectId') {
        return res.status(400).json({
          message: 'Invalid patient ID format.',
        });
      }

      if (err.name === 'MongoError') {
        return res.status(500).json({
          message: 'Internal Server Error: MongoDB operation failed.',
        });
      }

      res.status(500).json({
        message: 'Internal Server Error.',
        error: err.message || err,
      });
    });
});


/* 
This is a PATCH method used to partially updates a resource. It applies changes to specific field
if you send a PATCH request to update a resource, 
the server will only update the specified fields in the existing resource.
 */
router.patch('/:patientId', (req, res) => {
  const id = req.params.patientId;
  const updatePatientData = {};
  
  for (const patientData of req.body) {
    updatePatientData[patientData.propName] = patientData.value;
  }

  Patient.updateOne({ _id: id }, { $set: updatePatientData })
    .select('_id patientName phoneNumber email items quantities amount')
    .exec()
    .then((result) => {
      if (result.nModified === 0) {
        return res.status(404).json({
          message: 'No valid entry found for provided patient ID.',
        });
      }

      res.status(200).json({
        message: 'Patient Info updated successfully',
        modifiedCount: result.nModified,
      });
    })
    .catch((err) => {
      console.error('Error updating patient by ID:', err);

      // Check for specific MongoDB error (e.g., invalid ObjectId format)
      if (err.name === 'CastError' && err.kind === 'ObjectId') {
        return res.status(400).json({
          message: 'Invalid patient ID format.',
        });
      }

      // Check for other MongoDB-specific errors
      if (err.name === 'MongoError') {
        return res.status(500).json({
          message: 'Internal Server Error: MongoDB operation failed.',
        });
      }

      res.status(500).json({
        message: 'Internal Server Error.',
        error: err.message || err,
      });
    });
});














export default router;
