"use client";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "../../../axiosconfig";
import PostBiginterncard from "./PostBiginterncard";

const PostInternshipContant = ({ datas }) => {
  const [filterDropdown, setfilterDropdown] = useState(false);
  const [Internships, setInternships] = useState(datas);
  const [hasMore, setHasMore] = useState(true);

  const getMoreinternship = async () => {
    const { data } = await axios.post(
      `/employe/internship/read/all?lenth=${Internships.length}&limit=5`
    );
    let newInternships = await data.internships;
    setInternships((post) => [...post, ...newInternships]);
  };

  // async function getFilterInternships(){
  //   const { data } = await axios.post("/user/student/find-internship/pagination");

  // }

  return (
    <>

      <InfiniteScroll
        dataLength={Internships.length}
        next={getMoreinternship}
        hasMore={hasMore}
        loader={<h3 className="text-xl text-center py-5 "> Loading...</h3>}
        endMessage={<h4>Nothing more to show</h4>}
      >
        {Internships.map((internship) => (
          <PostBiginterncard key={internship._id} data={internship} />
        ))}
      </InfiniteScroll>
      {/* <style jsx>
        {`
          .back {
            padding: 10px;
            background-color: dodgerblue;
            color: white;
            margin: 10px;
          }
        `}
      </style> */}
    </>
  );
};

export default PostInternshipContant;
