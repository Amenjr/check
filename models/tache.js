const mongoose = require("mongoose");

const Tache = new mongoose.Schema({
    titre:{type:String,required:true},
    description:{type:String,required:true},
    date_fin:{type:Date,required:true},
    prop:{type:String,required:true},
    priori:{type:String,required:true},
    etat:{type:String,required:true},
    piece_joint:String

        
})

module.exports=mongoose.model("Tache",Tache);