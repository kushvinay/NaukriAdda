"use client"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { asynaddprojectsRes} from "@/Store/Actions/StudentActions";

const Addprojects = ({ isVisible, onClose }) => {
    const dispatch = useDispatch();
  if (!isVisible) return null;
  const [title, settitle] = useState("");
  const [description , setdescription ] = useState("");
  const [url, seturl] = useState("");

  const henderclose = (e) => {
    if (e.target.id === "wrapper") onClose();

  };
  const hendelSubmit = (e) => {
    e.preventDefault();
    const project = {
      title,
      description,
      url
    };
    dispatch(asynaddprojectsRes(project));
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

          <h1 className=" text-2xl text-gray-800 text-center py-10">Projects</h1>
          <label  className="flex flex-col"> Project title
            <input className="w-80 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2" type="text" name="title" id="" value={title} placeholder="Ex: Amazon"
              onChange={(e) => settitle(e?.target?.value)} required />
          </label>

          <label className="flex flex-col">
          Project link 
            <input className="w-80 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2" type="url" name="url" value={url} placeholder="Ex: www.amazon.com"
              onChange={(e) => seturl(e?.target?.value)}/>
          </label>

          <label className="flex flex-col text-xl" >
            Description
          </label>
          
          <textarea
            className=" bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2 mx-5 rounded-xl"
            placeholder="Short description of project and its workings (max 250 word)"
            name="description"
            value={description}
            id=""
            cols="60"
            rows="8"
            onChange={(e) => setdescription(e?.target?.value)}
          ></textarea>

          
          <button className="py-3 px-5 m-8 bg-blue-500 text-white">Save</button>
        </form>
      </div>
    </div>
  );
};

export default Addprojects;
