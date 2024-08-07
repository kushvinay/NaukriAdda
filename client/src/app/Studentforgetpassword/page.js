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
  
  const [email, setEmail] = useState("");
  

  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(asyncforgetpassword(email));
  };


  return (
    <div className=" w-screen h-screen ">
      <Nav></Nav>
      <div className=" h-4/5 flex justify-center items-center">
        <form className=" text-center  " onSubmit={handlesubmit} method="Post">
          <h1 className="mt-6 text-3xl text-slate-600 mb-4">Forget Password </h1>
          <label className="mt-4 text-sm text-gray-700" >Enter the valid email address
          <input
            className=" w-80 block bg-white mx-10 text-gray-800 border rounded-lg text-smborder  focus:border-blue-500 p-3 placeholder-gray-500 focus:outline-none my-4"
            type="email"
            placeholder=" Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          </label>

          <button
            className="px-5 py-3 bg-blue-700 text-white rounded-lg mt-6"
            type="submit"
          >
            Send mail
          </button>
          <div  className=" text-sm mt-2">
            Do not have an account <Link className="text-blue-500" href={"/Studentsignup"}>Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Studentforgetpassword;
