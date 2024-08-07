"use client";
import React,{useState} from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { asyncEmpchangepassword } from "@/Store/Actions/EmployeAction";
import { useDispatch } from "react-redux";
import { Poltawski_Nowy } from "next/font/google";

const changepassword = () => {
  const dispatch = useDispatch();
  const { student } = useSelector((state) => state.StudentSlice);
  console.log(student)
  const [password,setpassword] = useState();
  const [Conpassword,setConpassword] = useState()
  const [error , seterror] = useState("")

  const handlepassword = (e) => {
    e.preventDefault();
    if(password !== Conpassword){
      return seterror("password not match")
    } 
    console.log(password)
    dispatch(asyncEmpchangepassword(password));
    
  };

  return (
    <div className="h-5/6 flex flex-col items-center justify-center">
      <h1 className=" text-2xl ">Change Your Password</h1>
       <form method="POSt" className="text-center" onSubmit={handlepassword}>
        <input className=" w-full bg-white text-gray-800 border text-sm border-[rgb(104,127,233)] rounded-lg p-3 placeholder-gray-500 focus:outline-none my-5 " type="password" name="password" 
          placeholder="Password"
          value={password}
          onChange={(e) => setpassword(e.target.value)} />
        <input className=" w-full bg-white text-gray-800 border   text-sm border-[rgb(104,127,233)] rounded-lg p-3 placeholder-gray-500 focus:outline-none my-5" type="password" name="Conformpassword" 
          placeholder="Conform Password"
          value={Conpassword}
          onChange={(e) => setConpassword(e.target.value)} />

          {error &&( 
            <p>{error}</p>
          ) }
          
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Change Password</button>
       </form>
       
    </div>
  );
};

export default changepassword;
