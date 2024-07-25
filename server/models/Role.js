const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userRoleSchema = new Schema({
    user: { 
        type: Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    role: { 
        type: Schema.Types.ObjectId, 
        ref: 'Role', 
        required: true 
    }
});

module.exports = mongoose.model('UserRole', userRoleSchema);