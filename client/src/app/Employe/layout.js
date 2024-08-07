"use client";
import Employenav from "@/app/components/Employenav";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Providers from "@/Store/Provider";
import { asyncCurrentEmploye } from "@/Store/Actions/EmployeAction";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export default function DashboardLayout({ children }) {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(asyncCurrentEmploye()).then(() => {
    })
    .catch((error) => {
      console.error('Authentication error:', error);
      router.push('Employesignin');
    });
  }, []);

  return (
    <section className="h-screen">
      {/* Include shared UI here e.g. a header or sidebar */}
      <Employenav />
        <Providers>
        {children}
        </Providers>
      
    </section>
  );
}
