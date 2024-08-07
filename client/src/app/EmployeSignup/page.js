"use client";
import React, { useEffect, useState } from "react";
import { asyncCurrentEmploye, asyncEmployeSignup } from "@/Store/Actions/EmployeAction";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Nav from "@/app/components/Nav";
import Link from "next/link";

const Studentsignup = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isAuthenticated , employe } = useSelector((state) => state.EmployeSlice);
  console.log(employe)
  const [fullname, setfullname] = useState("");
  // const [lastname, setlastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [organisationname, setorganisationname] = useState("");
  const [contact, setcontact] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    const employe = {
      fullname,
      // lastname,
      organisationname,
      email,
      contact,
      password,
    };
    // console.log(employe);
    dispatch(asyncEmployeSignup(employe));
  };

  useEffect(() => {
    if (!isAuthenticated) dispatch(asyncCurrentEmploye());
    console.log(employe)
    if (isAuthenticated && employe) router.push("/Employe/EmployeHome");
  }, [isAuthenticated]);

  return (
    <div className="w-screen h-screen">
      <Nav />
      <div className="w-full h-5/6  flex items-center justify-center ">
        <form
          className="text-center"
          onSubmit={handleSignup}
          method="Post"
        >
          <h1 className="text-3xl block font-medium  my-10">Employe Register </h1>
          <input
            className="w-80 block  bg-white text-gray-800 bg-white text-gray-800 border rounded-lg  focus:border-blue-500 p-3 placeholder-gray-500 focus:outline-none my-4 "
            type="text"
            placeholder="Full Name"
            value={fullname}
            onChange={(e) => setfullname(e.target.value)}
            required
          />
          {/* <input
            className="w-80 block bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-4"
            type="text"
            placeholder="LastName"
            value={lastname}
            onChange={(e) => setlastname(e.target.value)}
            required
          /> */}
            <input  className="w-80 block  bg-white text-gray-800 bg-white text-gray-800 border rounded-lg  focus:border-blue-500 p-3 placeholder-gray-500 focus:outline-none my-4"
              type="text"
              placeholder="Organisation Name"
              value={organisationname}
              onChange={(e) => setorganisationname(e.target.value)}
              required
            />
          
          <input className="w-80 block  bg-white text-gray-800 bg-white text-gray-800 border rounded-lg  focus:border-blue-500 p-3 placeholder-gray-500 focus:outline-none my-4"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input className="w-80 block  bg-white text-gray-800 bg-white text-gray-800 border rounded-lg  focus:border-blue-500 p-3 placeholder-gray-500 focus:outline-none my-4"
            type="number"
            placeholder="Contact"
            value={contact}
            onChange={(e) => setcontact(e.target.value)}
            required
          />

          <input className="w-80 block  bg-white text-gray-800 bg-white text-gray-800 border rounded-lg  focus:border-blue-500 p-3 placeholder-gray-500 focus:outline-none my-4"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            required
          />
          
          {/* <button
            className=" px-5 py-3 bg-gray-800 text-white rounded-lg mt-5  "
            type="submit"
            onSubmit={handleSignup}
          >
            Signup
          </button> */}
           <button type="submit" 
             className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
             onSubmit={handleSignup}
             >

              Signup
              </button>
              
          <p className="mt-2 text-sm">Already have an account? <Link className="text-blue-600" href="/Employesignin">Sign in</Link></p>
          
        </form>
      </div>
    </div>
  );
};

export default Studentsignup;
