"use client"
import { useDispatch, useSelector } from "react-redux";
import React from 'react'

const conpo = () => {

    const dispatch = useDispatch();
    const { isAuthenticated ,student } = useSelector((state) => state.StudentSlice);
    console.log(student)
  return (
    <div></div>
  )
}

export default conpo