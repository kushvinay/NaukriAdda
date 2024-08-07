"use client";
import Studentnav from "@/app/components/Studentnav";
import Link from "next/link";
export default function DashboardLayout({ children }) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <Studentnav />
      <div className="flex">
        <div className=" h-screen bg-black w-72 ">
          <ul className="py-5 text-center gap-3">
            <li>
              <Link href="/" className=" text-white m-5 text-xl">
                Applied Internships
              </Link>
            </li>
            <li>
              <Link href="/" className=" text-white m-5 my-3 text-xl">
                Applied Jobs
              </Link>
            </li>
            <li>
              <Link href="/" className=" text-white m-5 my-3 text-xl">
                Update Profile
              </Link>
            </li>
            <li>
              <Link href="/StudentProfile/changepassword" className=" text-white m-5 my-3 text-xl">
                Change Password
              </Link>
            </li>
            <li>
              <Link href="/" className=" text-white m-5 my-3 text-xl">
                Resume
              </Link>
            </li>
          </ul>
        </div>
        {children}
      </div>
    </section>
  );
}
