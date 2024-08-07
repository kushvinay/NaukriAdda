const { catchAsyncErron } = require("../middlewares/catchAsyncError");
const Student = require("../models/studentModel");
const Internship = require("../models/internshipModel");
const Jobs = require("../models/jobModel");
const { sendtoken } = require("../utils/SendToken");
const errorHandler = require("../utils/errorHandler");
const { sendmail } = require("../utils/nodemailer");
const path = require("path");
const { employe } = require("./employeController");
const imagekit = require("../utils/imagekit").initImageKit();

exports.homepage = catchAsyncErron(async (req, res, next) => {
  try {
    res.json({ message: "welcon to homepage`" });
  } catch (error) {
    res.json(error);
  }
});

exports.student = catchAsyncErron(async (req, res, next) => {
  const student = await Student.findById(req.id).populate("internships").populate("jobs").exec();
  res.json({ student });
});

exports.studentsignup = catchAsyncErron(async (req, res, next) => {
  console.log(req.body);
  const student = await new Student(req.body).save();
  sendtoken(student, 201, res);
  console.log(student)
});

exports.studentsignin = catchAsyncErron(async (req, res, next) => {
  const student = await Student.findOne({ email: req.body.email })
    .select("+password")
    .exec();
  if (!student) return next(new errorHandler("User not found", 404));

  const isMatch = student.comparepassword(req.body.password);
  if (!isMatch) return next(new errorHandler("Wrong Credientials", 500));

  sendtoken(student, 201, res);
});

exports.studentsignout = catchAsyncErron(async (req, res, next) => {
  res.clearCookie("token");
  res.json({
    success:true,
    message: "successfully signout!",
  });
});

exports.studentforgetpassword = catchAsyncErron(async (req, res, next) => {
  const student = await Student.findOne({ email: req.body.email });

  if (!student) {
    return next(
      new errorHandler("user not found with this email address", 404)
    );
  }
  const URL = `${req.protocol}://${req.get("host")}/user/student/forget-link/${
    student._id
  }`;
  student.passwordResatToken = "1";
  student.save();
  sendmail(req, res, next, URL);
  // res.status(201).json({ URL });
});

exports.studentforgetlink = catchAsyncErron(async (req, res, next) => {
  const student = await Student.findById(req.params.id).exec();

  if (!student) {
    return next(
      new errorHandler("user not found with this email address", 404)
    );
  }
  if (student.passwordResatToken == "1") {
    student.passwordResatToken == "0";
    student.password = req.body.password;
    await student.save();
  } else {
    res.status(500).json({
      message: "invaled password reset link try again",
    });
  }
  res.status(200).json({
    message: "password has been successfully changed",
  });
});

exports.studentchangepassword = catchAsyncErron(async (req, res, next) => {
  const student = await Student.findById(req.id).exec();

  student.password = req.body.password;
  student.save();
  res.status(200).json({
    message: "Password has been Successfully Changed",
  });
});

exports.studentupdate = catchAsyncErron(async (req, res, next) => {
  console.log(req.body);
  const student = await Student.findByIdAndUpdate(req.id, req.body).exec();

  res.status(200).json({
    succcess: true,
    message: "User Update Successfullu",
  });
});

exports.studentavater = catchAsyncErron(async (req, res, next) => {
  const student = await Student.findById(req.id).exec();
  const file = req.files.avatar;

  const modifiedFileName = `intenshala-${Date.now()}${path.extname(file.name)}`;

  if (student.avatar.fileId !== "") {
    await imagekit.deleteFile(student.avatar.fileId);
  }

  const { fileId, url } = await imagekit.upload({
    file: file.data,
    fileName: modifiedFileName,
  });

  student.avatar = { fileId, url };
  await student.save();
  res.status(200).json({
    message: "Avatar has been Successfully Uploaded",
  });
});

exports.studentinternship = catchAsyncErron(async (req, res, next) => {
  const internship = await Internship.findById(req.params.id).exec();

  res.status(200).json({
    internship,
  });
});

exports.studentallfindinternships = catchAsyncErron(async (req, res, next) => {
  const internships = await Internship.find().exec();
  // console.log(internships);
  res.status(200).json({
    internships,
  });
});

exports.studentfindinternshipspagi = catchAsyncErron(async (req, res, next) => {
  let limit = Number(req.query.limit) || 5;
  let lenth = Number(req.query.lenth) || 0;
  const internships = await Internship.find().populate("employe","organisationname organisationlogo")
    .sort({ _id: -1 })
    .skip(lenth)
    .limit(limit)
    .exec();
  res.status(200).json({
    internships,
  });
});

exports.studentapplyintern = catchAsyncErron(async (req, res, next) => {
  console.log(req.id);
  // const student = await Student.findById(req.id).exec();
  // console.log(student)
  const internship = await Internship.findById(req.params.id).exec();
  console.log(internship);
  internship.usersapplied.push(student._id);
  student.internships.push(internship._id);
  console.log(internship);
  console.log(student);
  await student.save();
  await internships.save();

  res.status(200).json({
    message: "Apply Succesfully",
    internship: internship,
  });
});

exports.applyintern = catchAsyncErron(async (req, res, next) => {
  const student = await Student.findById(req.id).exec();
  console.log(student);
  const internship = await Internship.findById(req.params.id).exec();
  const alreadyapply = internship.usersapplied.find(
    (intern) => intern.toString() === student.id
  );
  if (!alreadyapply) {
    internship.usersapplied.push(student._id);
    student.internships.push(internship._id);
    await student.save();
    await internship.save();

    return res.status(200).json({
      massage: "Apply Succesfully",
    });
  }
  res.status(325).json({
    massage: "you already applyed",
  });
});

exports.studentfindjobs = catchAsyncErron(async (req, res, next) => {
  const jobs = await Jobs.find().exec();
  // console.log(jobs)`

  res.status(200).json({
    jobs,
  });
});

exports.studentfindjobpagi = catchAsyncErron(async (req, res, next) => {
  let limit = Number(req.query.limit) || 5;
  let lenth = Number(req.query.lenth) || 0;
  const jobs = await Jobs.find().populate("employe","organisationname organisationlogo")
    .sort({ _id: -1 })
    .skip(lenth)
    .limit(limit)
    .exec();

  res.status(200).json({
    jobs,
  });
});

exports.studentjob = catchAsyncErron(async (req, res, next) => {
  const job = await Jobs.findById(req.params.id).exec();

  res.status(200).json({
    job,
  });
});

exports.studentapplyjob = catchAsyncErron(async (req, res, next) => {
  const job = await Jobs.findById(req.params.id).exec();

  const student = await Student.findById(req.id).exec();
  job.usersapplied.push(student._id);
  console.log(`push the id ${job}`);
  student.jobs.push(job._id);
  console.log(`push the id student ${student}`);
  await student.save();
  await job.save();

  res.status(200).json({
    message: "Apply Succesfully",
  });
});

exports.applyjob = catchAsyncErron(async (req, res, next) => {
  console.log(req.params.id)
  const student = await Student.findById(req.id).exec();
  const job = await Jobs.findById(req.params.id).exec();
  const alreadyapply = job.usersapplied.find(
    (job) => job.toString() === student.id
  );
  if (!alreadyapply) {
    job.usersapplied.push(student._id);
    student.jobs.push(job._id);
    await student.save();
    await job.save();

    return res.status(200).json({
      massage: "Apply Succesfully",
    });
  }
  res.status(325).json({
    massage: "you already applyed",
  });
});
