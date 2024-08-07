"use client";
import React, { useEffect } from "react";
import { asyncCurrentEmploye, asyncSetResumes } from "@/Store/Actions/EmployeAction";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import ResumeCard from "@/app/components/ResumeCard";

const StudentResume = ({params}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isAuthenticated, employe ,resumes } = useSelector(
    (state) => state.EmployeSlice
  );
  const fatchResume = () => {
    dispatch(asyncSetResumes(params.id))
  }

  useEffect(() => {
    fatchResume();
  },[]);

  useEffect(() => {
    if (!isAuthenticated) dispatch(asyncCurrentEmploye());
    if (!isAuthenticated) router.push("/");
  }, [isAuthenticated]);
  console.log(resumes)
  return ( 
  <div className=" flex flex-wrap py-8 px-16 ">
    {resumes &&
    resumes.map((resume ,index) => (
      <div>
        <ResumeCard data={resume}  key={resume._id}/>
      </div>
    ))
    }
  </div>
  );
};

export default StudentResume;
