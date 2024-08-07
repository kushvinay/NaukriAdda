"use client";
import React, { useEffect, useState } from "react";
import { asynupdatestudent } from "@/Store/Actions/StudentActions";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";


const updatestudent = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isAuthenticated, student } = useSelector((state) => state.StudentSlice);
  const [fullname, setfullname] = useState("");
  // const [lastname, setlastname] = useState("");
  const [email, setEmail] = useState("");
  const [city, setcity] = useState("");
  const [contact, setcontact] = useState("");
  const [gender, setgender] = useState("");

  const handleupdate = (e) => {
    e.preventDefault();
    const updateStudentInfo = {};

    if (fullname.trim() !== '') {
      updateStudentInfo.fullName = fullname;
    }
    // if (lastname.trim() !== '') {
    //   updateStudentInfo.lastName = lastname;
    // }
    if (gender.trim() !== '' && gender.trim() !== "Select gender" ) {
      updateStudentInfo.gender = gender;
    }
    if (city.trim() !== '') {
      updateStudentInfo.city = city;
    }
    if (email.trim() !== '') {
      updateStudentInfo.email = email;
    }
    if (contact.trim() !== '') {
      updateStudentInfo.contact = contact;
    }

    dispatch(asynupdatestudent(updateStudentInfo)).then(() => {
      router.push("/Student/StudentHome")
    })

  };

  useEffect(() => {
    if (!isAuthenticated) router.push("/Studentlogin");
  }, [isAuthenticated]);

  return (

    <div className=" h-5/6 flex items-center justify-center" >

      <div className="   flex flex-col items-center justify-center ">
          <h1 className="text-3xl  my-7"> Update Student </h1>
        <form
          className="flex flex-col text-center"
          onSubmit={handleupdate}
          method="Post"
        >
          <input
            className=" w-80 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2 "
            type="fullname"
            placeholder={student && student.fullname}
            value={fullname}
            onChange={(e) => setfullname(e.target.value)}
          />
          {/* <input
            className="w-80 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2"
            type="lastname"
            placeholder={student && student.lastname}
            value={lastname}
            onChange={(e) => setlastname(e.target.value)}
          /> */}
          
            
            <input  className=" w-80 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none rounded-sm  "
              type="city"
              placeholder={student && student.city}
              value={city}
              onChange={(e) => setcity(e.target.value)}
            />
          
          <input className="w-80 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2"
            type="email"
            placeholder={student && student.email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input className="w-80 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2"
            type="contact"
            placeholder={student && student.contact}
            value={contact}
            onChange={(e) => setcontact(e.target.value)}
          />
          <label className="bg-while text-gray-800  my-2 ">
               <span className=" pe-3 ps-1 border  border-[rgb(39,39,39)] py-3 focus:outline-non text-sm" >Gender:</span>
              <select className=" w-60 bg-white text-gray-800 border text-sm border-[rgb(39,39,39)] p-3 placeholder-gray-500 focus:outline-none rounded-sm my-1"
                value={gender}
                onChange={(e) => setgender(e.target.value)}
              >
                <option className=" text-gray-500" value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>

         
          <button className=" my-6 px-5 py-3 bg-blue-600 text-white rounded-lg" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default updatestudent;
