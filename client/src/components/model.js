"use client"
import React from 'react'
const Models  = ({ isVisible, onClose}) => {
  if(!isVisible) return null;
  const hendleeducation = (e) =>{
    if(e?.target?.id === 'wraper') onClose(); 
  }

  return (
    <div className='  absolute inset-0 bg-black bg-opacity-50 flex justify-center ' id="wraper" onClick={hendleeducation} >
        
        <div className=' h-[22%] bg-white p-6 pt-8 mt-16 relative'>
          <button className=' absolute top-2 right-3' onClick={() => onClose()} >X</button>
            <button className='hover:text-sky-400 m-2 block text-xl'> <span className=' text-2xl me-1' >+</span>Add primary education</button>
            <button className='hover:text-sky-400 m-2 block text-xl'><span className=' text-2xl me-1' >+</span> Add secandry education</button>
            <button className='hover:text-sky-400 m-2 block text-xl'><span className=' text-2xl me-1' >+</span> Add graduation/post graduation</button>
        </div>
    </div>
  )
}

export default Models