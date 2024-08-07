const { catchAsyncErron } = require("../middlewares/catchAsyncError");
const Student = require("../models/studentModel");
const errorHandler = require("../utils/errorHandler");
const { student } = require("./indexcontroller");
const { v4: uuidv4 } = require('uuid')


exports.resume = catchAsyncErron (async (req,res,next) => {
    const {resume} = await Student.findById(req.id).exec();
    res.json({message: "Secure Resume page", resume});
});


//-----------------education---------------------------


exports.addeducation = catchAsyncErron (async (req,res,next) => {
    console.log(req.body)
    const student = await Student.findById(req.id).exec();
    const {resume} = student;
    // resume.education.push(req.body);
    // resume.education.push({...req.body, id:uuidv4()});
    let isempty = student.resume.education.length;
    if(isempty == 0){
        resume.education.push({...req.body, id:uuidv4()});
        console.log(resume)
        await student.save();
        return res.json({message: "Education added"});
    }
    let index = resume.education.findIndex((edu) => edu.type.toString() === req.body.type)
    if(index == -1 ){
        resume.education.push({...req.body, id:uuidv4()});
        console.log(resume)
        await student.save();
        return res.json({message: "Education added"});
    }
    student.resume.education[index] = {...req.bode, id:uuidv4()};
    await student.save();
    res.status(200).json({massage:"Education Added"})
});

exports.addeducationSenSec = catchAsyncErron (async (req,res,next) => {
    console.log(req.body)
    const student = await Student.findById(req.id).exec();
    const {resume} = student;
    resume.education.senSecandroy = ({...req.body, id:uuidv4()})
    console.log(resume)
    await student.save();
    res.json({message: "Education added"});
});

exports.addeducationgraduation = catchAsyncErron (async (req,res,next) => {
    console.log(req.body)
    const student = await Student.findById(req.id).exec();
    const {resume} = student;
   
    resume.education.higher.push({...req.body, id:uuidv4()});
    console.log(resume)
    await student.save();
    res.json({message: "Education added"});
});

exports.editeducation = catchAsyncErron (async (req,res,next) => {
    const student = await Student.findById(req.id).exec();
    const eduIndex = student.resume.education.findIndex((i) =>
        i.id === req.params.eduid
    );
    student.resume.education[eduIndex] = { ...student.resume.education[eduIndex],...req.body}
    await student.save();
    res.json({message: "edit Education "});
});

exports.deleteeducation = catchAsyncErron (async (req,res,next) => {
    const student = await Student.findById(req.id).exec();
    const filtereducation = student.resume.education.filter(
        (i) => i.id !== req.params.eduid
    )
    student.resume.education = filtereducation;
    await student.save();
    res.json({message: "Education deleted "});
});


//-----------------jobs---------------------------


exports.addjob = catchAsyncErron (async (req,res,next) => {
    const student = await Student.findById(req.id).exec();
    const {resume} = student;
    resume.jobs.push({...req.body, id:uuidv4()});
    await student.save();
    res.json({message: "Job added"});
});

exports.editjob = catchAsyncErron (async (req,res,next) => {
    const student = await Student.findById(req.id).exec();
    const jobsIndex = student.resume.jobs.findIndex((i) =>
        i.id === req.params.eduid
    );
    student.resume.jobs[jobsIndex] = { ...student.resume.jobs[jobsIndex],...req.body}
    await student.save();
    res.json({message: "edit Job "});
});

exports.deletejob = catchAsyncErron (async (req,res,next) => {
    const student = await Student.findById(req.id).exec();
    const filterjob = student.resume.jobs.filter(
        (i) => i.id !== req.params.id
    )
    student.resume.jobs = filterjob;
    await student.save();
    res.json({message: "Education deleted "});
});


//-----------------intenships---------------------------


exports.addintenships = catchAsyncErron (async (req,res,next) => {
    const student = await Student.findById(req.id).exec();
    const {resume} = student;
    // const {internships} = resume;
    // console.log(resume.internships)
     await resume.internships.push({...req.body, id:uuidv4()});
    console.log(student)
    await student.save();
    res.json({message: "intenships added"});
});

exports.editintenships = catchAsyncErron (async (req,res,next) => {
    const student = await Student.findById(req.id).exec();
    const intenshipsIndex = student.resume.internships.findIndex((i) =>
        i.id === req.params.eduid
    );
    student.resume.intenships[intenshipsIndex] = { ...student.resume.intenships[intenshipsIndex],...req.body}
    await student.save();
    res.json({message: "intenships edit"});
});

exports.deleteintenships = catchAsyncErron (async (req,res,next) => {
    const student = await Student.findById(req.id).exec();
    const filterintenships = student.resume.internships.filter(
        (i) => i.id !== req.params.eduid
    )
    student.resume.internships = filterintenships;
    await student.save();
    res.json({message: "Education deleted "});
});


//-----------------responsibilities---------------------------


exports.addresponsibilities = catchAsyncErron (async (req,res,next) => {
    const student = await Student.findById(req.id).exec();
    const {resume} = student;
    resume.responsibilities.push({...req.body, id:uuidv4()});
    await student.save();
    res.json({message: "intenships added"});
});

exports.editresponsibilities = catchAsyncErron (async (req,res,next) => {
    const student = await Student.findById(req.id).exec();
    const responsibilitiesIndex = student.resume.responsibilities.findIndex((i) =>
        i.id === req.params.eduid
    );
    student.resume.responsibilities[responsibilitiesIndex] = { ...student.resume.responsibilities[responsibilitiesIndex],...req.body}
    await student.save();
    res.json({message: "intenships edit"});
});

exports.deleteresponsibilities = catchAsyncErron (async (req,res,next) => {
    const student = await Student.findById(req.id).exec();
    const filterresponsibilities = student.resume.responsibilities.filter(
        (i) => i.id !== req.params.eduid
    )
    student.resume.responsibilities = filterresponsibilities;
    await student.save();
    res.json({message: "Education deleted "});
});

//-----------------courses---------------------------

exports.addcourses = catchAsyncErron (async (req,res,next) => {
    const student = await Student.findById(req.id).exec();
    const {resume} = student;
    resume.courses.push({...req.body, id:uuidv4()});
    await student.save();
    res.json({message: "courses added"});
});

exports.editcourses = catchAsyncErron (async (req,res,next) => {
    const student = await Student.findById(req.id).exec();
    const coursesIndex = student.resume.courses.findIndex((i) =>
        i.id === req.params.eduid
    );
    student.resume.courses[coursesIndex] = { ...student.resume.courses[coursesIndex],...req.body}
    await student.save();
    res.json({message: "courses edit "});
});

exports.deletecourses = catchAsyncErron (async (req,res,next) => {
    const student = await Student.findById(req.id).exec();
    const filtercourses = student.resume.courses.filter(
        (i) => i.id !== req.params.eduid
    )
    student.resume.courses = filtercourses;
    await student.save();
    res.json({message: "courses deleted "});
});

//-----------------projects---------------------------


exports.addprojects = catchAsyncErron (async (req,res,next) => {
    const student = await Student.findById(req.id).exec();
    const {resume} = student;
    resume.projects.push({...req.body, id:uuidv4()});
    await student.save();
    res.json({message: "projects added"});
});

exports.editprojects = catchAsyncErron (async (req,res,next) => {
    const student = await Student.findById(req.id).exec();
    const projectsIndex = student.resume.projects.findIndex((i) =>
        i.id === req.params.eduid
    );
    student.resume.projects[projectsIndex] = { ...student.resume.projects[projectsIndex],...req.body}
    await student.save();
    res.json({message: "projects edit"});
});

exports.deleteprojects = catchAsyncErron (async (req,res,next) => {
    const student = await Student.findById(req.id).exec();
    const filterprojects = student.resume.projects.filter(
        (i) => i.id !== req.params.eduid
    )
    student.resume.projects = filterprojects;
    await student.save();
    res.json({message: "projects deleted "});
});

//-----------------skills---------------------------


exports.addskills = catchAsyncErron (async (req,res,next) => {
    const student = await Student.findById(req.id).exec();
    const {resume} = student;
    resume.skills.push({...req.body, id:uuidv4()});
    await student.save();
    res.json({message: "skills added"});
});

exports.editskills = catchAsyncErron (async (req,res,next) => {
    const student = await Student.findById(req.id).exec();
    const skillsIndex = student.resume.skills.findIndex((i) =>
        i.id === req.params.eduid
    );
    student.resume.skills[skillsIndex] = { ...student.resume.skills[skillsIndex],...req.body}
    await student.save();
    res.json({message: "skills Job "});
});

exports.deleteskills = catchAsyncErron (async (req,res,next) => {
    const student = await Student.findById(req.id).exec();
    const filterskills = student.resume.skills.filter(
        (i) => i.id !== req.params.eduid
    )
    student.resume.skills = filterskills;
    await student.save();
    res.json({message: "skills deleted "});
});


//-----------------accomplishments---------------------------


exports.addaccomplishments = catchAsyncErron (async (req,res,next) => {
    const student = await Student.findById(req.id).exec();
    const {resume} = student;
    resume.accomplishments.push({...req.body, id:uuidv4()});
    await student.save();
    res.json({message: "Job added"});
});

exports.editaccomplishments = catchAsyncErron (async (req,res,next) => {
    const student = await Student.findById(req.id).exec();
    const accomplishmentsIndex = student.resume.jobs.findIndex((i) =>
        i.id === req.params.eduid
    );
    student.resume.accomplishments[accomplishmentsIndex] = { ...student.resume.accomplishments[accomplishmentsIndex],...req.body}
    await student.save();
    res.json({message: "edit Job "});
});

exports.deleteaccomplishments = catchAsyncErron (async (req,res,next) => {
    const student = await Student.findById(req.id).exec();
    const filteraccomplishments = student.resume.accomplishments.filter(
        (i) => i.id !== req.params.eduid
    )
    student.resume.accomplishments = filteraccomplishments;
    await student.save();
    res.json({message: "Education deleted "});
});


