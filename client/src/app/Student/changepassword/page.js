"use client";
import React,{useState} from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { asynchangepassword } from "@/Store/Actions/StudentActions";
import { useDispatch } from "react-redux";

const changepassword = () => {
  const dispatch = useDispatch();
  const { student } = useSelector((state) => state.StudentSlice);
  console.log(student)
  const [password,setpassword] = useState('');
  const [Conpassword,setConpassword] = useState('')
  const [error , seterror] = useState("")

  const handlepassword = (e) => {
    e.preventDefault();
    
    if(password === Conpassword){
      seterror("")
        dispatch(asynchangepassword(password));
    } 
    if(password !== Conpassword){
      seterror("password not match")
  } 
    
  };

  return (
    <div className=" h-5/6  flex flex-col items-center justify-center">
      <h1 className=" text-2xl ">Change Your Password</h1>
       <form method="POSt" className="text-center" onSubmit={handlepassword}>
        <input className=" w-full bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-5 " type="password" name="password" 
          placeholder="Password"
          value={password}
          onChange={(e) => setpassword(e.target.value)} />
        <input className=" w-full bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-5" type="password" name="Conformpassword" 
          placeholder="Conform Password"
          value={Conpassword}
          onChange={(e) => setConpassword(e.target.value)} />
          {error &&( 
            <p>{error}</p>
          ) }
          <button className="px-5 py-3 bg-blue-600 text-white rounded-lg" type=" submit"> Change Password</button>
       </form>
       
    </div>
  );
};

export default changepassword;
