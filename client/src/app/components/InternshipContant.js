"use client";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "../../../axiosconfig";
import Biginterncard from "./Biginterncard";
import { asyncAddInternship } from "@/Store/Actions/StudentActions";
import { useDispatch, useSelector } from "react-redux";
import { Calistoga } from "next/font/google";

const InternshipContant = () => {
  const [filterDropdown, setfilterDropdown] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const dispatch = useDispatch();
  let { isAuthenticated , student , internships} = useSelector((state) => state.StudentSlice);

  // useEffect(() => {
  //   if(!isAuthenticated) router.push("/Studentlogin")
  // }, []);

  // let  [Internships, setInternships] = useState(internships);


  const changeFilterDropdown = () => {
    setfilterDropdown(!filterDropdown);
  };
  // const AddmoreinState = () => {
  //   dispatch(asyncAddInternship(Internships.length))
  //   getMoreinternship();
  // };
  const getMoreinternship = async () => {
    // const { data } = await axios.post(
    //   `/user/student/find-internship/pagination?lenth=${Internships.length}&limit=5`
    // );
    // let newInternships = await data.internships;
    // if(internships.length == Internships.length){
    //   // AddmoreinState();
    // }
    await  dispatch(asyncAddInternship(internships.length));
  // let { internships} = useSelector((state) => state.StudentSlice);
    console.log(internships.length)
    // console.log(internships)
    // const lastindex = internships.length + 2;
    // console.log()
    // const newInternships = internships.slice(Internships.length,)
    // console.log(newInternships)
    // setInternships((post) => [...post, ...newInternships]);
    // console.log("yaha aya")
    // console.log(internships)
    // await setInternships((post) => internships);
    // console.log("yaha 2")
    // console.log(internships.length)
  };

  // async function getFilterInternships(){
  //   const { data } = await axios.post("/user/student/find-internship/pagination");

  // }

  return (
    <>
      <div className="w-full px-20 relative">
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
        dataLength={internships && internships.length}
        next={getMoreinternship}
        hasMore={hasMore}
        loader={<h3 className="text-xl text-center py-5 "> Loading...</h3>}
        endMessage={<h4>Nothing more to show</h4>}
      >
        {internships?.map((internship) => (
          <Biginterncard key={internship._id} data={internship} />
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

export default InternshipContant;
