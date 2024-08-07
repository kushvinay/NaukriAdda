"use client";
import React, { useEffect, useState } from "react";
import {
  asyncCurrentEmploye,
  asyncEditInternship,
} from "@/Store/Actions/EmployeAction";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

const Editinternship = ({params}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isAuthenticated, employe } = useSelector(
    (state) => state.EmployeSlice
  );
  const internshiparry = employe.internships.filter((ele) => ele._id === params.id);
  const existinternship = internshiparry[0];
  const [profile, setprofile] = useState(existinternship.profile);
  const [skills, setskills] = useState(existinternship.skills);
  const [internshiptype, setinternshiptype] = useState(existinternship.internshiparry);
  const [opening, setopening] = useState(existinternship.opening);
  const [from, setfrom] = useState(existinternship.form);
  const [to, setto] = useState(existinternship.to);
  const [responsibility, setresponsibility] = useState(existinternship.responsibility);
  const [amount, setamount] = useState(existinternship.Stipend.amount);
  const [perks, setperks] = useState(existinternship.perks);
  const [assesments, setassesments] = useState("");
  const [status, setstatus] = useState(existinternship.Stipend.amount);
  const [duration, setduration] = useState(existinternship.duration);
  const [location, setlocation] = useState(existinternship.locatione);


  const hendelinternshipedit = (e) => {
    e.preventDefault();
    const internship = {
      profile,
      skills,
      internshiptype,
      opening,
      responsibility,
      duration,
      assesments,
      Stipend: {
        status,
        amount,
      },
      from,
      to,
      perks,
      location
    };
    console.log(internship);
    dispatch(asyncEditInternship(existinternship._id,internship));
  };

  //   useEffect(() => {
  //     router.push("/Employe/EmployeHome");
  //   }, [);

  return (
    <div className=" pt-4 pb-7 ">
      <div className="  flex flex-col items-center justify-center ">
        <h1 className="  text-3xl font-medium  my-7 text-gray-700"> Edit Internship</h1>
        <form
          className="flex flex-col text-center"
          onSubmit={hendelinternshipedit}
          method="Post"
        >
            <input
              className="  bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2 mx-5"
              type="text"
              placeholder="Profile"
              value={profile}
              onChange={(e) => setprofile(e.target.value)}
            />
            <input
              className=" bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2 mx-5"
              type="text"
              placeholder="assesments"
              value={assesments}
              onChange={(e) => setassesments(e.target.value)}
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
              >
                <option value="">Select internshiptype</option>
                <option value="In office">In office</option>
                <option value="Remote">Remote</option>
              </select>
            </label>
            <input
              className="w-80 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2 mx-5"
              type="numder"
              // placeholder={existinternship.Stipend.amount}
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
            />
            </label>
          </div>
          {internshiptype == "In office" && (
            <input
            className=" bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2 mx-5"
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setlocation(e.target.value)}
          />
          )}  
          <input
            className=" bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2 mx-5"
            type="text"
            placeholder="Write required Skills "
            value={skills}
            onChange={(e) => setskills(e.target.value)}
          />
          <input
              className=" bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2 mx-5"
              type="text"
              placeholder="perks"
              value={perks}
              onChange={(e) => setperks(e.target.value)}
            />
          <textarea
            className=" bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2 mx-5"
            placeholder={existinternship.responsibility}
            name="responsibility"
            value={responsibility}
            cols="60"
            rows="4"
            onChange={(e) => setresponsibility(e.target.value)}
          ></textarea>

          <button className=" m-auto  rounded-md text-2xl px-5 py-2 bg-gray-800 text-white mt-5 " type="submit">
            Edite
          </button>
        </form>
      </div>
    </div>
  );
};

export default Editinternship;
