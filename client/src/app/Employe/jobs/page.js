"use client";
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import EmployBigjob from "@/app/components/EmployBigjob";
import { 
  HandRaisedIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";


const Jobs = () => {
  const router = useRouter();
  
  const { employe } = useSelector(
    (state) => state.EmployeSlice
  );
  

  return (
    <div className="">
      <h1 className="text-3xl font-semiboldS text-center my-10 text-gray-800 ">
        JOBS POST
      </h1>
      {employe && employe.jobs.length == 0 && 
      <div className=" flex flex-col">
        <HandRaisedIcon className="h-10 inline-block text-gray-800 mb-2" />
        <h2 className="text-2xl text-gray-800 text-center">Hi, You have not post any Job Yet !</h2>
        <h3 className="text-xl text-gray-600 text-center mt-3 mb-5 ">Post the Job and find the best Candidate </h3>
        <Link href={'/Employe/CreateJob'}  className=" m-auto py-2 px-4 bg-blue-500 text-white rounded-md">Job Post </Link>
      </div>
      }
      <div className="w-full flex flex-col items-center justify-center">
        {employe && employe.jobs.map((job) => (
          <EmployBigjob data={job} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
