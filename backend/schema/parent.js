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
    id: {
        type: Object,
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