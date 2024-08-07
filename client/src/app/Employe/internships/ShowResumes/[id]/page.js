"use client";
import EmployeInternpage from "@/app/components/EmployeInternpage";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Resume from "@/app/components/Resume";
import {
  asyncCurrentEmploye,
  asyncSetResumes,
} from "@/Store/Actions/EmployeAction";

const ShoResume = ({ params }) => {
  const dispatch = useDispatch();
  const { isAuthenticated, employe, resumes } = useSelector(
    (state) => state.EmployeSlice
  );

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(asyncCurrentEmployee());
    }
    if (!isAuthenticated) router.push("/");
  }, [isAuthenticated]);
  
  const Resumedata = [...resumes[params.id]];
  console.log(Resumedata);
  return (
    <div>
      {/* { Resumedata && 
      <Resume data={Resumedata}/>
      } */}
    </div>
  );
};

export default ShoResume;
