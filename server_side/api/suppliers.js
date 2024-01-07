import express from 'express';
import SupplierModel from '../models/suppliers.js'
import mongoose from 'mongoose';

const router = express.Router();


// Creating a new supplier resource using a POST method
router.post('/', async (req, res) => {
    try {
        const supplier = new SupplierModel({
            _id: new mongoose.Types.ObjectId(),
            companyName: req.body.companyName,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email,
            active: req.body.active
        });

        const result = await supplier.save();
        res.status(201).json({
            message: 'Supplier created successfully',
            createdSupplier: result,
        });
    } catch (err) {
        console.error('Error creating Supplier:', err);
        res.status(500).json({
            message: 'Internal Server Error.',
            error: err.message || err,
        })
    }
});


// Getting all supplier resource using a GET method
router.get('/', async (req, res) => { 
    try{
        const documents = await SupplierModel.find()
        res.status(200).json(documents)
    } catch (err) {
        console.error('Error retrieving all Suppliers:', err)
        res.status(500).json({
            message: 'Internal Server Error.',
            error: err.message || err,
        });
    }

});


//updating a supplier resource by ID
router.patch('/:supplierId', async (req, res) => {
    try {
        const id = req.params.supplierId;
        const updateSupplierData = {};

        for (const supplierData of req.body) {
            updateSupplierData[supplierData.propName] = supplierData.value;
        }

        const result = await SupplierModel.updateOne({ _id: id}, { $set: updateSupplierData})

        if (result.nModified === 0) {
            res.status(404).json({
              message: 'No valid entry found for provided supplier ID.',
            });
          } else {
            res.status(200).json({
              message: 'Supplier updated successfully',
              modifiedCount: result.nModified,
            });
          }
    } catch (err) {
        console.error('Error updating supplier by ID:', err);

        if (err.name === 'CastError' && err.kind === 'ObjectId') {
            res.status(400).json({
              message: 'Invalid supplier ID format.',
            });
          } else {
            res.status(500).json({
              message: 'Internal Server Error.',
              error: err.message || err,
            });
          }    
    }
});


// Deleting a supplier resource by ID
router.delete('/:supplierId', async (req, res) => {
    try {
      const id = req.params.supplierId;
      const result = await SupplierModel.deleteOne({ _id: id })
  
      if (result.n === 0) {
        res.status(404).json({
          message: 'No valid entry found for provided supplier ID.',
        });
      } else {
        res.status(200).json({
          message: 'Supplier deleted successfully',
          deletedCount: result.n,
        });
      }
    } catch (err) {
      console.error('Error deleting Supplier by ID:', err);
  
      if (err.name === 'CastError' && err.kind === 'ObjectId') {
        res.status(400).json({
          message: 'Invalid supplier ID format.',
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