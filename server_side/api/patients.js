import express from 'express';
import Patient from '../models/patients.js';
import mongoose from 'mongoose';

const router = express.Router();



// Creating a new patient resource using a POST method
router.post('/', async (req, res) => {
  try {
    const patient = new Patient({
      _id: new mongoose.Types.ObjectId(),
      patientName: req.body.patientName,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      items: req.body.items,
      quantities: req.body.quantities,
      amount: req.body.amount,
    });

    const result = await patient.save();
    res.status(201).json({
      message: 'Patient created successfully',
      createdPatient: result,
    });
  } catch (err) {
    console.error('Error creating patient:', err);
    res.status(500).json({
      message: 'Internal Server Error.',
      error: err.message || err,
    });
  }
});



// Getting all patients resource using a GET method
router.get('/', async (req, res) => {
  try {
    const documents = await Patient.find().exec()
      // .select('_id patientName phoneNumber email items quantities amount ')
    res.status(200).json(documents);
  } catch (err) {
    console.error('Error retrieving all patients:', err);
    res.status(500).json({
      message: 'Internal Server Error.',
      error: err.message || err,
    });
  }
});



// Getting a specific patient resource by ID
router.get('/:patientId', async (req, res) => {
  try {
    const id = req.params.patientId;
    const document = await Patient.findById(id).exec();

    if (document) {
      res.status(200).json(document);
    } else {
      res.status(404).json({
        message: 'No valid entry found for provided patient ID',
      });
    }
  } catch (err) {
    console.error('Error retrieving patient by ID:', err);

    if (err.name === 'CastError' && err.kind === 'ObjectId') {
      res.status(400).json({
        message: 'Invalid patient ID format.',
      });
    } else {
      res.status(500).json({
        message: 'Internal Server Error.',
        error: err.message || err,
      });
    }
  }
});



// Updating a patient resource by ID
router.patch('/:patientId', async (req, res) => {
  try {
    const id = req.params.patientId;
    const updatePatientData = {};

    for (const patientData of req.body) {
      updatePatientData[patientData.propName] = patientData.value;
    }

    const result = await Patient.updateOne({ _id: id }, { $set: updatePatientData }).exec();

    if (result.nModified === 0) {
      res.status(404).json({
        message: 'No valid entry found for provided patient ID.',
      });
    } else {
      res.status(200).json({
        message: 'Patient updated successfully',
        modifiedCount: result.nModified,
      });
    }
  } catch (err) {
    console.error('Error updating patient by ID:', err);

    if (err.name === 'CastError' && err.kind === 'ObjectId') {
      res.status(400).json({
        message: 'Invalid patient ID format.',
      });
    } else {
      res.status(500).json({
        message: 'Internal Server Error.',
        error: err.message || err,
      });
    }
  }
});



// Deleting a patient resource by ID
router.delete('/:patientId', async (req, res) => {
  try {
    const id = req.params.patientId;
    const result = await Patient.deleteOne({ _id: id }).exec();

    if (result.n === 0) {
      res.status(404).json({
        message: 'No valid entry found for provided patient ID.',
      });
    } else {
      res.status(200).json({
        message: 'Patient deleted successfully',
        deletedCount: result.n,
      });
    }
  } catch (err) {
    console.error('Error deleting patient by ID:', err);

    if (err.name === 'CastError' && err.kind === 'ObjectId') {
      res.status(400).json({
        message: 'Invalid patient ID format.',
      });
    } else {
      res.status(500).json({
        message: 'Internal Server Error.',
        error: err.message || err,
      });
    }
  }
});



export default router;