'use client'
import NavBar from "@/components/Header";
// import { useUser } from "@/hooks/useUser";
// import { useSession } from "next-auth/react";
import { ReactNode, useEffect } from "react";

export default function homeLayout({ children }: { children: ReactNode }) {
    // const { data: session } = useSession();
    // const {user, setUser} = useUser()

    // useEffect(() => {
    //     if (session?.user) {
    //     const getUser = async() => {
    //         try {
    //             const res = await fetch('http://localhost:8080/api/login/oauth', {
    //                 method: 'POST',
    //                 headers: { 'Content-Type': 'application/json' },
    //                 body: JSON.stringify({ email: session?.user?.email }),
    //                 });
            
    //                 const data = await res.json();

    //                 setUser(data.body.user)
    //                 console.log(data)
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     getUser()
    //     }
    // }, [session]);
    
    return (
        <div className="w-full">
            <div className="relative">
                <div className="fixed inset-x-0 z-1000">
                    <NavBar />
                </div>
            </div>
            <div>{children}</div>
        </div>
    );
}
