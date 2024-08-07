"use client";
import EmployeInternpage from "@/app/components/EmployeInternpage";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Einternship = ({ params }) => {
  const dispatch = useDispatch();
  const { isAuthenticated, employe } = useSelector(
    (state) => state.EmployeSlice
  );
  const indexintern = employe.internships.filter((ele) => ele._id === params.id);
  console.log(indexintern)
  const inter = [...employe.internships];
  console.log(inter)
  return (
    <div>
      {indexintern && indexintern.map((e ) => (
        <EmployeInternpage key ={e.id} data={e}  />
      ))}
    </div>
  );
};

export default Einternship;
