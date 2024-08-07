"use client";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "../../../axiosconfig";
import Bigjobcard from "./Bigjobcard";
import { asyncAddjobs, setjobs ,asyncCurrentUser } from "@/Store/Actions/StudentActions";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const JobContant = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  
  // const fatchin = async () => {
  //    dispatch(setjobs())
  // };

  // useEffect(() => {
  //   if(!isAuthenticated) router.push("/Studentlogin")
  //   fatchin()
  // }, []);
  let { isAuthenticated , student , jobs} = useSelector((state) => state.StudentSlice);

  const [filterDropdown, setfilterDropdown] = useState(false);
  // const [Jobs, setJobs] = useState(datas);
  const [hasMore, setHasMore] = useState(true);
  const [profile, setprofile] = useState();
  // const [location, setlocation] = useState("");
  // const [type, settype] = useState("");
  
  
  // console.log(Jobs)
  // console.log("pro")
  // console.log(profile)
  const changeFilterDropdown = () => {
    setfilterDropdown(!filterDropdown);
  };

  const getMorejobs = async () => {
    // let { data } = await axios.post(
    //   `/user/student/find-job/pagination?lenth=${Jobs.length}&limit=5`
    // );
    // let newJobs = await data.jobs;
    // setJobs((post) => [...post, ...newJobs]);
    await  dispatch(asyncAddjobs(jobs.length));
  };

  async function getFilterJobs(){
    const { data } = await axios.post("/user/student/find-internship/pagination");

  }

  return (
    <>
      <div className="w-full px-20 relative">
        {/* {jobs.map((j) => <h1>heool</h1>)} */}
        {/* <button onClick={changeFilterDropdown()}>Filter</button> */}
        {/* {filterDropdown && (
          <div className=" absolute left-0  mt-2 w-48 bg-white border rounded shadow z-10 " onMouseLeave={changeFilterDropdown() }>
            <form action="" onSubmit={changeFilterDropdown()} >
              <input
                className=" w-45 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2 mx-5"
                type="text"
                placeholder="Profile"
                value={profile}
                onChange={(e) => setprofile(e.target.value)}
              />
              <label className="bg-while text-gray-800 mx-4 my-2 px-2 ">
                Job Type:
                <select
                  className=" w-45 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none rounded-sm ms-3"
                  value={type}
                  onChange={(e) => settype(e.target.value)}
                >
                  <option value="">Select Jobtype</option>
                  <option value="In office">In office</option>
                  <option value="Remote">Remote</option>
                </select>
              </label>
            </form>
          </div>
        )} */}
      </div>

      <InfiniteScroll
        dataLength={jobs && jobs.length}
        next={getMorejobs}
        hasMore={hasMore}
        loader={<h3 className="text-xl text-center py-5 "> Loading...</h3>}
        endMessage={<h4>Nothing more to show</h4>}
      >
        {jobs && jobs.map((job) => (
          <Bigjobcard key={job._id} data={job} />
        ))}
      </InfiniteScroll>
      {/* <style jsx>
        {`
          .back {
            padding: 10px;
            background-color: dodgerblue;
            color: white;
            margin: 10px;
          }
        `}
      </style> */}
    </>
  );
};

export default JobContant;
