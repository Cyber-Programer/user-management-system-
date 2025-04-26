const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(dotenv.MONGO_URL)
const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    Date:{
        type:Date,
        default:Date.now()
    }

})

module.exports = mongoose.model('user-management-system',userSchema)