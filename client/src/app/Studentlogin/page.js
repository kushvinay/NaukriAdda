"use client";
import React, { useEffect, useState } from "react";
import { asyncCurrentUserwithall, asynclogin } from "@/Store/Actions/StudentActions";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Nav from "../components/Nav";

export const metadata = {
  title: 'JobNex',
  description: 'Find & Hire Experts for Any Job and Internship',
}

const Studentsignin = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isAuthenticated, student } = useSelector(
    (state) => state.StudentSlice
  );
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  console.log(isAuthenticated);

  const handleSignin = (e) => {
    e.preventDefault();
    const Student = {
      email,
      password,
    };
    dispatch(asynclogin(Student));
  };

  useEffect(() => {
    if (!isAuthenticated) dispatch(asyncCurrentUserwithall());
    console.log(student);
    if (isAuthenticated && student) router.push("/Student/StudentHome");
    console.log(student);
  }, [isAuthenticated]);

  return (
    <div className=" w-screen h-screen ">
      <Nav></Nav>
      <div className=" h-4/5 flex justify-center items-center">
        <form className=" text-center  " onSubmit={handleSignin} method="Post">
          <h1 className="mt-6 text-3xl text-slate-800">Job Seekers Login </h1>

          <input
            className="mt-6 w-80 block bg-white text-gray-800 border rounded-lg  focus:border-blue-500 p-3 placeholder-gray-500 focus:outline-none my-4"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="mt-6 w-80  block bg-white text-gray-800 border rounded-lg  focus:border-blue-500 p-3 placeholder-gray-500 focus:outline-none my-4"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <div className="flex flex-row-reverse">
          <Link className=" block text-sm text-blue-600 mt-2" href={"/Studentforgetpassword"}>forget Password</Link>
          </div>
          
          <button
            className="px-5 py-3 bg-blue-700 text-white rounded-lg mt-6"
            type="submit"
          >
            Signin
          </button>
          <div  className=" text-sm mt-1 ">
            Do not have an account? <Link className="text-blue-500" href={"/Studentsignup"}>Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Studentsignin;
