import React from 'react'
import Link from 'next/link'

const internshipcard = ({internship}) => {
    console.log(internship)
  return (
    <Link
    href="/"
    className=' max-w-[200px] border border-gray-50 hover:border-gray-200  hover:shadow-lg '
    >
        <div>
            <h1>Hello!
            </h1>
        <h4 className=' text-lg text-black'>{internship.profile}</h4>
        <p>{}</p>

        </div>
        

    </Link>
  )
}

export default internshipcard