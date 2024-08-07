"use client"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { asynAddEducation } from "@/Store/Actions/StudentActions";

const AddSecEdu = ({ isVisible, onClose }) => {
    const dispatch = useDispatch();
  if (!isVisible) return null;
  const [endyear, setendyear] = useState("");
  const [board, setboard] = useState("");
  const [performance, setperformance] = useState("");
  const [school, setschool] = useState("");
  const henderclose = (e) => {
    if (e.target.id === "wrapper") onClose();

  };
  const hendelSubmit = (e) => {
    e.preventDefault();
    const education = {
      endyear,
      board,
      performance,
      school,
      type:"Higher"
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
      <div className=" bg-white relative w-[40%]  m-auto mt-16">
          <button className=" text-2xl absolute top-1 right-2" onClick={() => onClose()}>X</button>
        <form className="flex flex-col items-center justify-center" action="" method="Post" onSubmit={hendelSubmit}>
          <h1 className=" text-2xl text-gray-800 text-center py-10">High School (X) Education</h1>
          <label  className="flex flex-col">
         Passing Year
            <input className="w-80 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2" type="text" name="endyear" id="" value={endyear} placeholder="Ex: 2016"
              onChange={(e) => setendyear(e?.target?.value)} />
          </label>
          <label  className="flex flex-col">
            Board
            <input className="w-80 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2 " type="text" name="board" id="" value={board} placeholder="Ex: MP Board"
              onChange={(e) => setboard(e?.target?.value)}/>
          </label>
          <label className="flex flex-col">
            <div>
            Performance <span className="text-sm text-gray-600">(in Percentage%)</span>
            </div>
            <input className="w-80 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2 " type="text" name="performance" id="" value={performance} placeholder="Ex: 75%"
              onChange={(e) => setperformance(e?.target?.value)}/>
          </label>
          <label className="flex flex-col">
            School
            <input className="w-80 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2" type="text" name="school" id="" value={school} placeholder="Ex: XYZ School"
              onChange={(e) => setschool(e?.target?.value)}/>
          </label>
          <button className="py-3 px-5 m-8 bg-blue-500 text-white">Save</button>
        </form>
      </div>
    </div>
  );
};

export default AddSecEdu;
