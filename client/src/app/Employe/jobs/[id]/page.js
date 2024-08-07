"use client";
import Employejobpage from "@/app/components/EmployeJobpage";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Jobs = ({ params }) => {
  const dispatch = useDispatch();
  const { isAuthenticated, employe } = useSelector(
    (state) => state.EmployeSlice
  );
  const indexjob = employe.jobs.filter((ele) => ele._id === params.id);
  console.log(indexjob)
  const inter = [...employe.jobs];
  console.log(inter)
  return (
    <div>
      {indexjob && indexjob.map((e) => (
        <Employejobpage key={e._id} data={e}/>
      ))}
    </div>
  );
};

export default Jobs;
