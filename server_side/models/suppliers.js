import mongoose from 'mongoose';


const supplierSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    companyName: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
        maxlenghth: 20,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    active: {
        type: Boolean,
        default: true, 
    }, 
}, {
    timestamps: true,
    versionKey: false
});



const SupplierModel = mongoose.model('Supplier', supplierSchema);


export default SupplierModel;

