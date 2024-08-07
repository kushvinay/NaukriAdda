"use client";
import { useEffect, useState } from "react";
import axios from "../../../../../axiosconfig";
import moment from "moment";
import { asynapply } from "@/Store/Actions/StudentActions";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { MapPinIcon } from "@heroicons/react/24/outline";


const page = ({ params }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  // let [internship, setinternship] = useState("");
  
  let { isAuthenticated , student , internships} = useSelector((state) => state.StudentSlice);
  
  const internship = internships.find((e) => ( params.id == e._id));
  console.log(internship.usersapplied)
  // let che = internship.usersapplied.include(student._id);
  console.log(student._id)
  console.log(internship.usersapplied);
  let che = internship.usersapplied.includes(student._id)
  console.log(che)
  let [apply,setapply] = useState(che);

  const handleApply= (e) => {
    dispatch(asynapply(internship._id));
    setapply(true)
  };

  // const fatchinternship = async() => {
  //   const { data } = await axios.post(`/user/student/internship/${params.id}`);
  //   console.log(data.internship);
  //   setinternship(data.internship);
  // }


  useEffect(() => {
    if(!isAuthenticated) router.push("/StudentHome")   
  }, []);


  return (
    <>
      <h1 className="text-4xl text-gray-800 text-center py-6 font-semibold  ">
        {internship && internship.profile}
      </h1>
      <div className="w-[850px] m-auto my-10">
      { internship &&
              internship.isActice ? 
              <button className=" border-[1px] border-red-400 p-1 rounded text-sm">Not Active</button>
              : <button className=" border-[1px] border-gray-300 p-1 rounded text-sm">Actively Hiring</button>
             }
        <div className="flex justify-between border-b-[1px] pb-4 mt-5 mb-1">
          <div>
            <h4 className=" text-xl text-black py-2">{internship && internship.profile}</h4>
            <p className="text-sm text-gray-600">{internship && internship.employe?.organisationname}</p>
          </div>
          <img className="h-[60px]"
              src={internship.employe.organisationlogo.url}
          />
        </div>
        <h6 className="text-gray-600 my-2"><MapPinIcon className=" h-4 pb-1 inline-block me-1 " />{internship && internship.location ? internship.location : internship.internshiptype}</h6>
        <div className=" flex text-sm pb-3 ">
          <div className="me-7">
            <h6 className="text-gray-700">Stipend</h6>
            <h6 className="text-gray-600">{internship && internship.Stipend.amount} rs</h6>
          </div>
          <div className="me-7">
            <h6 className="text-gray-700">Duration</h6>
            <h6 className="text-gray-600 ">{internship?.duration}</h6>
          </div>
        </div>
        <div className="border-b-[1px] pb-2">
          <p className=" text-xs text-green-600 bg-green-100 inline-block p-[2px] rounded ">
            {moment(internship.createdAt).fromNow()}{" "}
          </p>
        </div>
        <div className="flex justify-end">
          {/* <button
            className="text-sky-500 border-[1px] text-sm
            px-3 py-2 border-sky-500 mt-2 "
          >
            View details
          </button> */}
        </div>
        <div className="my-3">
          <h2 className="text-xl text-gray-700 font-medium py-1 ">
            Skills Required
          </h2>
          <h6 className="text-gray-600 pt-2">{internship && internship.skills}</h6>
        </div>
        {internship && internship.responsibility && (
          <div className="my-3">
            <h2 className="text-xl text-gray-700 font-medium py-1 ">
              Responsibility
            </h2>
            <h6 className="text-gray-600 pt-2">
              {internship?.responsibility}
            </h6>
          </div>
        )}
        {internship && internship.assesments && (
          <div className="my-3">
            <h2 className="text-xl text-gray-700 font-medium py-1 ">Assessments</h2>
            <h6 className="text-gray-600 pt-2">
              {internship?.assesments}
            </h6>
          </div>
        )}
        {internship.opening && (
          <div className="my-3">
            <h2 className="text-xl text-gray-700 font-medium py-1 ">Number of Opening</h2>
            <h6 className="text-gray-600 pt-2">
              {internship?.opening}
            </h6>
          </div>
        )}
        <div className="w-full flex items-center justify-center">
        { apply?<button className=" px-4 py-2 bg-green-400 text-white">Applied</button>:<button className="  px-4 py-2 bg-sky-400 text-white "onClick={handleApply}>Apply Now</button> }
        </div>
        
      </div>
    </>
  );
};

export default page;
