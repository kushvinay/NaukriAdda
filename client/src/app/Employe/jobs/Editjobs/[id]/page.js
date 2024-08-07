"use client";
import React, { useEffect, useState } from "react";
import {
  asyncCurrentEmploye,
  asyncEditJob,
} from "@/Store/Actions/EmployeAction";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

const Editjobs = ({params}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isAuthenticated, employe } = useSelector(
    (state) => state.EmployeSlice
  );
  const jobarry = employe.jobs.filter((ele) => ele._id === params.id);
  const initalStateJob = jobarry[0];
  const [title, settitle] = useState(initalStateJob.title);
  const [skills, setskills] = useState(initalStateJob.skills);
  const [jobtype, setjobtype] = useState(initalStateJob.jobtype);
  const [opening, setopening] = useState(initalStateJob.opening);
  const [description, setdescription] = useState(initalStateJob.description);
  const [salary, setsalary] = useState(initalStateJob.salary);
  const [perks, setperks] = useState(initalStateJob.perks);
  const [assesments, setassesments] = useState(initalStateJob.assesments);
  const [perferences, setperferences] = useState(initalStateJob.perferencess);
  const [location, setlocation] = useState(initalStateJob.location);

  const hendeleditjob= (e) => {
    e.preventDefault();
    const job = {
      title,
      skills,
      jobtype,
      opening,
      description,
      salary,
      assesments,
      perferences,
    };
    if(location !== ""){
      job.location = location;
    }
    dispatch(asyncEditJob(params._id,job));
  };

  // useEffect(() => {
  //   if (!isAuthenticated) dispatch(asyncCurrentEmploye());
  //   console.log(employe);
  //   if (isAuthenticated) router.push("/Employe/EmployeHome");
  // }, [isAuthenticated]);

  return (
    <div className="  ">
      <div className="  flex flex-col items-center justify-center ">
        <h1 className="  text-3xl font-medium  my-8  text-gray-700  ">Edit Job</h1>
        <form
          className="flex flex-col text-center"
          onSubmit={hendeleditjob}
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
              placeholder="assesments"
              value={assesments}
              onChange={(e) => setassesments(e.target.value)}
            />

            <input
              className="w-80 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2 mx-5"
              type="text"
              placeholder="perks"
              value={perks}
              onChange={(e) => setperks(e.target.value)}
            />

            <input
              className="w-80 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2 mx-5"
              type="number"
              placeholder="salary"
              value={salary}
              onChange={(e) => setsalary(e.target.value)}
              required
            />

            <input
              className="w-80 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2 mx-5"
              type="number"
              value={opening}
              placeholder="opening"
              onChange={(e) => setopening(e.target.value)}
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
            value={location}
            onChange={(e) => setlocation(e.target.value)}
          />
          )}
          <input
            className=" bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2 mx-5"
            type="text"
            placeholder="Write required Skills "
            value={skills}
            onChange={(e) => setskills(e.target.value)}
          />
          <textarea
            className=" bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2 mx-5"
            placeholder="Write full Job Description"
            name="description"
            value={description}
            cols="60"
            rows="4"
            onChange={(e) => setdescription(e.target.value)}
          ></textarea>
          <textarea
            className=" bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2 mx-5"
            placeholder="Write perferences "
            name="perferences"
            value={perferences}
            id=""
            cols="60"
            rows="4"
            onChange={(e) => setperferences(e.target.value)}
          ></textarea>
          <button className=" text-2xl m-auto  rounded-md px-5 py-2 bg-gray-800 text-white my-3 " type="submit">
            Edit Job
          </button>
        </form>
      </div>
    </div>
  );
};


export default Editjobs;
