import express from 'express';
import PharmaceuticalModel from '../models/pharmaceuticals.js'
import mongoose from 'mongoose';

const router = express.Router();


// Creating a new pharmaceutical resource using POST method
router.post('/', async (req, res) => {
    try {
        const pharma = new PharmaceuticalModel({
            _id: new mongoose.Types.ObjectId(),
            productName: req.body.productName,
            genericName: req.body.genericName,
            weight: req.body.weight,
            category: req.body.category,
            manufacturer: req.body.manufacturer,
            price: req.body.price,
            manufacturerPrice: req.body.manufacturerPrice,
            stock: req.body.stock,
            expireryDate: req.body.expireryDate,
            status: req.body.status,
        });

        const result = await pharma.save();
        res.status(201).json({
            message: 'Pharmaceutical created successfully',
            createdPharmaceutical: result,
        })
    } catch (err) {
        console.error('Error creating pharmaceutical:', err);
        res.status(500).json({
          message: 'Internal Server Error.',
          error: err.message || err,
        });
      }
});



// Getting all pharmaceutical resource using GET method
router.get('/', async (req, res) => {
    try {
        const documents = await PharmaceuticalModel.find()
        res.status(200).json(documents);
    } catch (err) {
        console.error('Error retrieving all pharmaceuticals:', err);
        res.status(500).json({
          message: 'Internal Server Error.',
          error: err.message || err,
        });
      }
});



// Getting a specific pharmaceutical resource by ID
router.get('/:pharmaId', async (req, res) => {
    try {
        const id = req.params.pharmaId;
        const document = await PharmaceuticalModel.findById(id);

        if (document) {
            res.status(200).json(document);
          } else {
            res.status(404).json({
              message: 'No valid entry found for provided pharmaceutical ID',
            });
          }
    } catch (err) {
        console.error('Error retrieving pharmaceutical by ID:', err);
    
        if (err.name === 'CastError' && err.kind === 'ObjectId') {
          res.status(400).json({
            message: 'Invalid pharmaceutical ID format.',
          });
        } else {
          res.status(500).json({
            message: 'Internal Server Error.',
            error: err.message || err,
          });
        }
      }
})


// Updating a pharmaceutical resource by ID
router.patch('/:pharmaId', async (req, res) => {
    try {
        const id = req.params.pharmaId;
        const updatePharmaData = {};

        for (const pharmaData of req.body) {
            updatePharmaData[pharmaData.propName] = pharmaData.value;
        }

        const result = await PharmaceuticalModel.updateOne({ _id: id }, { $set: updatePharmaData } )

        if (result.nModified === 0) {
            res.status(404).json({
              message: 'No valid entry found for provided pharmaceutical ID.',
            });
          } else {
            res.status(200).json({
              message: 'Pharmaceutical updated successfully',
              modifiedCount: result.nModified,
            });
        }
    } catch (err) {
        console.error('Error updating pharmaceutical by ID:', err);
    
        if (err.name === 'CastError' && err.kind === 'ObjectId') {
          res.status(400).json({
            message: 'Invalid pharmaceutical ID format.',
          });
        } else {
          res.status(500).json({
            message: 'Internal Server Error.',
            error: err.message || err,
          });
        }
      }
});


// Deleting a pharmaceutical resource by ID
router.delete('/:pharmaId', async (req, res) => {
    try {
        const id = req.params.pharmaId;
        const result = await PharmaceuticalModel.deleteOne({ _id: id })

        if (result.n === 0) {
            res.status(404).json({
              message: 'No valid entry found for provided pharmaceutical ID.',
            });
          } else {
            res.status(200).json({
              message: 'Pharmaceutical deleted successfully',
              deletedCount: result.n,
            });
        }
    } catch (err) {
        console.error('Error deleting pharmaceutical by ID:', err);
    
        if (err.name === 'CastError' && err.kind === 'ObjectId') {
          res.status(400).json({
            message: 'Invalid pharmaceutical ID format.',
          });
        } else {
          res.status(500).json({
            message: 'Internal Server Error.',
            error: err.message || err,
          });
        }
      }
})




export default router;