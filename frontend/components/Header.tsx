"use client"

// import { useUser } from "@/hooks/useUser";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import Image from "next/image";

const NavBar = () => {

    const [active, setActive] = useState("home");
    // const {user, setUser} = useUser()

    const logOut = async() => {
        await signOut({ redirect: false })
    }

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
                <p
                    onClick={() => setActive("stories")}
                    className={`text-[20px] cursor-pointer relative transition duration-200 ${
                    active === "stories" ? "text-[#F87537] font-bold" : "text-black font-medium"
                    }`}
                >
                    Pet stories
                    {active === "stories" && (
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#F87537]"></span>
                    )}
                </p>
        
            </div>

            <div className="flex gap-4 шеуьі-сутеук">
                <Link onClick={logOut} href={`/profile/investor/123`}>
                    <FaUserCircle size={46} color="#2F2929"  />  
                </Link>
                <Link href="/" >
                    <div>
                        <FiLogOut size={40} color="black" />
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default NavBar