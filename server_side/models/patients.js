import mongoose from 'mongoose';



const patientSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  patientName: {
    type: String,
    required: true,
    maxlength: 50,
  },
  phoneNumber: {
    type: Number,
    required: true,
    maxlength: 15,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  items: [{
    type: String,
    required: true,
  }],
  quantities: [{
    type: Number,
    required: true,
  }],
  amount: {
    type: Number,
    required: true,
  },
  purchaseDate: {
    type: Date,
    default: Date.now,
  },
}, {
  timestamps: true,
});



const Patient = mongoose.model('Patient', patientSchema);


export default Patient;









