import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  HomeIcon,
  MapPinIcon,
  CalendarDaysIcon,
  CurrencyRupeeIcon,
} from "@heroicons/react/24/outline";

const Card = ({ key, data }) => {
  console.log(`from card ${data}`);
  return (
    <Link href={`/Student/Jobs/${data?._id}`} className=" ">
      <div className=" w-[270px] text-start p-4  pb-7 rounded-2xl bg-white  border-gray-50 hover:border-gray-200  hover:shadow-md my-2">
        <div className="flex justify-between items-center border-b-[1px]">
          <div>
            <div>
              {data && data?.isActice ? (
                <button className=" border-[1px] border-red-400 p-1 rounded text-xs">
                  Not Active
                </button>
              ) : (
                <button className=" border-[1px] border-gray-300 p-1 rounded text-xs">
                  Actively Hiring
                </button>
              )}
            </div>

            <div className="flex justify-between my-4">
              <div>
                <h4 className=" text-sm text-black">{data && data?.title}</h4>
                <p className="text-sm text-gray-600 mt-1">
                  {data?.employe?.organisationname && data?.employe?.organisationname}
                </p>
              </div>
            </div>
          </div>
          <Image
            src={data?.employe?.organisationlogo && data?.employe?.organisationlogo?.url}
            height={50}
            width={50}
          />
        </div>
        <div className=" text-xs pt-4">
          <h6 className="text-gray-600 my-1">
            <MapPinIcon className=" h-3 inline-block me-1 " /> {data  && data?.location ? data?.location : data?.internshiptype}
          </h6>
          <h6 className="text-gray-600 my-1">
            <CurrencyRupeeIcon className="h-3 inline-block me-1 " /> { data && data?.salary} -LPA
          </h6>
          <h6 className="text-gray-600 my-1">
            <CalendarDaysIcon className="h-3 inline-block me-1 " />6 Month
          </h6>
        </div>
      </div>
    </Link>
  );
};

export default Card;
