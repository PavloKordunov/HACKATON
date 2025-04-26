"use client"

// import { useUserRegister } from "@/hooks/useRegister";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ShelterRegister() {
    // const {user, setUser} = useUserRegister()


  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fafafa] relative overflow-hidden px-10">
      
      <div className="absolute top-6 left-6 flex items-center gap-2">
        <svg className="w-8 h-8" fill="#000">
          <use href={`/sprite.svg?v=1#icon-logo`}></use>
        </svg>
        <p className="text-lg font-bold">Pet Shelter</p>
      </div>

      <div className=" hidden md:block ">
        <Image src="/shelterImg.png" alt="Dog" width={900} height={700} />
     </div>
     
     

    </div>
  );
}
