const mongoose = require("mongoose");


const jobModel = new mongoose.Schema({

    employe:{ type: mongoose.Schema.Types.ObjectId, ref:"employe"},
    usersapplied:[
        {type: mongoose.Schema.Types.ObjectId, ref:"student"}
    ],
    title:String,
    skills:String,
    location:String,
    jobtype:{
        type:String,
        emum:["In office","Remote"]
    },
    opening:Number,
    description:String,
    perferences:String,
    salary:Number,
    perks:String,
    assesments:String,  
    isActive:{
        type:Boolean,
        default:true,
    },
},{timestamps:true});

const job = mongoose.model("job",jobModel);

module.exports = job;