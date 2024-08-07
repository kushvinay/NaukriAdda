"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import moment from "moment/moment";
import { useSelector } from "react-redux";

const EmployBigjob = ({ key, data }) => {
  const {employe } = useSelector(
    (state) => state.EmployeSlice
  );
  return (
    <Link key={key} href={`/Employe/jobs/${data._id}`}>
      <div className=" w-[650px] text-start px-8 py-5  rounded-xl border    border-gray-150 hover:border-gray-200  hover:shadow-[2px_2px_2px_2px_rgba(0,0,0,0.1)] my-3 shadow-[1px_1px_1px_1px_rgba(0,0,0,0.1)]  ">
        <div className="flex justify-between items-center">
          <div>

        {data && data.active ?  <button className=" border-[1px] border-red-300 p-1 rounded text-sm">
          Not Active
        </button>
        :<button className=" border-[1px] border-gray-300 p-1 rounded text-sm">
        Activly hiring
      </button> }
        <div className="flex justify-between border-b-[1px] pb-4 mt-4 mb-1">
          <div>
            <h4 className=" text-xl text-black">{data.title}</h4>
            <p className="text-sm text-gray-600">Wipro</p>
          </div>
          </div>
        </div>
          <Image src={employe && employe.organisationlogo.url} height={60} width={60} alt="logo" />
        </div>
        <h6 className="text-gray-600 my-1">{data.location}</h6>
        <div className=" flex text-sm pb-3 ">
          
          <div className="me-5">
            <h6 className="text-gray-700">SALARY</h6>
            <h6 className="text-gray-600">{data.salary.toLocaleString("en-IN")} <span className=" text-xs">-LPA</span> </h6>
          </div>
        </div>
        <div className="border-b-[1px] pb-2">
          <p className=" text-xs text-green-600 bg-green-100 inline-block p-[2px] rounded ">
            {moment(data.createdAt).fromNow()}{" "}
          </p>
        </div>
        <div className="flex py-1 ">
          <button
            className="text-sky-500 border-[1px] text-sm
            px-3 py-2 border-sky-500 mt-2 mr-3 "
          >
            Deactivate
          </button>
          
          <button
            className="text-sky-500 border-[1px] text-sm
            px-3 py-2 border-sky-500 mt-2 mr-3 "
          >
            Edit
          </button>
        </div>
      </div>
    </Link>
  );
};

export default EmployBigjob;
