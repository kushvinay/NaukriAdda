"use client";
import React, { useEffect, useState } from "react";
import { asyncCurrentEmploye, asynupdateemploye } from "@/Store/Actions/EmployeAction";
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
  const [organisationname, setorganisationname] = useState("");
  const [contact, setcontact] = useState("");

  const hendelupdate = (e) => {
    e.preventDefault();
    const employe = { };
    if (fullname.trim() !== '') {
        employe.fullName = fullname;
    }
    
    if (email.trim() !== '') {
        employe.email = email;
    }
    if (organisationname.trim() !== '') {
        employe.organisationname = organisationname;
    }
    if (contact.trim() !== '') {
        employe.contact = contact;
    }
    // console.log(employe);
    dispatch(asyncEmployeSignup(employe));
  };



  return (
    <div className="h-5/6  flex flex-col items-center justify-center">
      <div className="w-full h-5/6  flex items-center justify-center ">
        <form
          className="flex flex-col text-center"
          onSubmit={hendelupdate}
          method="Post"
        >
          <h1 className="text-3xl text-center font-medium  my-5">Update Information </h1>
          <input
            className=" w-80 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2 "
            type="text"
            placeholder="Full Name"
            value={fullname}
            onChange={(e) => setfullname(e.target.value)}
          />
          {/* <input
            className="w-80 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2"
            type="text"
            placeholder="LastName"
            value={lastname}
            onChange={(e) => setlastname(e.target.value)}
          /> */}
            <input  className="w-80 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none rounded-sm  "
              type="text"
              placeholder="Organisation Name"
              value={organisationname}
              onChange={(e) => setorganisationname(e.target.value)}
            />
          
          <input className="w-80 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input className="w-80 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2"
            type="number"
            placeholder="Contact"
            value={contact}
            onChange={(e) => setcontact(e.target.value)}
            required
          />
          
          <button
            className=" px-3 py-2 bg-gray-800 text-white mt-3"
            type="submit"
            onSubmit={hendelupdate}
          >
            Update
          </button>
          
        </form>
      </div>
    </div>
  );
};

export default Studentsignup;
