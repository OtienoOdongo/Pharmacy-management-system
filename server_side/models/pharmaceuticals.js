import mongoose from 'mongoose';


const pharmaceuticalSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    productName: {
        type: String,
        required: true,
    },
    genericName: {
        type: String,
        required: true,
    },
    weight: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    manufacturer: {
        type: String,
        required: true,
    },
    price: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
    },
    manufacturerPrice: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    expireryDate: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['Low', 'Available', 'Out Of Stock'],
        required: true,
        
    },
}, {
    timestamps: true,
    versionKey: false
});


const PharmaceuticalModel = mongoose.model('Pharmaceutical', pharmaceuticalSchema);


export default PharmaceuticalModel;