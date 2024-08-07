"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asynStudentlogout } from "@/Store/Actions/StudentActions";
import { useRouter } from "next/navigation";

const Studentnav = () => {
  const dispatch = useDispatch();
  const [profileDropdown, setProfileDropdown] = useState(false);
  const { student } = useSelector((state) => state.StudentSlice);
  const router = useRouter();

  // console.log(student)

  const changeProfileDropdown = () => { 
    setProfileDropdown(!profileDropdown);
  };

  const Studentsignout =async () =>{
    const res = await dispatch(asynStudentlogout())
    console.log(res)

    if(res.success){
      router.push("/")
    }
  }
  
  return (
    <nav className=" p-4 flex justify-between items-center px-10">
      {/*  Company Logo */}
      <div className="flex items-center">
        <Link href="/Student/StudentHome">
        <h1 className="text-blue-500">NaukriAdda</h1>
        </Link>
      </div>
      <div className=" flex">
        <Link className=" text-blue-500 me-16" href="/Student/Internships">Internship</Link>
        <Link className=" text-blue-500 me-16" href="/Student/Jobs">Job</Link>
        <div className=" relative">

        <button
          // onClick={changeProfileDropdown}
          onMouseEnter={changeProfileDropdown}
          className="flex items-center text-blue-500 focus:outline-none"
          >
          Job Seekers
        </button>
        {profileDropdown && (
          <div
          className="absolute right-0 mt-2 w-48 bg-white border rounded shadow z-10"
          onMouseLeave={changeProfileDropdown}
          >
            <ul className="p-2">
              <li className="cursor-pointer hover:bg-gray-200 p-2 border-b-[1px] ">
                <Link href="/Student/profile">
                <img className="h-[50px] rounded-sm  ps-1" src={student && student.avatar.url} alt="profile" />

                  {student && student.fullname}
                  </Link>
              </li>
              <li className="cursor-pointer hover:bg-gray-200 p-2">
                <Link href="/Student/Editresume">Edit Resume</Link>
              </li>
              <li className="cursor-pointer hover:bg-gray-200 p-2">
                <Link href="/Student/changepassword">Change Password</Link>
              </li>
              <li className="cursor-pointer hover:bg-gray-200 p-2">
                <Link href="/Student/updatestudent">Update Profile</Link>
              </li>
              <li className="cursor-pointer hover:bg-gray-200 p-2">
                <p onClick={Studentsignout}>Logout</p>
              </li>
            </ul>
          </div>
        )}
        </div>
      </div>
    </nav>
  );
};

export default Studentnav;
