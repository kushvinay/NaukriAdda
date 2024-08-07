import React from "react";
import Image from "next/image";
import Link from "next/link";

const ResumeCard = ({  data ,key}) => {
  return (
    <Link key={key} href={`ShowResumes/${data._id}`}>
    <div   className="w-[180px] bg-gray-700 text-center py-5  text-white mx-4 my-5 rounded-lg ">
      <Image className="m-auto py-2 "
        src={data.avatar.url}
        width={50}
        height={50}
        alt="Student pic"
      />
      <h3>{data.firstname} {data.lastname} </h3>
      <h4>{data.contact}</h4>
      <h4>{data.email}</h4>
    </div>
    </Link>
  );
};

export default ResumeCard;
