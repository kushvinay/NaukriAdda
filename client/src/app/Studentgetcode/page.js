"use client";
import React, { useEffect, useState } from "react";
import { asyncCurrentUser, asynclogin } from "@/Store/Actions/StudentActions";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Nav from "../components/Nav";

const Studentforgetpassword = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  
  const [code, setCode] = useState("");
  

  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(asyncforgetpassword(email));
  };


  return (
    <div className=" w-screen h-screen ">
      <Nav></Nav>
      <div className=" h-4/5 flex justify-center items-center">
        <form className=" text-center  " onSubmit={handlesubmit} method="Post">
          <h1 className="mt-6 text-3xl text-slate-800 mb-10">Forget Password </h1>
          <label className="mt-6 text-sm text-gray-700" >Enter the Code 
          <input
            className=" w-80 block bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-4"
            type="number"
            placeholder="****"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          </label>

          <button
            className="px-5 py-3 bg-gray-800 text-white rounded-lg mt-6"
            type="submit"
          >
            Verify
          </button>
          <div  className=" text-sm mt-3 ">
            Do not have a account <Link className="text-blue-500" href={"/Studentsignup"}>Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Studentforgetpassword;
