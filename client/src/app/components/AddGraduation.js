"use client"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { asynAddEducation } from "@/Store/Actions/StudentActions";

const AddGraduation = ({ isVisible, onClose }) => {
    const dispatch = useDispatch();
  if (!isVisible) return null;
  const [college, setcollege] =  useState("")
  const [endyear, setendyear] = useState("");
  const [startyear, setstartyear] = useState("");
  const [degree, setdegree] = useState("");
  const [performance, setperformance] = useState("");
  const [Stream, setStream] = useState("");

  const henderclose = (e) => {
    if (e?.target?.id === "wrapper") onClose();

  };
  const hendelSubmit = (e) => {
    e?.preventDefault();
    const education = {
        college,
      endyear,
      startyear,
      degree,
      performance,
      Stream,
      type:"Graduation"
    };
    dispatch(asynAddEducation(education));
    onClose();
  };
//   useEffect(() => {
//     // Add the 'modal-open' class to the body element when the component mounts
//     document.body.classList.add('modal-open');

//     // Remove the 'modal-open' class from the body element when the component unmounts
//     return () => {
//       document.body.classList.remove('modal-open');
//     };
//   }, []);

  return (
    <div
      className="absolute inset-0 bg-black bg-opacity-50 "
      id="wrapper" onClick={henderclose}
    >
      <div className=" bg-white relative w-[40%]  m-auto mt-2">
          <button className=" text-2xl absolute top-1 right-2" onClick={() => onClose()}>X</button>
        <form className="flex flex-col items-center justify-center" action="" method="Post" onSubmit={hendelSubmit}>
          <h1 className=" text-2xl text-gray-800 text-center py-10">Graduation/Post Graduation</h1>
          <label  className="flex flex-col">
          College
            <input className="w-80 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2" type="text" name="college" id="" value={college} placeholder="Ex: XYZ College"
              onChange={(e) => setcollege(e?.target?.value)} />
          </label>
          <label  className="flex flex-col">
          Starting Year
            <input className="w-80 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2" type="date" name="startyear" id="" value={startyear}
              onChange={(e) => setstartyear(e?.target?.value)} />
          </label>
          <label  className="flex flex-col">
          End Year
            <input className="w-80 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2" type="date" name="endyear" id="" value={endyear}
              onChange={(e) => setendyear(e?.target?.value)} />
          </label>
          <label  className="flex flex-col">
            Degree
            <input className="w-80 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2 " type="text" name="degreef" id="" value={degree} placeholder="Ex: B Tach"
              onChange={(e) => setdegree(e.target?.value)}/>
          </label>
          <label className="flex flex-col">
          Stream
            <input className="w-80 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2 " type="text" name="performance" id="" value={Stream} placeholder="Ex: Computer Science"
              onChange={(e) => setStream(e?.target?.value)}/>
          </label>
          <label className="flex flex-col">
            Performance
            <input className="w-80 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2 " type="text" name="performance" id="" value={performance} placeholder="Persentage Ex: 75%"
              onChange={(e) => setperformance(e?.target?.value)}/>
          </label>
          <button className="py-3 px-5 m-8 bg-blue-500 text-white">Save</button>
        </form>
      </div>
    </div>
  );
};

export default AddGraduation;
