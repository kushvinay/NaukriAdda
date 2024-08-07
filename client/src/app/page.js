"use client"
import Image from 'next/image'
import Nav from '@/app/components/Nav'
import { useSelector } from 'react-redux'

export default function Home() {

  return (
    <div className='h-screen'>
      
      {/* <Mainnav/> */}
      <Nav></Nav>
      <div className='h-[90%]'>
        {/* <Image className='' src="/bg2.jpg" height={100} width={100} ></Image/> */}
        <h1 className=' text-5xl text-gray-800 font-medium text-center pt-12 leading-[70px]'> Looking for Opportunities<Image className=' inline-block pb-2' src={"/log.png"} height={100} width={100} /> <br />Build Your Future. Build Your Dream.
        </h1>
        <h3 className='text-xl text-gray-500 text-center mt-3'>
        Introducing our latest creation in the realm of job search services & <br></br> finding available job 
        vacancies a breeze for both job seekers and employers.</h3>
        {/* <Image className='m-auto pt-4' src={"/mainbg.png"} height={520} width={520} /> */}
        <Image className='m-auto mt-3 ' src={"/log.png"} height={420}  width={265} />


      </div>
      <h1>
      </h1>
      {/* <h1>{student}</h1> */}
    </div>
  )
}
