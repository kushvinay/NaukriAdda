"use client"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { asynaddcoursesRes } from "@/Store/Actions/StudentActions";

const Addtraning = ({ isVisible, onClose }) => {
  const dispatch = useDispatch();

  if (!isVisible) return null;
  const [traning, settraning] = useState("");
  const [organization, setorganization] = useState("");
  const [location, setlocation] = useState("");
  const [startdate, setstartdate] = useState("");
  const [enddate, setenddate] = useState("");
  const [description, setdescription] = useState("");
  

  const henderclose = (e) => {
    if (e.target.id === "wrapper") onClose();

  };
  const hendelSubmit = (e) => {
    e.preventDefault();
    const info = {
        traning,
        organization,
        location,
        startdate,
        enddate,
        description,
      };
      dispatch(asynaddcoursesRes(info));
    onClose();
  };


  return (
    <div
      className="absolute inset-0 bg-black bg-opacity-50 h-[180%]"
      id="wrapper" onClick={henderclose}
    >
      <div className=" bg-white relative w-[40%]  m-auto mt-2">
          <button className=" text-2xl absolute top-1 right-2" onClick={() => onClose()}>X</button>
        <form className="flex flex-col items-center justify-center" action="" method="Post" onSubmit={hendelSubmit}>
          <h1 className=" text-2xl text-gray-800 text-center py-10">Training/Courses Details</h1>
          <label  className="flex flex-col">
          Training Program
            <input className="w-80 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2" type="text" name="traning" id="" value={traning} placeholder="Ex: Web developer"
              onChange={(e) => settraning(e?.target?.value)} />
          </label>
          <div className=" w-80 flex justify-between">

          <label  className="flex flex-col">
          Start Date
            <input className=" w-36 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2" type="date" name="startdate" id="" value={startdate}
              onChange={(e) => setstartdate(e?.target?.value)} />
          </label>
          <label  className="flex flex-col">
          End Date
            <input className="w-36 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2" type="date" name="enddate" id="" value={enddate}
              onChange={(e) => setenddate(e?.target?.value)} />
          </label>
              </div>
          <label  className="flex flex-col">
            Organisation
            <input className="w-80 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2 " type="text" name="organizationf" id="" value={organization} placeholder="Ex: Wipro"
              onChange={(e) => setorganization(e?.target?.value)}/>
          </label>
          <label className="flex flex-col">
          Location
            <input className="w-80 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2 " type="text" name="performance" id="" value={location} placeholder="Ex: Banglore/Work form home"
              onChange={(e) => setlocation(e?.target?.value)}/>
          </label>
          <textarea
            className=" bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2 mx-5"
            placeholder="Short description of work done (max 250 word)"
            name="description"
            value={description}
            id=""
            cols="60"
            rows="6"
            onChange={(e) => setdescription(e.target.value)}
          ></textarea>
          <button className="py-3 px-5 m-8 bg-blue-500 text-white">Save</button>
        </form>
      </div>
    </div>
  );
};

export default Addtraning;
