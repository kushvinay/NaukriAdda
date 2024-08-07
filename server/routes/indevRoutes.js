const {
    homepage,
    studentsignup ,
    studentsignin ,
    studentsignout,
    student,
    studentforgetpassword,
    studentforgetlink,
    studentchangepassword,
    studentupdate,
    studentavater,
    studentinternship,
    studentallfindinternships,
    studentfindinternshipspagi,
    studentfindjobpagi,
    studentapplyintern,
    studentjob,
    studentapplyjob,
    applyintern,
    applyjob,
} = require("../controllers/indexcontroller")
const express  = require("express");
const { isAuthenticated } = require("../middlewares/auth");
const router = express.Router();

router.get("/",isAuthenticated, homepage)

router.post("/student",isAuthenticated, student)

router.post("/student/signup", studentsignup);

router.post("/student/signin", studentsignin);

router.get("/student/signout", isAuthenticated ,  studentsignout);

router.post("/student/forget-password",  studentforgetpassword);

router.post("/student/forget-link/:id",  studentforgetlink);

router.post("/student/change-password",isAuthenticated,  studentchangepassword);

router.post("/student/update-user",isAuthenticated,  studentupdate);

router.post("/student/avatar",isAuthenticated,  studentavater);

router.post("/student/internship/:id",  studentinternship);

// router.post("/student/find-internship/:id",  studentfindinternship);

router.post("/student/find-internship/pagination",  studentfindinternshipspagi);

// router.post("/student/internship-apply/:id",  studentapplyintern);
router.post("/student/internship-apply/:id",isAuthenticated, applyintern);

router.post("/student/find-allinternship",  studentallfindinternships);

router.post("/student/job/:id",  studentjob);

// router.post("/student/find-jobs",  studentfindjobs);

router.post("/student/find-job/pagination",  studentfindjobpagi);

router.post("/student/job-apply/:id",isAuthenticated, applyjob);


module.exports = router;