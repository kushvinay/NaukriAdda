const {
    homepage, 
    employe,
    employesignup,
    employesignin,
    employesignout,
    employechangepassword,
    employeupdate,
    employelogo,
    createinternship,
    readoneinternship,
    readdemo,
    createjob,
    readonejob,
    readjob,
    employeEditinternship,
    employeDeactiveinternship,
    employeDeactivejob,
    employeEditjob,
    employeInternResume,
    employejobResume,
} = require("../controllers/employeController")
const express  = require("express");
const { isAuthenticated } = require("../middlewares/auth");
const router = express.Router();

router.get("/",isAuthenticated, homepage)

router.post("/employe",isAuthenticated, employe)

router.post("/signup", employesignup);

router.post("/signin", employesignin);

router.get("/signout", isAuthenticated ,  employesignout);

// router.post("/student/forget-password",  studentforgetpassword);

// router.post("/student/forget-link/:id",  studentforgetlink);

router.post("/change-password",isAuthenticated,  employechangepassword);

router.post("/update-employe",isAuthenticated,  employeupdate);

router.post("/organisation-logo",isAuthenticated,  employelogo);

//-----------------internships----------------------

router.post("/internship/create", isAuthenticated,createinternship);

router.post("/internship/read/:id", isAuthenticated,readoneinternship);

// router.post("/internship/read/all", isAuthenticated,readdemo);

router.post("/internship/all",isAuthenticated,readdemo)

router.post("/Edit-Internship/:id",isAuthenticated,employeEditinternship)

router.post("/Internship-isActive/:id",isAuthenticated, employeDeactiveinternship)

router.post("/Interns-resume/:id", employeInternResume)





//-----------------jobs----------------------

router.post("/job/create", isAuthenticated,createjob)

router.post("/job/read/:id", isAuthenticated,readonejob)

router.post("/job/read/all/:id", isAuthenticated,readjob)

router.post("/Edit-job/:id",isAuthenticated, employeEditjob)

router.post("/job-isActive/:id",isAuthenticated, employeDeactivejob)

router.post("/Job-resume/:id", employejobResume)






module.exports = router;