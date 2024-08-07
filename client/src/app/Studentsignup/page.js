"use client";
import React, { useEffect, useState } from "react";
import { asyncCurrentUserwithall, asyncsignup } from "@/Store/Actions/StudentActions";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Nav from "@/app/components/Nav";
import Link from "next/link";

export const metadata = {
  title: 'Student Signup',
  description: 'Signup',
}

const Studentsignup = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isAuthenticated ,student } = useSelector((state) => state.StudentSlice);
  console.log(student)
  const [fullname, setfullname] = useState("");
  // const [lastname, setlastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  // const [city, setcity] = useState("");
  const [contact, setcontact] = useState("");
  // const [gender, setgender] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    const Student = {
      fullname,
      // lastname,
      // gender,
      // city,
      email,
      contact,
      password,
    };
    console.log(Student);
    dispatch(asyncsignup(Student));
  };

  useEffect(() => {
    if (!isAuthenticated) dispatch(asyncCurrentUserwithall());
    if (isAuthenticated) router.push("/Student/StudentHome");
  }, [isAuthenticated]);

  return (
    <div className=" w-screen h-screen ">
      <Nav />
      <div className=" h-10/12 flex items-center justify-center py-5 ">
        <form
          className="text-center"
          onSubmit={handleSignup}
          method="Post"
        >
          <h1 className=" block text-3xl  bg-white  my-5"> Please Register Your Account </h1>
          <input
            className=" w-80  block  bg-white text-gray-800 border rounded-lg  focus:border-blue-500 focus:outline-none p-3 placeholder-gray-500  my-4 "
            type="Full Name"
            placeholder="Your Full Name"
            value={fullname}
            onChange={(e) => setfullname(e.target.value)}
          />
           {/* <input
            className="w-80 block  bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-4"
            type="lastname"
            placeholder="LastName"
            value={lastname}
            onChange={(e) => setlastname(e.target.value)}
          /> */}
           
            {/* <input  className="w-80 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none rounded-sm  "
              type="city"
              placeholder="city"
              value={city}
              onChange={(e) => setcity(e.target.value)}
            /> */}
          
          <input className="w-80 block  bg-white text-gray-800 bg-white text-gray-800 border rounded-lg  focus:border-blue-500 p-3 placeholder-gray-500 focus:outline-none my-4"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input className="w-80 block  bg-white text-gray-800 bg-white text-gray-800 border rounded-lg  focus:border-blue-500 p-3 placeholder-gray-500 focus:outline-none my-4"
            type="contact"
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
          />
          {/* <label className=" block bg-while text-gray-800  my-4  ">
               <span className="pe-1 block">Gender</span>
              <select className=" w-80 ps-1 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none rounded-sm"
                value={gender}
                onChange={(e) => setgender(e.target.value)}
                required
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label> */}
           
             <button type="submit" 
             className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
             onSubmit={handleSignup}
             >

              Register new account
              </button>
              
          {/* <button
            className="  px-10 py-4 bg-black text-white rounded-lg mt-6 "
            type="submit"
            onSubmit={handleSignup}
          >
            Signup
          </button> */}
          <p className="mt-1 text-sm">Already have an account? <Link className="text-blue-600" href="/Studentlogin">Sign in</Link></p>
        </form>
      </div>
    </div>
  );
};


export default Studentsignup;


// <form class="max-w-sm mx-auto">
//   <div class="mb-5">
//     <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
//     <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
//   </div>
//   <div class="mb-5">
//     <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
//     <input type="password" id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
//   </div>
//   <div class="mb-5">
//     <label for="repeat-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
//     <input type="password" id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
//   </div>
//   <div class="flex items-start mb-5">
//     <div class="flex items-center h-5">
//       <input id="terms" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
//     </div>
//     <label for="terms" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
//   </div>
//   <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
// </form>
