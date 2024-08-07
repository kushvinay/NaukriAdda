"use client";
import EmployeInternpage from "@/app/components/EmployeInternpage";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Resume from "@/app/components/Resume";
import {
  asyncCurrentEmploye,
  asyncSetResumes,
} from "@/Store/Actions/EmployeAction";
import { useRouter } from "next/navigation";

const ShoResume = ({ params }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isAuthenticated, employe, resumes } = useSelector(
    (state) => state.EmployeSlice
  );

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(asyncCurrentEmploye());
    }
    if (!isAuthenticated) router.push("/");
  }, [isAuthenticated]);

  const Resumedata = resumes.filter((ele) => ele._id === params.id);
  console.log(Resumedata);

  return (
    <div>
      {Resumedata &&
        Resumedata.map((data) => (
          
          <Resume data={data} key={data._id} />
        ))}
    </div>
  );
};

export default ShoResume;
