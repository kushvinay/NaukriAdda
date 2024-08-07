"use client";
import React, { useEffect, useState } from "react";
import {
  asyncCurrentEmploye,
  asyncEmployeCreateInternship,
} from "@/Store/Actions/EmployeAction";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

const CreateInternship = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isAuthenticated, employe } = useSelector(
    (state) => state.EmployeSlice
  );
  console.log(employe);
  const [profile, setprofile] = useState("");
  const [skills, setskills] = useState("");
  const [internshiptype, setinternshiptype] = useState("");
  const [opening, setopening] = useState("");
  const [from, setfrom] = useState("");
  const [to, setto] = useState("");
  const [responsibility, setresponsibility] = useState("");
  const [amount, setamount] = useState("");
  const [perks, setperks] = useState("");
  const [assesments, setassesments] = useState("");
  const [status, setstatus] = useState();
  const [duration, setduration] = useState('');
  const [location, setlocation] = useState("");


  const hendelinternship = (e) => {
    e.preventDefault();
    const internship = {
      profile,
      skills,
      internshiptype,
      opening,
      responsibility,
      duration,
      Stipend: {
        status,
        amount,
      },
      assesments,
  
    };
    if(location != ""){
      internship.location = location;
    }
    console.log(internship);
    dispatch(asyncEmployeCreateInternship(internship)).then(() => {
      router.push("/Employe/internships")
    })
  };

  return (
    <div className="  ">
      <div className="  flex flex-col items-center justify-center ">
        <h1 className="  text-3xl font-medium  my-5"> Internship POST</h1>
        <form
          className="flex flex-col text-center"
          onSubmit={hendelinternship}
          method="Post"
        >
            <input
              className="  bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2 mx-5"
              type="text"
              placeholder="Profile"
              value={profile}
              onChange={(e) => setprofile(e.target.value)}
              required
            />
            <input
              className=" bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2 mx-5"
              type="text"
              placeholder="assesments"
              value={assesments}
              onChange={(e) => setassesments(e.target.value)}
              required
            />
          <div className="grid grid-cols-2">
          <input
              className=" w-80 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2 mx-5"
              type="text"
              placeholder="duration"
              value={duration}
              onChange={(e) => setduration(e.target.value)}
              required
            />
            <label className="bg-while text-gray-800 mx-4 my-2 px-2 ">
              Internship Type:
              <select
                className=" w-45 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none rounded-sm ms-3"
                value={internshiptype}
                onChange={(e) => setinternshiptype(e.target.value)}
                required
              >
                <option value="">Select internshiptype</option>
                <option value="In office">In office</option>
                <option value="Remote">Remote</option>
              </select>
            </label>
            <input
              className="w-80 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2 mx-5"
              type="numder"
              placeholder="Stipend"
              value={amount}
              onChange={(e) => setamount(e.target.value)}
              required
            />
            <label className="bg-while text-gray-800 mx-4 my-2 px-2 ">
            Stipend Status
              <select
                className=" w-45 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none rounded-sm ms-3"
                value={status}
                onChange={(e) => setstatus(e.target.value)}
                required
              >
                <option value="">Select internshiptype</option>
                <option value="Fixed">Fixed</option>
                <option value="Negotiable">Negotiable</option>
                <option value="Performance based">Performance based</option>
                <option value="Unpaid">Unpaid</option>
              </select>
            </label>
        
          </div>
          
          <div>
          
            <label >
              Start from :
              <input
                className=" w-45 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2 mx-5"
                type="date"
                name="from"
                value={from}
                onChange={(e) => setfrom(e.target.value)}
                required
              />
            </label>
            <label>
              To:
              <input
                className="w-45 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2 mx-5"
                type="date"
                name="to"
                value={to}
                onChange={(e) => setto(e.target.value)}
                required
              />
            </label>
            <label className="">
                Openings:
            <input
              className=" w-28 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2 ms-3"
              type="number"
              value={opening}
              placeholder="job opeing"
              onChange={(e) => setopening(e.target.value)}
              required
            />
            </label>
          </div>
          {internshiptype == "In office" && (
            <input
            className=" bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2 mx-5"
            type="text"
            placeholder="Location"
            onChange={(e) => setlocation(e.target.value)}
          />
          )}  
          <input
            className=" bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2 mx-5"
            type="text"
            placeholder="Write required Skills "
            value={skills}
            onChange={(e) => setskills(e.target.value)}
            required
          />
          <input
              className=" bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2 mx-5"
              type="text"
              placeholder="perks"
              value={perks}
              onChange={(e) => setperks(e.target.value)}
              required
            />
          <textarea
            className=" bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2 mx-5"
            placeholder="Write full Job responsibility"
            name="responsibility"
            value={responsibility}
            cols="60"
            rows="4"
            onChange={(e) => setresponsibility(e.target.value)}
            required
          ></textarea>

          <button className=" m-auto h-14 w-40 rounded-md text-2xl px-3 py-2 bg-blue-600 text-white mt-3 " type="submit">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateInternship;
