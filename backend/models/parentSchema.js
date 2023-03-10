

//path: backend/models/parentSchema.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ParentSchema = new Schema({
    Fname: {
        type: String,
        required: true
    },
    Lname: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true,
    },
    createdAt: {
        type: Date,
        required: true
    },
    updatedAt: {
        type: Date,
        required: true
    },
    students: [
        {
            type: Object,
            ref: 'Student'
        }
    ]
});

const Parent = mongoose.model('Parent', ParentSchema);
module.exports = Parent;
