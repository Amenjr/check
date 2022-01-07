const mongoose = require("mongoose");



const comment = new mongoose.Schema({
    Comment:String,
    date:{type:Date,default:Date.now()}
})

module.exports= mongoose.model("Comment",comment)