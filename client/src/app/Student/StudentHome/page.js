"use client"
import React, { useEffect, useState } from "react";
import Responsive from "@/app/components/slick"; 
import Name from "@/app/components/Name";
import Responsivejob from "@/app/components/jobslick";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const BreakpointSlides = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 530 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 530, min: 0 },
    items: 1,
  },
};
//
// async function getData() {
//   const { data } = await axios.post("/user/student/find-internship/pagination?limit=10");

//   if (!data) {
//     throw new Error("Failed to fetch internship");
//   }
//   //  console.log(data.internships)
//   return await data.internships;
// }

// async function getJobs(){
//   const {data} = await axios.post("/user/student/find-job/pagination");

//   if (!data) {
//     throw new Error("Failed to fetch Jobs");
//   }
//   //  console.log(data.internships)
//   return await data.jobs;

// }
//
const page =  () => {
  // const internships = await getData();
  // const jobs = await getJobs();
  const router = useRouter();
  const dispatch = useDispatch();
  const fatchin = async () => {
    await dispatch(setjobs())
  };
  

  let { isAuthenticated , jobs , internships} = useSelector((state) => state.StudentSlice);
  // useEffect(() => {
  //   if(!isAuthenticated) router.push("/Studentlogin")
  // }, [isAuthenticated])
  

  let Internships = [];
  if(internships != null){
    Internships = internships.slice(0, 5);
  }
  let Jobs = [];
  if(jobs != null){

    Jobs = jobs.slice(0,5)
  }


  return (
    <div className="text-center p-10  bg-white ">
      <Name />
      <h2 className="text-xl text-gray-600 py-5">
        Let's help you to find your dream career{""}
      </h2>
      <h1 className="text-3xl font-semiboldS my-4 ">Internships</h1>
      <div className="max-w-[1150px] m-auto ">
      <Responsive data={Internships}/> 
{/*     
        {internships.map((internship) => (
          // <CarouselComp data={internship}/>
          <Card key={internship._id} data={internship}/>
          
          // <div className=" max-w-[200px] border border-gray-50 hover:border-gray-200  hover:shadow-lg mx-5 text-start w-44">
          //   <Link
          //     href="/"
          //     className=" max-w-[200px] border border-gray-50 hover:border-gray-200  hover:shadow-lg  "
          //   >
          //     <div>
          //       <h4 className=" text-lg text-black">{internship.profile}</h4>
          //       <p>ED Tech</p>
          //     </div>
          //     <div>
          //       <p>pune</p>
          //       <h6>{internship.ducation}</h6>
          //       <h6>150 rs dega</h6>
          //     </div>
          //   </Link>
          // </div>
        ))} */}
      </div>
      <h1 className="text-3xl font-semiboldS  mt-20 pb-4">Jobs</h1>
       <div className="max-w-[1150px] m-auto ">
      <Responsivejob data={Jobs}/> 
{/*     
        {internships.map((internship) => (
          // <CarouselComp data={internship}/>
          <Card key={internship._id} data={internship}/>
          
          // <div className=" max-w-[200px] border border-gray-50 hover:border-gray-200  hover:shadow-lg mx-5 text-start w-44">
          //   <Link
          //     href="/"
          //     className=" max-w-[200px] border border-gray-50 hover:border-gray-200  hover:shadow-lg  "
          //   >
          //     <div>
          //       <h4 className=" text-lg text-black">{internship.profile}</h4>
          //       <p>ED Tech</p>
          //     </div>
          //     <div>
          //       <p>pune</p>
          //       <h6>{internship.ducation}</h6>
          //       <h6>150 rs dega</h6>
          //     </div>
          //   </Link>
          // </div>
        ))} */}
      </div>
    </div>
  );
};

export default page;
