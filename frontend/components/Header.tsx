"use client"

// import { useUser } from "@/hooks/useUser";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import Image from "next/image";
import { useUser } from "@/hooks/useUser";

const NavBar = () => {

    const [active, setActive] = useState("home");

    const logOut = async() => {
        await signOut({ redirect: false })
    }

    const {user} = useUser()

    return (
        <div className="w-full bg-[#fff] px-10 py-6 shadow-md flex items-center justify-between">
            <div className="flex items-center gap-2">
                <div className="w-14 h-14 relative">
                    <Image src='/logo.png' alt="" fill className="object-contein" />    
                </div>
            </div>
            <div className="flex gap-12">
                <Link
                    href='/home'
                    onClick={() => setActive("home")}
                    className={`text-[20px] cursor-pointer relative transition duration-200 ${
                    active === "home" ? "text-[#F87537] font-bold" : "text-black font-medium"
                    }`}
                >
                    Home
                    {active === "home" && (
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#F87537]"></span>
                    )}
                </Link>
                <Link 
                    href='/map'
                    onClick={() => setActive("map")}
                    className={`text-[20px] cursor-pointer relative transition duration-200 ${
                    active === "map" ? "text-[#F87537] font-bold" : "text-black font-medium"
                    }`}
                >
                    Map
                    {active === "map" && (
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#F87537]"></span>
                    )}
                </Link>
        
            </div>

            <div className="flex gap-4 items-center">
                <Link onClick={logOut} href={`/profile/investor/${user?.id}`} className="flex items-center gap-2">
                    <FaUserCircle size={46} color="#2F2929"  />  
                </Link>
                <div className="flex gap-1 items-center">
                    <p className="text-[20px] text-[#000] font-medium">48</p>
                    <div className="w-8 h-8 relative">
                        <Image src='/coin.png' alt="" fill className="object-contein" />    
                    </div>
                </div>
                <Link href="/" >
                    <div onClick={logOut}>
                        <FiLogOut size={40} color="black" />
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default NavBar