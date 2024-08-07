"use client";
import Studentnav from "@/app/components/Studentnav";
import Link from "next/link";
import Providers from "@/Store/Provider";
import { useDispatch, useSelector } from "react-redux";
import { asyncCurrentUserwithall } from "@/Store/Actions/StudentActions";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function DashboardLayout({ children }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isAuthenticated, student } = useSelector(
    (state) => state.StudentSlice
  );

  useEffect(() => {
    dispatch(asyncCurrentUserwithall()).then(() => {
      if(!student) router.push('/Studentlogin')
    })
    .catch((error) => {
      console.error('Authentication error:', error);
      router.push('/Studentlogin');
    });
  }, []);
  // useEffect(() => {
  //   if(!isAuthenticated) dispatch(asyncCurrentUser())
  //   .then(() => {
  //   })
  //   .catch((error) => {
  //     console.error('Authentication error:', error);
  //     router.push('/Studentlogin');
  //   });
  // }, [isAuthenticated]);
  return (
    <section className=" h-screen">
      {/* Include shared UI here e.g. a header or sidebar */}
      <Studentnav />
        <Providers>
        {children}
        </Providers>
      
    </section>
  );
}
