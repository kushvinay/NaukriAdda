"use client";
import React from "react";
import { useSelector } from "react-redux";
import EmployBiginternship from "@/app/components/EmployBiginternship";
import { 
  HandRaisedIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";

const Internships = () => {

  const { isAuthenticated, employe } = useSelector(
    (state) => state.EmployeSlice
  );


  // console.log(employe.internships)
  // console.log(employe.internships);
  // const fatchinternship = async () => {
  //   const res = await axios.post(`/employe/internship/all`);
  //   console.log(`fatch data ${res.data.internships}`);
  //   console.log(`fatch se ${res.data}`);
  //   await setintern(res.data.internships);
  //   let news = await res.data.internships.josn();
  //   console.log(`news ${news}`)
  //   setInternships((post) => [...post, ...news]);
  //   console.log(`title ${title}`)
  //   console.log(`first ${intern}`)
  // };

  // useEffect( () => {
  //   console.log(`intern from ${intern}`)
  // }, []);

  // useEffect(() => {
  //   // Fetch data from the API endpoint
  //   axios.get('/employe/internship/all')
  //     .then((response) => {
  //       setintern(response.data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);

  // const getMoreinternship = async () => {
  //   const { data } = await axios.post(
  //     `/employe/internship/all?lenth=${Internships.length}&limit=5`
  //   );
  //   let newInternships = await data.internships;
  //   setallinternships((post) => [...post, ...newInternships]);
  // };
  // console.log(intern)
  return (
    <div className="">
      <h1 className="text-3xl font-semiboldS text-center my-10 text-gray-800 ">
        INTERNSHIPS POST
      </h1>
      {employe && employe.internships.length == 0 && 
      <div className=" flex flex-col">
        <HandRaisedIcon className="h-10 inline-block text-gray-800 mb-2" />
        <h2 className="text-2xl text-gray-800 text-center">Hi, You have not post any Internship Yet !</h2>
        <h3 className="text-xl text-gray-600 text-center mt-3 mb-5 ">Post the Internship and find the best Candidate </h3>
        <Link href={'/Employe/CreateInternship'}  className=" m-auto py-2 px-4 bg-blue-500 text-white rounded-md">Intership Post </Link>
      </div>
      }
      <div className="w-full flex flex-col items-center justify-center">
        {employe && employe.internships.map((intern) => (
          <EmployBiginternship data={intern} />
        ))}
      </div>
    </div>
  );
};

export default Internships;
