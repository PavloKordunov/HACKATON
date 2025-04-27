'use client';

import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const InvestorPage = () => {

    const param = useParams()
    const userId = param?.id

    const [user, setUser] = useState<any>(null)

    useEffect(() => {
        const getVolunteerById = async() => {
            try {
                const res = await fetch(`http://localhost:8080/api/investor/id/${userId}`)

                const data = await res.json()
                setUser(data.body)
                console.log('user: ', data.body)
            } catch (error) {
                console.log(error)
            }
        }

        getVolunteerById()
    }, [])

    return (
            <div className="min-h-screen  bg-gray-100 text-[#000] flex flex-col items-center justify-center gap-6">
              <div className="pl-40 flex gap-20 max-w-1400 w-full">
                <div className='w-[380px]'>
                    <div className="flex mb-12">
                    <Image
                        src="/investor.png"
                        alt="Oleg Petrosian"
                        width={380}
                        height={380}
                        className="rounded-xl object-cover"
                    />
                    </div>
                </div>
        
                <div className='w-[890px]'>
                    <div className="bg-white p-6 rounded-xl mb-12 shadow-md">
                        <div className="flex items-center justify-between gap-16 mb-6">
                            <h1 className="text-[48px] font-bold">{user?.name}</h1>
                            <button className="bg-[#1565C0] px-15 rounded-[13px] py-2 text-white text-[22px] font-bold">My coins</button>
                        </div>
                        <p className="text-gray-700 text-[24px]">Location: Berlin, Germany</p>
                        <p className="text-gray-700 text-[24px]">Email: {user?.email}</p>
                        <p className="text-gray-700 text-[24px]">Registration date: 26.04.2025</p>
                        <p className="text-gray-700 text-[24px]">Кількість земельних ділянок: 40</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <h2 className="text-xl text-[36px] font-bold mb-4">About me</h2>
                        <p className="text-gray-700 text-[24px]">
                            "I am a second-generation farmer, I have been engaged in agriculture for over 15 years. My team cultivates 120 hectares of fertile black soil. We strive to develop environmentally friendly production and attract investments to introduce the latest technologies in growing crops."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvestorPage;