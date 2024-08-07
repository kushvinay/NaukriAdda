"use client"
import { useDispatch, useSelector } from "react-redux";


const Name = () => {
  const { isAuthenticated ,student } = useSelector((state) => state.StudentSlice);  
  return (
    <div>
      <h1 className=" font-sans text-4xl font-semibold text-gray-800 "> Hi !, { student &&student.firstname}</h1>
    </div>
  )
}

export default Name