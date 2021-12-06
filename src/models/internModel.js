const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const internSchema= new mongoose.Schema({
name:{
    type: String,
    required: 'intern name is mandatory'
},
email:{
    type: String,
    required: 'email is mandatory',
    unique: 'this email is already being use',
 
} ,
mobile:{
    type: String,
    required: 'mobile number is mandatory',
    unique: 'this mobile number is already being used', 
    // mobile validaor
},
collegeId:{
    type:ObjectId,
    ref: 'college',
    required: 'collegeId is mandatory'
}  ,
isDeleted:{
    type: Boolean,
    default: false,
}
}, { timestamps: true })

module.exports = mongoose.model('intern', internSchema)