import express from 'express';
import UserModel from '../models/users.js';
import mongoose from 'mongoose';

const router = express.Router();


// Creating a new user resource using a POST method
router.post('/', async (req, res) => {
    try {
        const user = new UserModel({
            _id: new mongoose.Types.ObjectId(),
            image: req.body.image,
            fullName: req.body.fullName,
            phoneNumber: req.body.phoneNumber,
            designation: req.body.designation,
            email: req.body.email,
            createdAt: req.body.createdat,
            updatedAt: req.body.updatedat
        });

        const result = await user.save();
        res.status(201).json({
            message: 'User created successfully',
            createdUser: result,
        });
    } catch (err) {
        console.error('Error creating User:', err);
        res.status(500).json({
            message: 'Internal Server Error.',
            error: err.message || err,
        })
    }
});


// Getting all users resource using a GET method
router.get('/', async (req, res) => { 
    try{
        const documents = await UserModel.find()
        console.log('Fetched Users:', documents);
        res.status(200).json(documents)
    } catch (err) {
        console.error('Error retrieving all Users:', err)
        res.status(500).json({
            message: 'Internal Server Error.',
            error: err.message || err,
        });
    }

});



//updating a user resource by ID
router.patch('/:userId', async (req, res) => {
    try {
        const id = req.params.userId;
        const updateUserData = {};

        for (const userData of req.body) {
            updateUserData[userData.propName] = userData.value;
        }

        const result = await UserModel.updateOne({ _id: id}, { $set: updateUserData})

        if (result.nModified === 0) {
            res.status(404).json({
              message: 'No valid entry found for provided user ID.',
            });
          } else {
            res.status(200).json({
              message: 'User updated successfully',
              modifiedCount: result.nModified,
            });
          }
    } catch (err) {
        console.error('Error updating user by ID:', err);

        if (err.name === 'CastError' && err.kind === 'ObjectId') {
            res.status(400).json({
              message: 'Invalid user ID format.',
            });
          } else {
            res.status(500).json({
              message: 'Internal Server Error.',
              error: err.message || err,
            });
          }    
    }
});


// Deleting a user resource by ID
router.delete('/:userId', async (req, res) => {
    try {
      const id = req.params.userId;
      const result = await UserModel.deleteOne({ _id: id })
  
      if (result.n === 0) {
        res.status(404).json({
          message: 'No valid entry found for provided user ID.',
        });
      } else {
        res.status(200).json({
          message: 'User deleted successfully',
          deletedCount: result.n,
        });
      }
    } catch (err) {
      console.error('Error deleting user by ID:', err);
  
      if (err.name === 'CastError' && err.kind === 'ObjectId') {
        res.status(400).json({
          message: 'Invalid user ID format.',
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