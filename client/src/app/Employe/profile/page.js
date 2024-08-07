"use client";
import Image from "next/image";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

import { asynUpdateOrganisationlogo } from "@/Store/Actions/EmployeAction";

const profile = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  let { isAuthenticated, employe } = useSelector((state) => state.EmployeSlice);
  // useEffect(() => {
  //   if(!isAuthenticated) dispatch(asyncCurrentUser())
  //   .then(() => {
  //   })
  //   .catch((error) => {
  //     console.error('Authentication error:', error);
  //     router.push('/Studentlogin');
  //   });
  // }, [isAuthenticated]);
  // const jobnumber = employe.jobs.lenght ; 
  // console.log(jobnumber)
  const Acticeinput = (e) => {
    e.preventDefault();
    const logoinp = document.getElementById('logoinp');
    logoinp.click();
  }
  const UploadAvatar = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    console.log(e.target.organisationlogo.files[0]);
    formdata.set("organisationlogo", e.target.organisationlogo.files[0]);
    console.log(formdata);
    dispatch(asynUpdateOrganisationlogo(formdata));
  };
  return (
    <div className="py-10 ">
      <div className="w-[900px] m-auto border-[1px] border-inherit bg-slate-200 rounded-lg">
        <h1 className="text-3xl text-center py-5  font-medium text-gray-700 ">
          Profile
        </h1>
        {employe && (
          <Image
            className="m-auto rounded-sm"
            src={employe.organisationlogo.url}
            height={140}
            width={140}
            alt="Profile Pic"
            onClick={Acticeinput}
          ></Image>
        )}
        <form className="m-auto w-full flex items-center justify-center " onSubmit={UploadAvatar} encType="multipart/form-data">
          <input className="hidden" type="file" name="organisationlogo" id="logoinp" />
          <button className=" border border-black bg-gray-800 text-white px-2 rounded-sm mt-1" type="Submit">Update</button>
        </form>
        {employe && (
          <h1 className="text-center text-2xl text-gray-800 ">
            {employe.fullname}{" "}
          </h1>
        )}
        {employe && 
        <h4>Company: {employe.organisationname}</h4>
        }
        {employe && 
        <p>Internship Post: {}{} Job Post: {employe.jobs.lenght}</p>
        }
      {/* {employe &&
      <div className="pt-3 overflow-x-scroll ">
        <h2 className="text-3xl text-gray-800 text-center border-t-[1px] py-3">Applyed Jobs</h2>
        {employe.internships.length === 0 ? <h3 className="text-xl text-gray-500 m-auto py-2"> You have not applyed for any job yet!</h3>
        : <div className="flex  px-4 ">
        {employe && 
        employe.jobs.map((job) => (
          <div className="px-2 pb-3">
            <Card  key={job._id} data={job}/>
          </div>
        ))
        }
      </div>
        }
      </div>}
      {employe &&
      <div className="pt-5  overflow-x-scroll ">
        <h2 className="text-3xl text-gray-700 text-center py-3 border-t-[1px]">Applyed Internships</h2>
        {employe.internships.length === 0 ? <h3 className="text-xl text-gray-500 text-center py-3"> You have not applyed for any Internship yet</h3>
        : <div className="flex  px-4 ">
        {employe && 
        employe.internships.map((internship) => (
          <div className="px-2 pb-3">
            <Card  key={internship._id} data={internship}/>
          </div>
        ))
        }
      </div>
        }
      </div>} */}
      </div>
    </div>
  );
};

export default profile;
