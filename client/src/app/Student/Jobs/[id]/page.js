"use client";
import { useEffect, useState } from "react";
import axios from "../../../../../axiosconfig";
import moment from "moment";
import { asynapplyjob } from "@/Store/Actions/StudentActions";
import { useDispatch } from "react-redux";
import { MapPinIcon } from "@heroicons/react/24/outline";

const page = ({ params }) => {
  const dispatch = useDispatch();
  let [job, setjob] = useState("");
  let [apply,setapply] = useState(false)

  const handleApply= (e) => {
    dispatch(asynapplyjob(job._id));
    setapply(true)
  };

  const fatchjob = async() => {
    const { data } = await axios.post(`/user/student/job/${params.id}`);
    console.log(data.job);
    setjob(data.job);
  }

  useEffect(() => {
    fatchjob()   
  }, []);


  return (
    <>
      <h1 className="text-4xl text-gray-800 text-center py-6 font-semibold  ">
        {job.title}
      </h1>
      <div className="w-[850px] m-auto my-10">
        <button className=" border-[1px] border-gray-300 p-1 rounded text-sm">
          Activly hiring
        </button>
        <div className="flex justify-between border-b-[1px] pb-4 mt-5 mb-1">
          <div>
            <h4 className=" text-xl text-black py-2">{job.title}</h4>
            <p className="text-sm text-gray-600">{job.employe && job.employe?.organisationname}</p>
          </div>
        </div>
        <h6 className="text-gray-600 my-2"><MapPinIcon className=" h-4 pb-1 inline-block me-1 " />{job && job.location ? job.location : job.internshiptype}</h6>
        <div className=" flex text-sm pb-3 ">
          <div className="me-7">
            <h6 className="text-gray-700">SALARY</h6>
            <h6 className="text-gray-600">{job.salary} -LPA</h6>
          </div>
        </div>
        <div className="border-b-[1px] pb-2">
          <p className=" text-xs text-green-600 bg-green-100 inline-block p-[2px] rounded ">
            {moment(job.createdAt).fromNow()}{" "}
          </p>
        </div>
        <div className="flex justify-end">
          {/* <button
            className="text-sky-500 border-[1px] text-sm
            px-3 py-2 border-sky-500 mt-2 "
          >
            View details
          </button> */}
        </div>
        <div className="my-3">
          <h2 className="text-xl text-gray-700 font-medium py-1 ">
            Skills Required
          </h2>
          <h6 className="text-gray-600 pt-2">{job.skills}</h6>
        </div>
        {job.description && (
          <div className="my-3">
            <h2 className="text-xl text-gray-700 font-medium py-1 ">
              Job Description
            </h2>
            <h6 className="text-gray-600 pt-2">
              {job.description}
            </h6>
          </div>
        )}
        {job.assesments && (
          <div className="my-3">
            <h2 className="text-xl text-gray-700 font-medium py-1 ">Assessments</h2>
            <h6 className="text-gray-600 pt-2">
              {job?.assesments}
            </h6>
          </div>
        )}
        {job.perks && (
          <div className="my-3">
            <h2 className="text-xl text-gray-700 font-medium py-1 ">Perks</h2>
            <h6 className="text-gray-600 pt-2">
              {job?.perks}
            </h6>
          </div>
        )}
        {job.perferences && (
          <div className="my-3">
            <h2 className="text-xl text-gray-700 font-medium py-1 ">Preferences</h2>
            <h6 className="text-gray-600 pt-2">
              {job?.perferences}
            </h6>
          </div>
        )}
        {job.opening && (
          <div className="my-3">
            <h2 className="text-xl text-gray-700 font-medium py-1 ">Number of opening</h2>
            <h6 className="text-gray-600 pt-2">
              {job?.opening}
            </h6>
          </div>
        )}
        <div className="w-full flex items-center justify-center">
        { apply?<button className=" px-4 py-2 bg-green-400 text-white">Applied</button>:<button className="  px-4 py-2 bg-sky-400 text-white "onClick={handleApply}>Apply Now</button> }
        </div>
        
      </div>
    </>
  );
};

export default page;
