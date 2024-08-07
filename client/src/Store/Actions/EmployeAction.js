import axios from "../../../axiosconfig";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  SetEmploye,
  RemoveEmploye,
  SetResumes,
  RemoveResumes,
} from "../Slices/EmployeSlice";

export const setStudent = () => async (dispatch, getState) => {
  try {
    const res = await axios.get("/");
  } catch (error) {
    console.log(error);
  }
};

export const asyncRemoveEmploye = () => async (dispatch, getState) => {
  try {
    const response = await axios.get("/signout");
    console.log(response)
    dispatch(RemoveEmploye())
    return response.data
  } catch (error) {
    console.log(error);
    // dispatch(iserror(error.response.data.message));
  }
};


// export const asynEmployelogout = () => async (dispatch, getState) => {
//   try {
//     const res = await axios.get("/employe/signout");
//     console.log(res)
//     dispatch(RemoveEmploye())
//     return res.data
//   } catch (error) {
//     console.log(error);
//     // dispatch(iserror(error.response.data.message));
//   }
// };
 

export const asyncCurrentEmploye = () => async (dispatch, getState) => {
  try {
    const res = await axios.post("/employe/employe");
    console.log(`form curr user ${res.data.employe}`);
    dispatch(SetEmploye(res.data.employe));
  } catch (error) {
    console.log(error);
  }
};

export const asyncEmployeSignup = (employe) => async (dispatch, getState) => {
  try {
    const res = await axios.post("/employe/signup", employe);
    console.log(`res ${res}`);
    dispatch(asyncCurrentEmploye());
  } catch (error) {
    console.log(error);
  }
};

export const asyncEmployeSignin = (employe) => async (dispatch, getState) => {
  try {
    const res = await axios.post("/Employe/signin", employe);
    console.log("login is ");
    dispatch(asyncCurrentEmploye());
  } catch (error) {
    console.log(error);
  }
};

export const asyncEmployeCreateJob = (job) => async (dispatch, getState) => {
  try {
    const res = await axios.post("/Employe/job/create", job).then(() => {
        toast.success("Job Post Created", {
          position: "top-right",
          autoClose: 3000, // Close after 3 seconds`
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error) => {
        toast.error("Creation failed");
      });
    dispatch(asyncCurrentEmploye());
  } catch (error) {
    console.log(error);
  }
};

export const asyncEmployeCreateInternship =(internship) => async (dispatch, getState)=> {
    try {
      const res = await axios
        .post("/Employe/internship/create", internship)
        .then(() => {
          toast.success("Internship Post Created", {
            position: "top-right",
            autoClose: 3000, // Close after 3 seconds`
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        })
        .catch((error) => {
          toast.error("Creation failed");
        });
        dispatch(asyncCurrentEmploye());
    } catch (error) {
      console.log(error);
    }
  };

export const asynupdateemploye = (updateInfo) => async (dispatch, getState) => {
  try {
    const res = await axios.post("/Employe/update-employe", updateInfo);
    dispatch(asyncCurrentEmploye());
  } catch (error) {
    console.log(error);
  }
};

export const asyncEmpchangepassword = (password) => async (dispatch, getState) => {
    try {
      console.log(password)
      const res = await axios.post('/Employe/change-password', password);
      dispatch(asyncCurrentEmploye());
    } catch (error) {
      console.log(error);
    }
  };

  

export const asynUpdateOrganisationlogo = (formdata) => async (dispatch, getState) => {
  try {
    const res = await axios.post(`/Employe/organisation-logo`, formdata).then(() => {
      toast.success("Compony logo update", {
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
    dispatch(asyncCurrentEmploye());
  } catch (error) {
    console.log(error);
  }
};

export const asyncEditInternship =
  (id, internship) => async (dispatch, getState) => {
    try {
      const res = await axios.post(
        `/Employe/Edit-Internship/${id}`,
        internship
      );
      dispatch(asyncCurrentEmploye());
    } catch (error) {
      console.log(error);
    }
  };

export const asyncIntershipIsactive = (id) => async (dispatch, getState) => {
  try {
    const res = await axios.post(`/Employe/Internship-isActive/${id}`);
    dispatch(asyncCurrentEmploye());
  } catch (error) {
    console.log(error);
  }
};

export const asyncEditJob = (id, job) => async (dispatch, getState) => {
  try {
    const res = await axios.post(`/Employe/Edit-job/${id}`, job);
    dispatch(asyncCurrentEmploye());
  } catch (error) {
    console.log(error);
  }
};

export const asyncJobIsactive = (id) => async (dispatch, getState) => {
  try {
    const res = await axios.post(`/Employe/job-isActive/${id}`);
    dispatch(asyncCurrentEmploye());
  } catch (error) {
    console.log(error);
  }
};

export const asyncSetResumes = (id) => async (dispatch, getState) => {
  try {
    const res = await axios.post(`/Employe/Interns-resume/${id}`);
    dispatch(RemoveResumes());
    console.log(`tung fatch = ${res}`);
    dispatch(SetResumes(res.data.Resumes.usersapplied));
  } catch (error) {
    console.log(error);
  }
};

export const asyncSetResumesjob = (id) => async (dispatch, getState) => {
  try {
    const res = await axios.post(`/Employe/Job-resume/${id}`);
    dispatch(RemoveResumes());
    console.log(`tung fatch = ${res}`);
    dispatch(SetResumes(res.data.Resumes.usersapplied));
  } catch (error) {
    console.log(error);
  }
};
