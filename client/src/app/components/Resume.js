"use client";
import React, { useState } from "react";
import Image from "next/image";


const Resume = ({ key, data }) => {
  console.log(`data from resume ${data}`)
  return (
    <div key={key} className=" max-w-[900px] m-auto scroll-non">
      <h1 className="text-3xl text-center py-5  font-medium text-gray-700 mb-11">
        Resume
      </h1>
      <div className="w-full h-52 border-[1px] border-inherit px-16 py-7 flex justify-between">
        <div>
          <h3 className="text-2xl font-semibold pb-1 ">
            {data.firstname} {data.lastname}
          </h3>
          <h4 className="text-gray-500 text-sm pb-1">{data.email} </h4>
          <h4 className="text-gray-500 text-sm pb-1">+91-{data.contact} </h4>
          <p className="text-gray-500 text-sm pb-1">{data.city} </p>
        </div>
        <div>
          <Image src={data.avatar.url} height={100} width={100} />
        </div>
      </div>

      <div className="w-full flex border-[1px] border-inherit px-16 py-7">
        <h4 className="w-[30%] text-gray-500 text-sm">EDUCATION</h4>
        <div className="py-1">
          {data.resume.education.senSecandroy && (
            <div className="pb-2">
              <h3 className=" text-sm  ">{data.resume.education.senSecandroy.Degree}</h3>
              <h4 className=" text-gray-500 text-sm ">{data.resume.education.senSecandroy.college}</h4>
              <h4 className=" text-gray-500 text-sm ">
                {data.resume.education.senSecandroy.stardingyear} -{" "}
                {data.resume.education.senSecandroy.edingyear}
              </h4>
              <h4 className=" text-gray-500 text-sm ">Percentage: {data.resume.education.senSecandroy.percentage}</h4>
            </div>
          )}
          {data.resume.education.secandroy && (
            <div className="pb-2">
              <h3 className="text-sm">Senior Secondary (XII) {data.resume.education.secandroy.stream}</h3>
              <h4 className=" text-gray-500  text-sm ">{data.resume.education.secandroy.school}</h4>
              <h4 className=" text-gray-500  text-sm ">{data.resume.education.secandroy.board} </h4>
              <h4 className=" text-gray-500  text-sm ">Year of Completion {data.resume.education.secandroy.year} </h4>
              <h4 className=" text-gray-500  text-sm ">Percentage: {data.resume.education.secandroy.percentage}</h4>
            </div>
          )}
          {data.resume.education.secandroy && (
            <div className="pb-2">
              <h3 className="text-sm">Secondary (X) </h3>
              <h4 className=" text-gray-500  text-sm ">{data.resume.education.secandroy.school}</h4>
              <h4 className=" text-gray-500 text-sm  ">{data.resume.education.secandroy.board} </h4>
              <h4 className=" text-gray-500  text-sm ">Year of Completion {data.resume.education.secandroy.year} </h4>
              <h4 className=" text-gray-500  text-sm ">Percentage: {data.resume.education.secandroy.percentage}</h4>
            </div>
          )}
        </div>
      </div>
      {data.resume.jobs.length != 0 &&
      <div className="w-full flex border-[1px] border-inherit px-16 py-7">
        <h4 className="w-[25%] text-gray-500 text-sm">JOBS</h4>
        <div className=" ">
          {
            data.resume.jobs.map((job) => (
              <div>
                <h3>{job.organization} as {job.profile}</h3>
                <h4>{job.location} </h4>
                <h4>{job.stard} - {job.end}</h4>
                <p>{job.description} </p>
              </div>
            ))}
        </div>
      </div>
}
      {data.resume.internships.length != 0 && 
      <div className="w-full flex border-[1px] border-inherit px-16 py-7">
        <h4 className="w-[25%] text-gray-500 text-sm">INTERNSHIPS</h4>
        { data.resume.internships.map((internship) => (
              <div>
                <h3>{internship.organization} as {internship.profile}</h3>
                <h4>{internship.location} </h4>
                <h4>{internship.stard} - {internship.end}</h4>
                <p>{internship.description} </p>
              </div>
            ))}
      </div>
      }
      {data.resume.responsibilities.length != 0 && 
      <div className="w-full flex border-[1px] border-inherit px-16 py-7">
        <h4 className="w-[25%] text-gray-500 text-sm">
          POSITION OF <br /> RESPONSIBILITY
        </h4>
        <div className="  text-sky-500">
        { data.resume.responsibilities.map((responsibilitie) => (
              <div>
                <p>{responsibilitie.description}</p>
              </div>
            ))}
        </div>
      </div>
      }
      {data.resume.projects.length != 0 && 
      <div className="w-full flex border-[1px] border-inherit px-16 py-7">
        <h4 className="w-[25%] text-gray-500 text-sm">
          ACADEMICS/ PERSONAL PROJECTS
        </h4>
        <div className="  text-sky-500">
        { data.resume.projects.map((project) => (
              <div>
                <h3>{project.title} as {project.profile}</h3>
                <p>{project.description}</p>
                <a href={project.url}>{project.url}</a>
              </div>
            ))}
        </div>
      </div>
      }
      {data.resume.skills != 0 && 
      <div className="w-full flex border-[1px] border-inherit px-16 py-7">
        <h4 className="w-[25%] text-gray-500 text-sm">SKILLS</h4>
        <ul className="  ">
          {data.resume.skills.map((skill) => (
            <li>{skill}</li>
          ))}
        </ul>
      </div>
      }
      {data.resume.accomplishments != 0 && 
      <div className="w-full flex border-[1px] border-inherit px-16 py-7">
        <h4 className="w-[25%] text-gray-500 text-sm">
          ACCOMPLISHMENTS/ <br /> additions details
        </h4>
        {data.resume.accomplishments.map((accomplishment) =>(
            <ul>
                <li>{accomplishment}</li>
            </ul>
        ))}
        <div className="  text-sky-500">
          <button>+ Add Accomplishments/ additions details</button>
        </div>
      </div>
      }
    </div>
  );
};

export default Resume;
