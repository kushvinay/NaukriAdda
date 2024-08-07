const { catchAsyncErron } = require("../middlewares/catchAsyncError");
const Employe = require("../models/employeModel");
const Internship = require("../models/internshipModel");
const Job = require("../models/jobModel");
const { findById } = require("../models/studentModel");
const { sendtoken } = require("../utils/SendToken");
const errorHandler = require("../utils/errorHandler");
const { sendmail } = require("../utils/nodemailer");
const path = require("path");
const imagekit = require("../utils/imagekit").initImageKit()


exports.homepage = catchAsyncErron (async (req,res,next) => {
    try{
        res.json({message:"welcon employe"})
    } catch (error){
        res.json(error);
    }
});

exports.employe = catchAsyncErron (async (req,res,next) => {
    const employe = await Employe.findById(req.id).populate("internships").populate("jobs").exec();
    res.json({employe});
});

exports.employesignup = catchAsyncErron(async (req,res,next)=>{
    // const exemploy = await Employe.findOne({email:req.body.email}).exec();
    console.log(req.body)
    // if(exeemploy){
    //     return next(new errorHandler("user already exist with this email address" ,404))
    // }
    const employ = await new Employe(req.body).save();
    sendtoken(employ,201,res);
    // res.status(201).json(employe); 

})

exports.employesignin = catchAsyncErron(async (req,res,next)=>{
    const employe = await Employe.findOne({email: req.body.email}).select("+password").exec();
    console.log(req.body.email)

    if(!employe) return next(new errorHandler("User not found",404));

    const isMatch = employe.comparepassword(req.body.password);
    if(!isMatch) return next(new errorHandler("Wrong Credientials",500));
    
    sendtoken(employe,201,res);
})

exports.employesignout = catchAsyncErron(async (req,res,next)=>{
   res.clearCookie("token");
   res.json({
    success:true,
    message: "successfully signout!"
   })
})

exports.employeforgetpassword = catchAsyncErron(async (req,res,next)=>{
    const employe = await Student.findOne({email:req.body.email});
    
    if(!employe){
        return next(new errorHandler("user not found with this email address" ,404))
    }
    const URL = `${req.protocol}://${req.get("host")}/employe/forget-link/${employe._id}`;
    employe.passwordResatToken = "1";
    employe.save();
    sendmail(req,res,next,URL);
    res.status(201).json({URL}); 

})  

exports.employeforgetlink = catchAsyncErron(async (req,res,next)=>{
    const employe = await Student.findById(req.params.id).exec();

    if(!employe){
        return next(new errorHandler("user not found with this email address" ,404))
    }
    if(employe.passwordResatToken == "1"){
        employe.passwordResatToken == "0"
        employe.password = req.body.password;
        await employe.save();
    } else{
        res.status(500).json({
            message:"invaled password reset link try again"
        });
    }
    res.status(200).json({
        message:"password has been successfully changed"
    });
})  

exports.employechangepassword = catchAsyncErron(async (req,res,next)=>{
    const employe = await Employe.findById(req.id).exec();
    console.log(req.body.password)
    employe.password = req.body.password;
    console.log(employe.password);
    // employe.save();
    res.status(200).json({
        message:"Password has been Successfully Changed"
    });
}) 

exports.employeupdate = catchAsyncErron(async (req,res,next)=>{
    const employe = await Employe.findByIdAndUpdate(req.id,req.body).exec();

    res.status(200).json({
        succcess:true,
        message:"User Update Successfullu"
    });
}) 

exports.employelogo = catchAsyncErron(async (req,res,next)=>{

    const employe = await Employe.findById(req.id).exec();
    const file = req.files.organisationlogo;
    
    const modifiedFileName = `organisationlogo-${Date.now()}${path.extname(
        file.name
    )}`;
    if(employe.organisationlogo.fileId !== ""){
        await imagekit.deleteFile(employe.organisationlogo.fileId)
    }

    const {fileId , url}= await imagekit.upload({
        file:file.data,
        fileName: modifiedFileName
    })
    employe.organisationlogo = {fileId,url};
    await employe.save();
    res.status(200).json({
        message:"Organisation Logo has been Successfully Uploaded"
    });
})

//-----------------internships------------------

exports.createinternship = catchAsyncErron(async (req,res,next)=>{
    const employe = await Employe.findById(req.id).exec();
    const internship = await new Internship(req.body);
    internship.employe = employe._id;
    await internship.save();
    employe.internships.push(internship._id);
    console.log(employe)
    await employe.save();
    res.status(200).json({
        succcess:true,
        message:"Internship has been succesfully created"
    });
})

exports.readinternship = catchAsyncErron(async (req,res,next)=>{
    const id = req.id
    console.log(id)
    console.log(req.query.limit);
    let limit = Number(req.query.limit) || 5;
    let lenth = Number(req.query.lenth) || 0;
    const employe = await Employe.findById(req.id).exec();
    console.log(employe)
    const internships = await Internship.find({employ:employe._id}).sort({ _id: -1 }).skip(lenth).limit(limit).exec();
    // const {internships} = await Employe.findById(req.id).populate(internships).exec();
    console.log(internships)
    if(!internships) return new errorHandler("Internship Not Found");
    res.status(200).json({
        succcess:true,internships
    });
})

exports.readdemo = catchAsyncErron(async (req,res,next)=>{
    console.log(req.id)
    let limit = Number(req.query.limit) || 5;
    let lenth = Number(req.query.lenth) || 0;
    const internships = await Internship.find({employ:req.id}).sort({ _id: -1 }).skip(lenth).limit(limit).exec();
    console.log(internships)
    res.status(200).json({
        internships
    })
})


exports.readoneinternship = catchAsyncErron(async (req,res,next)=>{

    const internship = await Internship.findById(req.params.id).populate(employe).exec();
    res.status(200).json({
        succcess:true,internship
    });
})


exports.employeEditinternship = catchAsyncErron(async (req,res,next)=>{
    console.log(req.body)
    console.log(req.params.id)
    const test = await Internship.findById(req.params.id);
    console.log(test);
    const internship = await Internship.findOneAndUpdate(req.params.id,req.body).exec();
    console.log(internship)
    await internship.save();
    res.status(200).json({
        succcess:true,
        message:"Internship post has been Updated"
    });
})

exports.employeDeactiveinternship = catchAsyncErron(async (req,res,next)=>{
    const internship = await Internship.findById(req.params.id);
    internship.isActive = !internship.isActive;
    await internship.save();
    res.status(200).json({
        succcess:true,
        message:"Internship post has been Updated"
    });
})

exports.employeInternResume = catchAsyncErron(async (req,res,next)=>{
    const Resumes = await Internship.findById(req.params.id).populate('usersapplied'," firstname lastname city contact avatar gender email resume ").exec();
    res.status(200).json({Resumes});
})

//-----------------jobs------------------

exports.createjob = catchAsyncErron(async (req,res,next)=>{
    const employe = await Employe.findById(req.id).exec();
    const job = await new Job(req.body);
    job.employe = employe._id;
    job.save();x
    employe.jobs.push(job._id);
    await employe.save()
    res.status(200).json({
        succcess:true,
        message:"job crated ",job
    });
})

exports.readjob = catchAsyncErron(async (req,res,next)=>{
    const jobs = await Job.find({employ:req.params.id})
    // const {jobs} = await Employe.findById(req.id).populate(jobs).exec();
    console.log(jobs)
    if(!jobs) return new errorHandler("job Not Found");
    res.status(200).json({
        succcess:true,jobs
    });
})


exports.readonejob = catchAsyncErron(async (req,res,next)=>{

    const job = await Job.findById(req.params.id).exec();
    res.status(200).json({
        succcess:true,job
    });
})

exports.employeEditjob = catchAsyncErron(async (req,res,next)=>{
    const job = await Job.findOneAndUpdate(req.params.id,req.body).exec();
    await job.save();
    res.status(200).json({
        succcess:true,
        message:"job post has been Updated"
    });
})

exports.employeDeactivejob = catchAsyncErron(async (req,res,next)=>{
    const job = await Job.findById(req.params.id);
    job.isActive = !job.isActive;
    await job.save();
    res.status(200).json({
        succcess:true,
        message:"job post has been Updated"
    });
})

exports.employejobResume = catchAsyncErron(async (req,res,next)=>{
    const Resumes = await Job.findById(req.params.id).populate('usersapplied'," firstname lastname city contact avatar gender email resume ").exec();
    res.status(200).json({Resumes});
})