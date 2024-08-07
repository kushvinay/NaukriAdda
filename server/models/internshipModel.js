const mongoose = require("mongoose");


const internshipModel = new mongoose.Schema({

    employe:{ type: mongoose.Schema.Types.ObjectId, ref:"employe"},
    usersapplied:[
        {type: mongoose.Schema.Types.ObjectId, ref:"student"}
    ],
    profile:String,
    skills: String,
    internshiptype:{
        type:String,
        enum:['In office','Remote']
    },
    opening: Number,
    from:String,
    to:String,
    duration:String,
    responsibility:String,
    Stipend:{
        status:{
            type:String,
            emum:['Fixed','Negotiable','Performance based','Unpaid']
        },
        amount:Number,
    },
    perks:String,
    assesments:String,  
    location:String,
    isActive:{
        type:Boolean,
        default:true
    }
    

},{timestamps:true});

const internship = mongoose.model("internship",internshipModel);

module.exports = internship;