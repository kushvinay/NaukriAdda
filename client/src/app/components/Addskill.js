"use client"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { asynaddskillsRes } from "@/Store/Actions/StudentActions";

const Addskill = ({ isVisible, onClose }) => {
    const dispatch = useDispatch();
  if (!isVisible) return null;
  const [skill, setskill] = useState("");
  const [level , setlevel ] = useState("");

  const henderclose = (e) => {
    if (e.target.id === "wrapper") onClose();

  };
  const hendelSubmit = (e) => {
    e.preventDefault();
    const skills = {
      skill,
      level

    };
    dispatch(asynaddskillsRes(skills));
    onClose();
  };

  return (
    <div
      className="absolute inset-0 bg-black bg-opacity-50 h-[180%]"
      id="wrapper" onClick={henderclose}
    >
      <div className=" bg-white relative w-[40%]  m-auto mt-16">
          <button className=" text-2xl absolute top-1 right-2" onClick={() => onClose()}>X</button>

        <form className="flex flex-col items-center justify-center" action="" method="Post" onSubmit={hendelSubmit}>

          <h1 className=" text-2xl text-gray-800 text-center py-10">Skills</h1>
          <label  className="flex flex-col"> Skills
            <input className="w-80 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2" type="text" name="skill" id="" value={skill} placeholder="Ex: Amazon"
              onChange={(e) => setskill(e.target.value)} required />
          </label>
        
          {skill != "" && (
          <label className="bg-while text-gray-800 flex flex-col mt-3 ">
          How would you rate yourself on this skill?
              <select
                className=" w-80 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none rounded-sm mt-2"
                value={level}
                onChange={(e) => setlevel(e?.target?.value)}
                required
              >
                <option value="">Select Level</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </label>
            )}
          

          
          <button className="py-3 px-5 m-8 bg-blue-500 text-white">Save</button>
        </form>
      </div>
    </div>
  );
};

export default Addskill;
