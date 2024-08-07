"use client";
import {
  asynUpdateAvatar,
  asyncCurrentUser,
} from "@/Store/Actions/StudentActions";
import Image from "next/image";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Card from "@/app/components/Card";
import Internshipcard from "@/app/components/intershipCard";
import { Slide } from "react-toastify";
import Responsive from "@/app/components/slick";

const profile = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const Acticeinput = (e) => {
    e.preventDefault();
    const avatarinp = document.getElementById('avatarinp');
    avatarinp.click();
  }

  let { isAuthenticated, student } = useSelector((state) => state.StudentSlice);
  useEffect(() => {
    if(!isAuthenticated) dispatch(asyncCurrentUser())
    .then(() => {
    })
    .catch((error) => {
      console.error('Authentication error:', error);
      router.push('/Studentlogin');
    });
  }, [isAuthenticated]);

  const UploadAvatar = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    console.log(e.target.avatar.files[0]);
    formdata.set("avatar", e.target.avatar.files[0]);
    console.log(formdata);
    dispatch(asynUpdateAvatar(formdata));
  };
  return (
    <div className="py-10 ">
      <div className="w-[900px] m-auto border-[1px] border-inherit bg-slate-200 rounded-lg">
        <h1 className="text-3xl text-center py-5  font-medium text-gray-700 ">
          Profile
        </h1>
        {student && (
          <Image
            className="m-auto rounded-sm"
            src={student && student.avatar.url}
            height={140}
            width={140}
            onClick={Acticeinput}
          ></Image>
        )}
        <p className="text-[8px] text-center mb-1">Click on Profile for Upload  </p>
        <form className="m-auto w-full flex items-center justify-center " onSubmit={UploadAvatar} encType="multipart/form-data">
          <input className="hidden" type="file" name="avatar" id="avatarinp" />
          <button className=" border border-black bg-gray-800 text-white px-2 rounded-sm mt-1" type="Submit">Update</button>
        </form>
        {student && (
          <h1 className="text-center text-2xl text-gray-800 ">
            {student.firstname} {student.lastname}{" "}
          </h1>
        )}
      {student &&
      <div className="pt-3">
        <h2 className="text-3xl text-gray-800 text-center border-t-[1px] py-3">Applied Jobs</h2>
        <div className="whitespace-nowrap overflow-x-scroll scrollbar-hide">

        {student.internships.length === 0 ? <h3 className="text-xl text-gray-500 m-auto py-2 text-center"> You have not applied for any Jobs yet!</h3>
        : <div className="flex  px-4 ">
        {student && 
        student.jobs.map((job) => (
          <div className="px-2 pb-3">
            <Card  key={job._id} data={job}/>
          </div>
        ))
      }
      </div>
        }
        </div>
      </div>}
      {student &&
      <div className="pt-5 ">
        <h2 className="text-3xl text-gray-700 text-center py-3 border-t-[1px]">Applied Internships</h2>
        <div className="whitespace-nowrap overflow-x-scroll scrollbar-hide ">

        {student.internships.length === 0 ? <h3 className="text-xl text-gray-500 text-center py-3"> You have not applied for any Internships yet!</h3>
        : <div className="flex  px-4 ">
        {student && 
        student.internships.map((internship) => (
          <div className="px-2 pb-10">
            <Internshipcard  key={internship._id} data={internship}/>
          </div>
        ))
      }
      </div>
        }
        </div>
      </div>}
      </div>
    </div>
  );
};

export default profile;
