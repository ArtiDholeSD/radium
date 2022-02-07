const mongoose = require('mongoose')
const collegeSchema = new mongoose.Schema({
    name: {//abreevation
        type: String,
        required: 'college name is mandatory',
        unique: 'college name should be unique',
    },
    fullName: {
        type: String,
        required: 'the fullname is mandatory'
    },
    logoLink:{
        type: String,
        required: 'logo link is mandatory'
    },
    isDeleted:{
        type: Boolean,
        default: false,
    }
}, { timestamps: true })

module.exports = mongoose.model('college', collegeSchema)