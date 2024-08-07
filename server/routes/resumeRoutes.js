const { resume, addeducationSec,addeducationSenSec,addeducationgraduation, editeducation, deleteeducation,
    addjob, editjob, deletejob, 
    addintenships, editintenships, deleteintenships, 
    addresponsibilities, editresponsibilities, deleteresponsibilities, 
    addcourses, editcourses, deletecourses, 
    addprojects, editprojects, deleteprojects,
    addskills, editskills, deleteskills, 
    addaccomplishments, editaccomplishments, deleteaccomplishments, addeducation 
} = require("../controllers/resumeController");
const express  = require("express");
const { isAuthenticated } = require("../middlewares/auth");
const router = express.Router();

//get
router.get("/",isAuthenticated,resume);

//----------------education---------------

//post  add-secondary-education
router.post('/add-education', isAuthenticated,addeducation);

// //post  add-sen-secondary-education
router.post('/add-education/sen-secondary', isAuthenticated,addeducationSenSec)

//post  add-sen-secondary-education
router.post('/add-education/graduation', isAuthenticated,)

//post  edit-education
router.post('/edit-education/:eduid', isAuthenticated,editeducation);

//post  delete-education
router.post('/delete-education/:eduid', isAuthenticated,deleteeducation);

//----------------jobs---------------

//post  add-jobs
router.post('/add-jobs', isAuthenticated,addjob);

//post  edit-jobs
router.post('/edit-jobs/:eduid', isAuthenticated,editjob);

//post  delete-jobs
router.post('/delete-jobs/:id', isAuthenticated,deletejob);

//----------------intenships---------------

//post  add-intenships
router.post('/add-intenships', isAuthenticated,addintenships);

//post  edit-intenships
router.post('/edit-intenships/:eduid', isAuthenticated,editintenships);

//post  delete-intenships
router.post('/delete-intenships/:eduid', isAuthenticated,deleteintenships);

//----------------responsibilities---------------

//post  add-responsibilities
router.post('/add-responsibilities', isAuthenticated,addresponsibilities);

//post  edit-responsibilities
router.post('/edit-responsibilities/:eduid', isAuthenticated,editresponsibilities);

//post  delete-responsibilities
router.post('/delete-responsibilities/:eduid', isAuthenticated,deleteresponsibilities);

//----------------courses---------------

//post  add-courses
router.post('/add-courses', isAuthenticated,addcourses);

//post  edit-courses
router.post('/edit-courses/:eduid', isAuthenticated,editcourses);

//post  delete-courses
router.post('/delete-courses/:eduid', isAuthenticated,deletecourses);

//----------------projects---------------

//post  add-projects
router.post('/add-projects', isAuthenticated,addprojects);

//post  edit-projects
router.post('/edit-projects/:eduid', isAuthenticated,editprojects);

//post  delete-projects
router.post('/delete-projects/:eduid', isAuthenticated,deleteprojects);

//----------------skills---------------

//post  add-skills
router.post('/add-skills', isAuthenticated,addskills);

//post  edit-skills
router.post('/edit-skills/:eduid', isAuthenticated,editskills);

//post  delete-skills
router.post('/delete-skills/:eduid', isAuthenticated,deleteskills);

//----------------accomplishments---------------

//post  add-accomplishments
router.post('/add-accomplishments', isAuthenticated,addaccomplishments);

//post  edit-accomplishments
router.post('/edit-accomplishments/:eduid', isAuthenticated,editaccomplishments);

//post  delete-accomplishments
router.post('/delete-accomplishments/:eduid', isAuthenticated,deleteaccomplishments);

module.exports = router;