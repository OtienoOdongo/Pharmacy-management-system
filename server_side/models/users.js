import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    image: {
        type: String,
        required: false,
    },
    fullName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true,
        maxlength: 20,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    designation: {
        type: String,
        required: true
    },
   
},
{
    timestamp: true,
    versionKey: false,
})


const UserModel = mongoose.model('User', userSchema)

export default UserModel;
