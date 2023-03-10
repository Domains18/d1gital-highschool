

//Path: backend/schema/classSchema.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const classSchema = new Schema({
    classCode: {
        type: Object,
        required: true
    },
    className: {
        type: String,
        required: true
    },
    teacherId: {
        type: String,
        required: true
    },
    
    description: {
        type: String,
    }
});


const Class = mongoose.model('Class', classSchema);
module.exports = Class;
