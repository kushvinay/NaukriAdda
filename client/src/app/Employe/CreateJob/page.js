"use client";
import React, { useEffect, useState } from "react";
import {
  asyncCurrentEmploye,
  asyncEmployeCreateJob,
} from "@/Store/Actions/EmployeAction";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

const CreateJob = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isAuthenticated, employe } = useSelector(
    (state) => state.EmployeSlice
  );
  console.log(employe);
  const [title, settitle] = useState("");
  const [skills, setskills] = useState("");
  const [jobtype, setjobtype] = useState("");
  const [opning, setopning] = useState("");
  const [description, setdescription] = useState("");
  const [salary, setsalary] = useState("");
  const [perks, setperks] = useState("");
  const [assesments, setassesments] = useState("");
  const [perference, setperference] = useState("");
  const [location, setlocation] = useState("");

  const createJob = (e) => {
    e.preventDefault();
    const job = {
      title,
      skills,
      jobtype,
      opning,
      description,
      salary,
      assesments,
      perference,
    };
    if(location !== ""){
      job.location = location;
    }
    console.log(job);
    dispatch(asyncEmployeCreateJob(job)).then(() => {
      router.push("/Employe/jobs")
    })
    
  };

  return (
    <div className="  ">
      <div className="  flex flex-col items-center justify-center ">
        <h1 className="  text-3xl font-medium  my-8   ">JOB POST</h1>
        <form
          className="flex flex-col text-center"
          onSubmit={createJob}
          method="Post"
        >
          <div className="grid grid-cols-2">
            <input
              className=" w-80 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2 mx-5"
              type="text"
              placeholder="Job Title"
              value={title}
              onChange={(e) => settitle(e.target.value)}
            />

            <input
              className="w-80 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2 mx-5"
              type="text"
              placeholder="Assessment"
              value={assesments}
              onChange={(e) => setassesments(e.target.value)}
            />

            <input
              className="w-80 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2 mx-5"
              type="text"
              placeholder="Perks"
              value={perks}
              onChange={(e) => setperks(e.target.value)}
            />

            <input
              className="w-80 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2 mx-5"
              type="number"
              placeholder="Salary"
              value={salary}
              onChange={(e) => setsalary(e.target.value)}
              required
            />

            <input
              className="w-80 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2 mx-5"
              type="number"
              value={opning}
              placeholder="Opening"
              onChange={(e) => setopning(e.target.value)}
              required
            />

            <label className="bg-while text-gray-800 mx-4 my-2 px-2 ">
              Job Type:
              <select
                className=" w-56 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none rounded-sm ms-3"
                value={jobtype}
                onChange={(e) => setjobtype(e.target.value)}
                required
              >
                <option value="">Select Jobtype</option>
                <option value="In office">In office</option>
                <option value="Remote">Remote</option>
              </select>
            </label>
          </div>
          {jobtype == "In office" && (
            <input
            className=" bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2 mx-5"
            type="text"
            placeholder="Location"
            onChange={(e) => setlocation(e.target.value)}
          />
          )}
          <input
            className=" bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2 mx-5"
            type="text"
            placeholder="Required Skills "
            value={skills}
            onChange={(e) => setskills(e.target.value)}
          />
          <textarea
            className=" bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2 mx-5"
            placeholder="Job Description"
            name="description"
            value={description}
            cols="60"
            rows="4"
            onChange={(e) => setdescription(e.target.value)}
          ></textarea>
          <textarea
            className=" bg-white text-gray-800 border text-sm border-[#4c68f2] rounde-lg p-3 placeholder-gray-500 focus:outline-none my-2 mx-5"
            placeholder="Perferences "
            name="perference"
            value={perference}
            id=""
            cols="60"
            rows="4"
            onChange={(e) => setperference(e.target.value)}
          ></textarea>
          <button className=" text-2xl m-auto h-14 w-30 rounded-md px-3 py-3 bg-blue-600 text-white my-4 " type="submit">
            Create Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateJob;
