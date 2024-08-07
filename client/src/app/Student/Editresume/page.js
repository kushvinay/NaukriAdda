"use client";
import React, { useState } from "react";
import Model from "@/components/model";
import AddSecEdu from "@/app/components/AddSecEdu";
import AddSenSecEdu from "@/app/components/AddSenSecEdu";
import AddGraduation from "@/app/components/AddGraduation";
import Addjobs from "@/app/components/Addjobs";
import Addinternship from "@/app/components/Addinternship";
import Addposition from "@/app/components/Addposition";
import Addtraning from "@/app/components/Addtraning";
import Addprojects from "@/app/components/Addprojects";
import Addskill from "@/app/components/Addskill";
import Addaditional from "@/app/components/Addaditional";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { TrashIcon } from "@heroicons/react/24/outline";
import { asynDeletEducationRes, asynDeletInternshipRes, asynDeletaccomplishmentsRes, asynDeletcoursesRes, asynDeletjobRes, asynDeletprojectsRes, asynDeletresponsibilitiesRes, asynDeletskillsRes } from "@/Store/Actions/StudentActions";

const EditResume = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, student } = useSelector(
    (state) => state.StudentSlice
  );
  let [showeducation, setshoweducation] = useState(false);
  let [addsecondaryedu, setaddsecondaryedu] = useState(false);
  let [addsensecondaryedu, setaddsensecondaryedu] = useState(false);
  let [addgraduationedu, setaddgraduationedu] = useState(false);
  let [addjob, setaddjob] = useState(false);
  let [addintern, setaddintern] = useState(false);
  let [addpositions, setaddpositions] = useState(false);
  let [addtraningres, setaddtraningres] = useState(false);
  let [addproject, setaddproject] = useState(false);
  let [addskill, setaddskill] = useState(false);
  let [addaditional, setaddaditional] = useState(false);

  // const graduationedu = student.resume.education.filter((edu) => edu.type === "Graduation")

  let isgradutionEmpty = Object.keys(student.resume.education).length === 0;
  console.log(`education${student.resume.education.length}`);

  let graedu = null;
  let senedu = null;
  let higedu = null;
  if (student.resume.education.length != 0) {
    graedu = student.resume.education.find((edu) => edu.type == "Graduation");
    senedu = student.resume.education.find((edu) => edu.type == "Seneducation");
    higedu = student.resume.education.find((edu) => edu.type == "Higher");
  }
  console.log(graedu);


  const Deletjob = (id) => {
    dispatch(asynDeletjobRes(id))
  }
  const DeletInternship = (id) => {
    dispatch(asynDeletInternshipRes(id))
  }
  const Deletedu = (id) => {
    dispatch(asynDeletEducationRes(id))
  }
  const Deletresponsibilities = (id) => {
    dispatch(asynDeletresponsibilitiesRes(id))
  }
  const Deletprojects = (id) => {
    dispatch(asynDeletprojectsRes(id))
  }
  const Deletskill = (id) => {
    dispatch(asynDeletskillsRes(id))
  }
  const Deletcourses = (id) => {
    dispatch(asynDeletcoursesRes(id))
  }
  const Deletaccomplishments = (id) => {
    dispatch(asynDeletaccomplishmentsRes(id))
  }
  
  return (
    <div className=" max-w-[900px] m-auto scroll-non">
      <h1 className="text-3xl text-center py-5  font-medium text-gray-700 mb-11">
        Resume
      </h1>
      <div className="w-full h-52 border-[1px] border-inherit px-16 py-7 flex justify-between">
        <div>
          <h3 className="text-2xl font-semibold pb-1 ">
            {student.firstname} {student.lastname}
          </h3>
          <h4 className="text-gray-500 text-sm pb-1">{student.email} </h4>
          <h4 className="text-gray-500 text-sm pb-1">+91-{student.contact} </h4>
          <p className="text-gray-500 text-sm pb-1">{student.city} </p>
        </div>
        <div>
          <Image src={student.avatar.url} height={100} width={100} />
        </div>
      </div>

      <div className="w-full flex border-[1px] border-inherit px-16 py-7">
        <h4 className="w-[25%] text-gray-500 text-sm">EDUCATION</h4>

        <div className=" ">
          {graedu != null && (
            <div className="py-1 flex justify-between">
              <div>
                <h4 className="text-sm pb-1">
                  {graedu.degree}
                  {" in "}
                  {graedu.Stream}
                </h4>
                <h5 className="text-sm text-gray-500">{graedu.college}</h5>
                <h5 className="text-sm text-gray-500">
                  {graedu.startyear} {" - "} {graedu.startyear}
                </h5>
                <h5 className=" text-sm text-gray-500">
                  Persentage: {graedu.performance}
                </h5>
              </div>
              <div>
                <TrashIcon onClick={() => Deletedu(graedu.id)}    className="h-5 inline-block ms-8 mt-1"/>
              </div>
            </div>
          )}
          {graedu == null && (
            <button
              className=" block  py-1 text-sky-500"
              onClick={() => setaddgraduationedu(true)}
            >
              + Add graduation/post graduation
            </button>
          )}
          {senedu != null && (
            <div className="py-1  flex justify-between">
              <div>
                <h4 className="text-sm">
                  Senior Secondary (XII),{" "}
                  {senedu.Stream}
                </h4>
                <h5 className="text-sm text-gray-500">{senedu.school}</h5>
                <h5 className="text-sm text-gray-500">Board: {senedu.board}</h5>
                <h5 className="text-sm text-gray-500">
                  Year of completion:{" "}
                  {senedu.endyear}
                </h5>
                <h5 className="text-sm text-gray-500">
                  Persentage: {senedu.performance}
                </h5>
              </div>
              <div>
                <TrashIcon onClick={() => Deletedu(senedu.id)}    className="h-5 inline-block ms-8 mt-1"/>
              </div>
            </div>
          )}
          {senedu == null && (
            <button
              className=" block py-1 
              text-sky-500"
              onClick={() => setaddsensecondaryedu(true)}
            >
              {" "}
              + Add Senior Secondary Education
            </button>
          )}
          {/* {student.resume.education.secandroy !== null &&
          typeof student.resume.education.secandroy ? (
            
          ) : (
            
          )} */}
          {higedu != null && (
            <div className="py-1 flex justify-between">
              <div>
                <h4 className="text-sm">Secondary (X)</h4>
                <h5 className="text-sm text-gray-500">{higedu.school}</h5>
                <h5 className="text-sm text-gray-500">Board: {higedu.board}</h5>
                <h5 className="text-sm text-gray-500">
                  Year of completion: {higedu.endyear}
                </h5>
                <h5 className="text-sm text-gray-500">
                  Persentage: {higedu.performance}
                </h5>
              </div>
              <div>
              <TrashIcon onClick={() => Deletedu(higedu.id)}    className="h-5 inline-block ms-8 mt-1"/>
              </div>
            </div>
          )}
          {higedu == null && (
            <button
              className=" block  py-1 text-sky-500"
              onClick={() => setaddsecondaryedu(true)}
            >
              {" "}
              + Add Secondary Education
            </button>
          )}
          {/* {student.resume.education.higher !== null &&
          typeof student.resume.education.higher ? (
            
          ) : (
            <div>
              <div>
                <h4>
                Secondary (X)
                </h4>
                <h5>{student.resume.education.higher.school}</h5>
                <h5>{student.resume.education.higher.board}</h5>
                <h5>
                  Year of completion:{" "}
                  {student.resume.education.higher.endyear}
                </h5>
                <h5>
                  Persentage: {student.resume.education.higher.performance}
                </h5>
              </div>
              <div></div>
            </div>
          )} */}

          {/* <button
              className=" block  py-1"
              onClick={() => setaddsecondaryedu(true)}
            >
              {" "}
              + Add Secondary Education
            </button>

          <button
            className=" block   py-1"
            onClick={() => setaddsensecondaryedu(true)}
          >
            {" "}
            + Add Senior Secondary Education
          </button> */}
        </div>
      </div>
      <div className="w-full flex border-[1px] border-inherit px-16 py-7">
        <h4 className="w-[25%] text-gray-500 text-sm">JOBS</h4>
        <div className="  ">
          {student.resume.jobs.length != 0 && (
            <div>
              {student.resume.jobs.map((job) => (
                <div className="flex py-1 justify-between ">
                  <div>
                    <h4 className="text-sm ">{job.profile}</h4>
                    <h4 className="text-sm text-gray-500">Company: {job.organization}</h4>
                    <h4 className="text-sm text-gray-500">Location: {job.location}</h4>
                    <h4 className="text-sm text-gray-500">
                      {job.startdate}
                      {" - "}
                      {job.enddate}{" "}
                    </h4>
                    <p className="text-sm text-gray-500">{job.description}</p>
                  </div>
                  <div>
                    <button >
                  <TrashIcon onClick={() => Deletjob(job.id)}    className="h-5 inline-block ms-8 mt-1"/>

                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
          <button
            className=" block  py-1 text-sky-500"
            onClick={() => setaddjob(true)}
          >
            + Add jobs
          </button>
        </div>
      </div>
      <div className="w-full flex border-[1px] border-inherit px-16 py-7">
        <h4 className="w-[25%] text-gray-500 text-sm">INTERNSHIPS</h4>
        <div className="  ">
          {student.resume.internships.length != 0 &&
            <div>
              {student.resume.internships.map((internship) => (
                <div className="flex py-1 border-b-[1px] mb-2 justify-between">
                  <div>
                    <h4 className="text-sm ">{internship.profile}</h4>
                    <h4 className="text-sm text-gray-500">Company:{"  "} {internship.organization}</h4>
                    <h4 className="text-sm text-gray-500">Location:{"  "} {internship.location}</h4>
                    <h4 className="text-sm text-gray-500">Duration: {"  "}
                      {internship.startdate}
                      {" - "}
                      {internship.enddate}{" "}
                    </h4>
                    <p className="text-sm text-gray-500">Description: {internship.description}</p> 
                  </div>
                  <div>
                  <TrashIcon  onClick={() => DeletInternship(internship.id)} className="h-5 inline-block ms-8 mt-1"/>
                  </div>
                </div>
              ))}
            </div>
          }
          <button className="text-sky-500" onClick={() => setaddintern(true)}>
              + Add Internships
            </button>
        </div>
      </div>
      <div className="w-full flex border-[1px] border-inherit px-16 py-7">
        <h4 className="w-[25%] text-gray-500 text-sm">
          POSITION OF <br /> RESPONSIBILITY
        </h4>
        <div className=" ">
          {student.resume.responsibilities.length != 0 &&
            <div>
              {student.resume.responsibilities.map((responsibilitie) => (
                <div className="flex justify-between">
                  <ul>
                    <li className="text-sm text-gray-500">{responsibilitie.description}</li>
                  </ul>
                  <div>
                  <TrashIcon onClick={() => Deletresponsibilities(responsibilitie.id)}  className="h-5 inline-block ms-8 mt-1"/>
                  </div>
                </div>
              ))}
            </div>
          }
          <button className="text-sky-500" onClick={() => setaddpositions(true)}>
              + Add position of responsibility
          </button>
        </div>
      </div>
      <div className="w-full flex border-[1px] border-inherit px-16 py-7">
        <h4 className="w-[25%] text-gray-500 text-sm">TRAINING/COURSES</h4>
        <div className=" ">
          {student.resume.courses.length != 0 &&
            <div>
              {student.resume.courses.map((course) => (
                <div className="flex py-1 justify-between">
                  <div>
                    <h4 className="text-sm ">{course.traning}</h4>
                    <h4 className="text-sm text-gray-500">{course.organization}</h4>
                    <h4 className="text-sm text-gray-500">{course.location}</h4>
                    <h4 className="text-sm text-gray-500">
                      {course.startdate}
                      {" - "}
                      {course.enddate}{" "}
                    </h4>
                    <p className="text-sm text-gray-500">{course.description}</p>
                  </div>
                  <div>
                  <TrashIcon  onClick={() => Deletcourses(course.id)}  className="h-5 inline-block ms-8 mt-1"/>
                  </div>
                </div>
              ))}
            </div>
          }
          <button className="text-sky-500" onClick={() => setaddtraningres(true)}>
              + Add Training/Courses
            </button>
        </div>
      </div>
      <div className="w-full flex border-[1px] border-inherit px-16 py-7">
        <h4 className="w-[25%] text-gray-500 text-sm">
          ACADEMICS/ PERSONAL PROJECTS
        </h4>
        <div className=" ">
          {student.resume.projects.length != 0 &&
            <div>
              {student.resume.projects.map((project) => (
                <div className="flex justify-between py-1">
                  <div>
                    <h4 className="text-sm">{project.title}</h4>
                    <a target="_blank" className="text-sm text-blue-700 " href={project.url}>Project link</a>
                    <p className="text-sm text-gray-500">{project.description}</p>
                  </div>
                  <div>
                    <TrashIcon onClick={() => Deletprojects(project.id)}  className="h-5 inline-block ms-8 mt-1"/>
                  </div>
                </div>
              ))}
            </div>
          }
          <button className="text-sky-500" onClick={() => setaddproject(true)}>
              + Add Academics/ Personal Projects
            </button>
        </div>
      </div>
      <div className="w-full flex border-[1px] border-inherit px-16 py-7">
        <h4 className="w-[25%] text-gray-500 text-sm">SKILLS</h4>
        <div className="">
          {student.resume.skills.length != 0 &&
            <div className="">
              {student.resume.skills.map((skill) => (
                <div className="flex justify-between">
                  <div>
                    <h6 className="text-sm " >{skill.skill}</h6>
                    <p className="text-sm text-gray-500" >{skill.level}</p>
                  </div>
                  <div>
                  <TrashIcon onClick={() => Deletskill(skill.id)} className="h-5 inline-block ms-8 mt-1"/>
                  </div>
                </div>
              ))}
            </div>
          }
          <button className="text-sky-500" onClick={() => setaddskill(true)}>+ Add Skills</button>

        </div>
      </div>
      <div className="w-full flex border-[1px] border-inherit px-16 py-7">
        <h4 className="w-[25%] text-gray-500 text-sm">
          ACCOMPLISHMENTS/ <br /> additions details
        </h4>
        <div className=" ">
          {student.resume.accomplishments.length != 0 &&
            <div>
              {student.resume.accomplishments.map((accomplishment) => (
                <div className="flex py-1 justify-between">
                  <div>
                    <li>
                      <p className="text-sm text-gray-500">{accomplishment.description}</p>
                    </li>
                  </div>
                  <div>
                  <TrashIcon onClick={() => Deletaccomplishments(accomplishment.id)}  className="h-5 inline-block ms-8 mt-1"/>
                  </div>
                </div>
              ))}
            </div>
          }
          <button className="text-sky-500" onClick={() => setaddaditional(true)}>
              + Add Accomplishments/ additions details
            </button>
        </div>
      </div>
      <Model
        isVisible={showeducation}
        onClose={() => {
          setshoweducation(false);
        }}
      />
      <AddSecEdu
        isVisible={addsecondaryedu}
        onClose={() => {
          setaddsecondaryedu(false);
        }}
      />
      <AddSenSecEdu
        isVisible={addsensecondaryedu}
        onClose={() => {
          setaddsensecondaryedu(false);
        }}
      />
      <AddGraduation
        isVisible={addgraduationedu}
        onClose={() => {
          setaddgraduationedu(false);
        }}
      />
      <Addjobs
        isVisible={addjob}
        onClose={() => {
          setaddjob(false);
        }}
      />
      <Addinternship
        isVisible={addintern}
        onClose={() => {
          setaddintern(false);
        }}
      />
      <Addposition
        isVisible={addpositions}
        onClose={() => {
          setaddpositions(false);
        }}
      />
      <Addtraning
        isVisible={addtraningres}
        onClose={() => {
          setaddtraningres(false);
        }}
      />
      <Addprojects
        isVisible={addproject}
        onClose={() => {
          setaddproject(false);
        }}
      />
      <Addskill
        isVisible={addskill}
        onClose={() => {
          setaddskill(false);
        }}
      />
      <Addaditional
        isVisible={addaditional}
        onClose={() => {
          setaddaditional(false);
        }}
      />
    </div>
  );
};

export default EditResume;
