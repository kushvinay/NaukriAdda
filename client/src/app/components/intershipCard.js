import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  HomeIcon,
  MapPinIcon,
  CalendarDaysIcon,
  CurrencyRupeeIcon,
} from "@heroicons/react/24/outline";

const Internshipcard = ({ key, data }) => {
  return (
    <Link href={`/Student/Internships/${data._id}`} className=" ">
      <div className=" w-[270px] text-start p-4  pb-7 rounded-2xl bg-white  border-gray-50 hover:border-gray-200  hover:shadow-md my-2">
        <div className="flex justify-between items-center border-b-[1px]">
          <div>
            <div>
              {data && data.isActice ? (
                <button className=" border-[1px] border-red-400 p-1 rounded text-xs">
                  Not Active
                </button>
              ) : (
                <button className=" border-[1px] border-gray-300 p-1 rounded text-xs">
                  Actively Hiring
                </button>
              )}
            </div>

            <div className="flex justify-between  my-4">
              <div>
                <h4 className=" text-sm text-black">{data && data.profile}</h4>
                <p className="text-sm text-gray-600 mt-1">
                  {data.employe.organisationname && data.employe?.organisationname}
                </p>
              </div>
            </div>
          </div>
            <Image
              src={data.employe.organisationlogo && data.employe.organisationlogo.url}
              height={50}
              width={50}
            />
        </div>
        <div className=" text-xs mt-4">
          <h6 className="text-gray-600 my-1">
            <MapPinIcon className=" h-3 inline-block me-1 " />
            {data && data.location ? data.location : data.internshiptype}
          </h6>
          <h6 className="text-gray-600 my-1">
            <CurrencyRupeeIcon className="h-3 inline-block me-1 " />
            {data && data.Stipend.amount} Rs
          </h6>
          <h6 className="text-gray-600 my-1">
            <CalendarDaysIcon className="h-3 inline-block me-1 " />
            {data && data.duration}
          </h6>
        </div>
      </div>
    </Link>
  );
};

export default Internshipcard;
