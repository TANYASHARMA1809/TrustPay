const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    user: { 
        type: Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    paymentMethod: { 
        type: Schema.Types.ObjectId, 
        ref: 'PaymentMethod', 
        required: true 
    },
    amount: { 
        type: Number, 
        required: true 
    },
    currency: { 
        type: String, 
        required: true 
    },
    status: { 
        type: String, 
        required: true 
    },  // e.g., Pending, Completed, Failed
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
    updatedAt: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model('Transaction', transactionSchema);