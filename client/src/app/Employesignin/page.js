"use client";
import React, { useEffect, useState } from "react";
import { asyncEmployeSignin , asyncCurrentEmploye } from "@/Store/Actions/EmployeAction";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Nav from "@/app/components/Nav";

const Employesignin = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isAuthenticated ,employe } = useSelector((state) => state.EmployeSlice);
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  console.log(isAuthenticated)

  const handleSignin = (e) => {
    e.preventDefault();
    const employe = {
      email,
      password,
    };
    dispatch(asyncEmployeSignin(employe));
  };

  useEffect(() => {
    if (!isAuthenticated) dispatch(asyncCurrentEmploye());
    if (isAuthenticated && employe) router.push("/Employe/EmployeHome");
    console.log(`on signin ${employe}`);
  }, [isAuthenticated]);

  return (
    <div className=" w-screen h-screen ">
      <Nav></Nav>
      <div className=" h-4/5 flex justify-center items-center">
      <form className=" text-center" onSubmit={handleSignin} method="Post">
        <h1 className="mt-6 text-3xl text-gray-800">Employe Login </h1>
       
        <input className="mt-6 w-80  bg-white text-gray-800 border rounded-lg  focus:border-blue-500 p-3 placeholder-gray-500 focus:outline-none my-1"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
       
        <input className="mt-6 w-80 block  bg-white text-gray-800 border rounded-lg  focus:border-blue-500 p-3 placeholder-gray-500 focus:outline-none my-1"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <div className=" w-full flex flex-row-reverse ">
        <Link className=" text-sm text-blue-600 mt-3 " href={"/Forgetpassword"}>forget Password</Link>
        </div>
          

        <button className="px-5 py-3 bg-blue-700 text-white rounded-lg mt-6" type="submit">Signin</button>
        <div  className=" text-sm mt-3 ">
            Do not have an account? <Link className="text-blue-500" href={"/EmployeSignup"}>Sign up</Link>
          </div>
      </form>
      </div>
    </div>
  );
};

export default Employesignin;
