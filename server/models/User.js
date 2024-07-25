const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { 
        type: String, 
        required: true, 
        unique: true 
    },
    email: { 
        type: String,
        required: true, 
        unique: true 
    },
    passwordHash: { 
        type: String, 
        required: true 
    },
    firstName: { 
        type: String 
    },
    lastName: { 
        type: String 
    },
    phoneNumber: { 
        type: String 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
    updatedAt: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model('User', userSchema);