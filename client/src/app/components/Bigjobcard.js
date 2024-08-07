import React from "react";
import Link from "next/link";
import Image from "next/image";
import moment from "moment/moment";
import { 
  MapPinIcon
 } from "@heroicons/react/24/outline";

const Bigjobcard = ({ key, data }) => {
  return (
    <Link href={`/Student/Jobs/${data?._id}`} className=" ">
      <div className=" w-[650px]  text-start px-8 py-5  rounded-xl border    border-gray-150 hover:border-gray-200  hover:shadow-[2px_2px_2px_2px_rgba(0,0,0,0.1)] my-2 shadow-[1px_1px_1px_1px_rgba(0,0,0,0.1)]  ">
        <div>
        { data &&
              data?.isActice ? 
              <button className=" border-[1px] border-red-400 p-1 rounded text-sm">Not Active</button>
              : <button className=" border-[1px] border-gray-300 p-1 rounded text-sm">Actively Hiring</button>
             }
        </div>
        
        <div className="flex justify-between border-b-[1px] pb-4 mt-4 mb-1">
          <div>
            <h4 className=" text-xl text-black">{data && data?.title}</h4>
            <p className="text-sm text-gray-600">{data?.employe && data?.employe?.organisationname}</p>
          </div>
          <Image src={data && data?.employe?.organisationlogo?.url}  height={50} width={50} />
        </div>
        {data && data?.location ? <h6 className="text-gray-600 mb-1 mt-3"><MapPinIcon className="h-4 inline-block" />{data?.location}</h6> 
        : <h6 className="text-gray-600 my-1"><MapPinIcon className="h-4 inline-block" /> Remote</h6> }
        
        <div className=" flex text-sm pb-3 pt-1 ">
          <div  className="me-5">
            <h6 className="text-gray-700 text-xs ">CTC (Anual)</h6>
            <h6 className="text-gray-600">{data && data?.salary}</h6>
          </div>
          {/* <div className="me-5">
            <h6 className="text-gray-700">DURATION</h6>
            <h6 className="text-gray-600 ">6 Mounth</h6>
          </div> */}
        </div>
        <div className="border-b-[1px] pb-2">
        <p className=" text-xs text-green-600 bg-green-100 inline-block p-[2px] rounded ">{moment(data?.createdAt)?.fromNow()} </p>
        </div>
        <div className="flex justify-end">
            <button className="text-sky-500 border-[1px] text-sm
            px-3 py-2 border-sky-500 mt-2 ">View Details</button>
        </div>
      </div>
    </Link>
  );
};

export default Bigjobcard;
