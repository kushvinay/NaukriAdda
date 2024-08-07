import axios from "../../../axiosconfig";
import {
  RemoveUser,
  SetUser,
  Setjobs,
  SetInternships,
  AddInternships,
  AddJobs,
} from "../Slices/StudentSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const setStudent = () => async (dispatch, getState) => {
  try {
    const res = await axios.get("/");
  } catch (error) {
    console.log(error);
  }
};

export const setjobs = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.post(
      "/user/student/find-job/pagination?limit=20"
    );
    // console.log(data.jobs);
    dispatch(Setjobs(data?.jobs));
  } catch (error) {
    console.log(error);
  }
};

export const asyncAddjobs = (length) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post(
      `/user/student/find-job/pagination?length=${length}&limit=20`
    );
    dispatch(AddInternships(data?.jobs));
  } catch (error) {
    console.log(error);
  }
};

export const setinternships = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.post(
      "/user/student/find-internship/pagination?limt=20"
    );
    dispatch(SetInternships(data?.internships));
  } catch (error) {
    console.log(error);
  }
};

export const asyncAddInternship = (length) => async (dispatch, getState) => {
  try {
    console.log(length);
    const { data } = await axios.post(
      `/user/student/find-internship/pagination?lenth=${length}&limit=3`
    );
    console.log(`addinter ${data.internships.length}`);
    dispatch(AddInternships(data.internships));
  } catch (error) {
    console.log(error);
  }
};

export const asyncCurrentUserwithall = () => async (dispatch, getState) => {
  try {
    const res = await axios.post("/user/student");
    console.log(res.data.student.firstname);
    dispatch(SetUser(res.data.student));
    dispatch(setjobs());
    dispatch(setinternships());
  } catch (error) {
    console.log(error);
  }
};

export const asyncCurrentUser = () => async (dispatch, getState) => {
  try {
    const res = await axios.post("/user/student");
    console.log(res.data.student.firstname);
    dispatch(SetUser(res.data.student));
  } catch (error) {
    console.log(error);
  }
};

export const asyncsignup = (student) => async (dispatch, getState) => {
  try {
    const res = await axios.post("/user/student/signup", student);
    dispatch(asyncCurrentUser());
  } catch (error) {
    console.log(error);
  }
};

export const asynclogin = (student) => async (dispatch, getState) => {
  try {
    const res = await axios.post("/user/student/signin", student);
    dispatch(asyncCurrentUser());
  } catch (error) {
    console.log(error);
  }
};

// export const asyncsignoutstudent = (student) => async (dispatch, getState) => {
//   try {
//     const { data } = await axios.get("/student/signout");
//     dispatch(removestudent());
//   } catch (error) {
//     dispatch(iserror(error.response.data.message));
//   }

export const asynStudentlogout = () => async (dispatch, getState) => {
  try {
    const res = await axios.get("/user/student/signout");
    console.log(res)
    dispatch(RemoveUser())
    return res.data
  } catch (error) {
    console.log(error);
    // dispatch(iserror(error.response.data.message));
  }
};

export const asynUpdateAvatar = (formdata) => async (dispatch, getState) => {
  try {
    console.log("call");
    const res = await axios.post(`/user/student/avatar`, formdata);
    dispatch(asyncCurrentUser()).then(() => {
      toast.success("Profile Picture Changed", {
        position: "top-right",
        autoClose: 3000, // Close after 3 seconds`
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }).catch((error) => {
        toast.error('Update failed'); 
      });
  } catch (error) {
    console.log(error);
  }
};

export const asynchangepassword = (password) => async (dispatch, getState) => {
  try {
    const res = await axios.post(`/user/student/change-password`, password);
    dispatch(asyncCurrentUser()).then(() => {
      toast.success("Password changed Successfully", {
        position: "top-right",
        autoClose: 3000, // Close after 3 seconds`
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }).catch((error) => {
        toast.error('Update failed'); 
      });
  } catch (error) {
    console.log(error);
  }
};

export const asynupdatestudent = (updateInfo) => async (dispatch, getState) => {
  try {
    const res = await axios.post("/user/student/update-user", updateInfo);
    dispatch(asyncCurrentUser()).then(() => {
      toast.success("Update Successfully", {
        position: "top-right",
        autoClose: 3000, // Close after 3 seconds`
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }).catch((error) => {
        // Handle error response
        toast.error('Update failed'); // Show an error toast notification
        // console.error('Update error:', error.response.data.error);
      });
  } catch (error) {
    console.log(error);
  }
};

export const asynAddEducation = (education) => async (dispatch, getState) => {
  try {
    await axios.post("/resume/add-education", education);
    dispatch(asyncCurrentUser());
  } catch (error) {
    console.log(error);
  }
};

export const asynDeletEducationRes = (id) => async (dispatch, getState) => {
  try {
    await axios.post(`/resume/delete-education/${id}`);
    dispatch(asyncCurrentUser());
  } catch (error) {
    console.log(error);
  }
};

export const asynAddjobRes = (info) => async (dispatch, getState) => {
  try {
    await axios.post("/resume/add-jobs", info);
    dispatch(asyncCurrentUser());
  } catch (error) {
    console.log(error);
  }
};

export const asynDeletjobRes = (id) => async (dispatch, getState) => {
  try {
    await axios.post(`/resume/delete-jobs/${id}`);
    dispatch(asyncCurrentUser());
  } catch (error) {
    console.log(error);
  }
};

export const asynaddInternshipRes = (info) => async (dispatch, getState) => {
  try {
    await axios.post("/resume/add-intenships", info);
    dispatch(asyncCurrentUser());
  } catch (error) {
    console.log(error);
  }
};

export const asynDeletInternshipRes = (id) => async (dispatch, getState) => {
  try {
    await axios.post(`/resume/delete-intenships/${id}`);
    dispatch(asyncCurrentUser());
  } catch (error) {
    console.log(error);
  }
};

export const asynaddresponsibilitiesRes =
  (info) => async (dispatch, getState) => {
    try {
      await axios.post("/resume/add-responsibilities", info);
      dispatch(asyncCurrentUser());
    } catch (error) {
      console.log(error);
    }
  };

  export const asynDeletresponsibilitiesRes = (id) => async (dispatch, getState) => {
    try {
      await axios.post(`/resume/delete-responsibilities/${id}`);
      dispatch(asyncCurrentUser());
    } catch (error) {
      console.log(error);
    }
  };

export const asynaddcoursesRes = (info) => async (dispatch, getState) => {
  try {
    await axios.post("/resume/add-courses", info);
    dispatch(asyncCurrentUser());
  } catch (error) {
    console.log(error);
  }
};

export const asynDeletcoursesRes = (id) => async (dispatch, getState) => {
  try {
    await axios.post(`/resume/delete-courses/${id}`);
    dispatch(asyncCurrentUser());
  } catch (error) {
    console.log(error);
  }
};

export const asynaddskillsRes = (info) => async (dispatch, getState) => {
  try {
    await axios.post("/resume/add-skills", info);
    dispatch(asyncCurrentUser());
  } catch (error) {
    console.log(error);
  }
};

export const asynDeletskillsRes = (id) => async (dispatch, getState) => {
  try {
    await axios.post(`/resume/delete-skills/${id}`);
    dispatch(asyncCurrentUser());
  } catch (error) {
    console.log(error);
  }
};

export const asynaddprojectsRes = (info) => async (dispatch, getState) => {
  try {
    await axios.post("/resume/add-projects", info);
    dispatch(asyncCurrentUser());
  } catch (error) {
    console.log(error);
  }
};

export const asynDeletprojectsRes = (id) => async (dispatch, getState) => {
  try {
    await axios.post(`/resume/delete-projects/${id}`);
    dispatch(asyncCurrentUser());
  } catch (error) {
    console.log(error);
  }
};

export const asynaddaccomplishmentsRes =
  (info) => async (dispatch, getState) => {
    try {
      await axios.post("/resume/add-accomplishments", info);
      dispatch(asyncCurrentUser());
    } catch (error) {
      console.log(error);
    }
  };

  export const asynDeletaccomplishmentsRes = (id) => async (dispatch, getState) => {
    try {
      await axios.post(`/resume/delete-accomplishments/${id}`);
      dispatch(asyncCurrentUser());
    } catch (error) {
      console.log(error);
    }
  };

export const asynapply = (id) => async (dispatch, getState) => {
  try {
    await axios.post(`/user/student/internship-apply/${id}`);
    dispatch(asyncCurrentUser()).then(() => {
      toast.success("Applyed Successfully", {
        position: "top-right",
        autoClose: 3000, // Close after 3 seconds`
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }).catch((error) => {
        // Handle error response
        toast.error('Update failed'); // Show an error toast notification
        // console.error('Update error:', error.response.data.error);
      });
  } catch (error) {
    console.log(error);
  }
};

export const asynapplyjob = (id) => async (dispatch, getState) => {
  try {
    await axios.post(`/user/student/job-apply/${id}`);
    dispatch(asyncCurrentUser()).then(() => {
      toast.success("Applyed Successfully", {
        position: "top-right",
        autoClose: 3000, // Close after 3 seconds`
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }).catch((error) => {
        // Handle error response
        toast.error('Update failed'); // Show an error toast notification
        // console.error('Update error:', error.response.data.error);
      });
  } catch (error) {
    console.log(error);
  }
};
