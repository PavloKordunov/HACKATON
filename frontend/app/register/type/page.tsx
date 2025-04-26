"use client"

// import { useUserRegister } from "@/hooks/useRegister";
import Image from "next/image";;
import Link from "next/link";
import { useState } from "react";

export default function TypePage() {

    // const {user, setUser} = useUserRegister()
    const [userType, setUserType] = useState('')
    const [shelterData, setShelterData] = useState({
        name: '',
        location: '',
        city: '',
        shelterType: '',
        telephoneNumber: ''
      })
      
      const createShelter = async() => {
        try {
          const res = await fetch('http://localhost:8080/api/shelter/new', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              // email: user?.email,
              // password: user?.password,
              name: shelterData.name,
              city: shelterData.city,
              location: shelterData.location,
              shelterType: shelterData.shelterType === "Dog" ? 0 : 0,
              telephoneNumber: volunteerData.telephoneNumber
            })
          })
    
          const data = await res.json()
          console.log(data)
          console.log(volunteerData)
        } catch (error) {
          console.log(error)
        }
      }

    // const handleChange = () => {
    //     setUser({
    //         ...user,
    //         userType: userType,
    //     })
    // }

    const [volunteerData, setVolunteerData] = useState({
        name: '',
        superscription: '',
        telephoneNumber: ''
      })
      
      const createVolunteer = async() => {
        try {
          const res = await fetch('http://localhost:8080/api/volunteer/new', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              // email: user?.email,
              // password: user?.password,
              name: volunteerData.name,
              superscription: volunteerData.superscription,
              telephoneNumber: volunteerData.telephoneNumber
            })
          })
    
          const data = await res.json()
          console.log(data)
          console.log(volunteerData)
        } catch (error) {
          console.log(error)
        }
      }
    

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fafafa] relative overflow-hidden px-4">
      
      <div className="absolute top-6 left-6 flex items-center gap-2">
        <div className="w-30 h-30 relative mb-4">
            <Image src='/logo.png' alt="" fill className="object-contein" />    
        </div>
      </div>

      <div className="absolute left-0 bottom-20 hidden md:block transform translate-x-[-150px] translate-y-[40px]">
        <Image src="/dogSide.png" alt="Dog" width={400} height={400} />
     </div>
     <div className="absolute right-0 top-20 hidden md:block transform translate-x-[150px] translate-y-[-40px]">
        <Image src="/catSide.png" alt="Cat" width={400} height={400} />
     </div>

      <div className="bg-[#E1FFE1] rounded-[32px] shadow-md py-16 px-24 z-10">
        <div className="flex-1 justify-center text-center mb-20">
            <p className="text-2xl text-[#000] md:text-3xl font-bold">Choose who you are:</p>
        </div>
        <div className="px-15 flex items-center gap-40 mb-20">
            <div className="bg-[#FFF7E6] p-7 rounded-[28px]">
                <div className="w-full flex-1 justify-center">
                    <div className="ml-18 w-20 h-20 relative mb-4 flex items-center justify-center">
                        <Image src='/InvestorRegister.png' alt="" fill className="object-contein" />    
                    </div>
                    <p className="text-[#6D4C00] text-[32px] font-bold">I am an Investor</p>
                    <ul className="max-w-[235px]">
                        <li className="text-[#6D4C00] text-[16px] font-bold mb-2">  •  Support farmers and help revive Ukraine</li>
                        <li className="text-[#6D4C00] text-[16px] font-bold mb-2">  •  Get unique coins for your contribution</li>
                        <li className="text-[#6D4C00] text-[16px] font-bold mb-2">  •  Complete missions and earn additional rewards</li>
                        <li className="text-[#6D4C00] text-[16px] font-bold mb-2">  •  Trade coins on crypto exchanges and earn</li>
                        <li className="text-[#6D4C00] text-[16px] font-bold mb-6">  •  Be part of a great movement to restore the economy</li>
                    </ul>
                    <div
                        className="px-8 py-3 ml-10 rounded-[16px] bg-[#FFC107] text-center text-white font-semibold text-[16px] shadow-md hover:bg-[#e56d30] transition"
                        onClick={() => { 
                            setUserType("volunteer")
                            // handleChange()
                        }}
                    >
                        Сontinue
                    </div>
                </div>
            </div>
            <div className="bg-[#B7FFCC] p-7 rounded-[28px]">
            <div className="w-full flex-1 justify-center">
                    <div className="ml-18 w-20 h-20 relative mb-4 flex items-center justify-center">
                        <Image src='/FarmerRegister.png' alt="" fill className="object-contein" />    
                    </div>
                    <p className="text-[#6D4C00] text-[32px] font-bold">I am a farmer</p>
                    <ul className="max-w-[235px]">
                        <li className="text-[#6D4C00] text-[16px] font-bold mb-2">  •  List your fields and tell us what you plan to grow</li>
                        <li className="text-[#6D4C00] text-[16px] font-bold mb-2">  •  Get support from investors from all over the world</li>
                        <li className="text-[#6D4C00] text-[16px] font-bold mb-2">  •  Rebuild your economy after the consequences of war</li>
                        <li className="text-[#6D4C00] text-[16px] font-bold mb-2">  •  Develop your business together with the community</li>
                        <li className="text-[#6D4C00] text-[16px] font-bold mb-6">  •  Reward investors with bonuses for their support</li>
                    </ul>
                    <div className="flex items-center gap-2">
                        <div
                            className="px-8 py-3 rounded-[16px] bg-[#4CAF50] text-center text-white font-semibold text-[16px] shadow-md hover:bg-[#e56d30] transition"
                            onClick={() => { 
                                setUserType("shelter")
                                // handleChange()
                            }}
                        >
                            Сontinue
                        </div>
                        <div
                            className="px-2 py-2 rounded-[16px] bg-[#4CAF50] text-center text-white font-semibold text-[16px] shadow-md hover:bg-[#e56d30] transition"
                            onClick={() => { 
                                setUserType("shelter")
                                // handleChange()
                            }}
                        >
                            <div className="flex items-center gap-2">
                                <Image src='/diaIcon.png' alt="" width={33} height={33} className="object-contein" />  
                                <p className="">Diia Auth</p>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      {userType === 'shelter' && (
        <div 
        className="absolute bottom-0 left-0 w-full h-screen flex items-center justify-center z-50"
        onClick={() => setUserType('')}
        >
        <div className="absolute inset-0 bg-[#E1FFE1] opacity-50 z-0"></div>

        <div 
            className="relative bg-[#FF7A2F] rounded-2xl p-8 w-full max-w-md mx-auto text-white text-center space-y-5 shadow-lg z-10"
            onClick={(e) => e.stopPropagation()}
        >
            <h2 className="text-xl font-bold">Розкажіть трохи про свій притулок 🐾</h2>

                <div className="text-left">
                    <label className="block mb-1">🏠 Назва притулку</label>
                    <input
                    value={shelterData.name}
                    onChange={(e) => setShelterData((prev) => ({...prev, name: e.target.value}))}
                    type="text"
                    className="w-full px-4 py-2 rounded-md bg-[#FCA27E] placeholder-white text-white outline-none"
                    placeholder=" "
                    />
                </div>

                <div className="text-left">
                    <label className="block mb-1">🏙️ Місто</label>
                    <input
                    value={shelterData.city}
                    onChange={(e) => setShelterData((prev) => ({...prev, city: e.target.value}))}
                    type="text"
                    className="w-full px-4 py-2 rounded-md bg-[#FCA27E] placeholder-white text-white outline-none"
                    placeholder=" "
                    />
                </div>

                <div className="text-left">
                    <label className="block mb-1">📍 Адреса місця знаходження</label>
                    <input
                    value={shelterData.location}
                    onChange={(e) => setShelterData((prev) => ({...prev, location: e.target.value}))}
                    type="text"
                    className="w-full px-4 py-2 rounded-md bg-[#FCA27E] placeholder-white text-white outline-none"
                    placeholder=" "
                    />
                </div>

                <div className="text-left">
                    <label className="block mb-1">🐶 Вид притулку</label>
                    <input
                    value={shelterData.shelterType}
                    onChange={(e) => setShelterData((prev) => ({...prev, shelterType: e.target.value}))}    
                    type="text"
                    className="w-full px-4 py-2 rounded-md bg-[#FCA27E] placeholder-white text-white outline-none"
                    placeholder=" "
                    />
                </div>

                <div className="text-left">
                    <label className="block mb-1">📞 Контактний номер телефону</label>
                    <input
                    value={shelterData.telephoneNumber}
                    onChange={(e) => setShelterData((prev) => ({...prev, telephoneNumber: e.target.value}))}         
                    type="tel"
                    className="w-full px-4 py-2 rounded-md bg-[#FCA27E] placeholder-white text-white outline-none"
                    placeholder=" "
                    />
                </div>

                <Link onClick={createShelter} href='/login' className="px-8 py-3 rounded-[16px] bg-[#F68C6B] text-white font-semibold text-[16px] shadow-md hover:bg-[#e56d30] transition">
                    Завершити реєстрацію
                </Link>
            </div>
        </div>)}

        {userType === 'volunteer' && (
  <div 
    className="absolute bottom-0 left-0 w-full h-screen flex items-center justify-center z-50"
    onClick={() => setUserType('')}
  >
    <div className="absolute inset-0 bg-[#E1FFE1] opacity-50 z-0"></div>

    <div 
      className="relative bg-[#E39B9B] rounded-2xl p-8 w-full max-w-md mx-auto text-white text-center shadow-lg border border-blue-300 z-10"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Volunteer form content */}
      <h2 className="text-xl font-bold mb-4">Розкажіть про себе 🙌</h2>

      <div className="text-left mb-4">
        <label className="block mb-1">🧑‍💼 Ім’я та прізвище</label>
        <input
          value={volunteerData.name}
          onChange={(e) => setVolunteerData((prev) => ({...prev, name: e.target.value}))}
          type="text"
          className="w-full px-4 py-2 rounded-md bg-[#F3BEBE] placeholder-white text-white outline-none"
          placeholder=" "
        />
      </div>

      <div className="text-left mb-4">
        <label className="block mb-1">🏙️ Місто проживання</label>
        <input
          value={volunteerData.superscription}
          onChange={(e) => setVolunteerData((prev) => ({...prev, superscription: e.target.value}))}
          type="text"
          className="w-full px-4 py-2 rounded-md bg-[#F3BEBE] placeholder-white text-white outline-none"
          placeholder=" "
        />
      </div>

      <div className="text-left mb-4">
        <label className="block mb-1">📞 Номер телефону</label>
        <input
          value={volunteerData.telephoneNumber}
          onChange={(e) => setVolunteerData((prev) => ({...prev, telephoneNumber: e.target.value}))}
          type="tel"
          className="w-full px-4 py-2 rounded-md bg-[#F3BEBE] placeholder-white text-white outline-none"
          placeholder=" "
        />
      </div>

      <div className="text-left mb-4">
        <p className="mb-2">🐶 Я хочу допомагати з:</p>
        <div className="grid grid-cols-2 gap-2 text-sm">
          {/* Your checkboxes */}
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox text-orange-500" />
            <span>Доглядом за тваринами</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox text-orange-500" />
            <span>Перевезенням</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox text-orange-500" />
            <span>Пошуком нових домівок</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox text-orange-500" />
            <span>Фото / соцмережі</span>
          </label>
        </div>
      </div>

      <div className="text-left mb-6">
        <label className="block mb-1">Інше:</label>
        <input
          type="text"
          className="w-full px-4 py-2 rounded-md bg-[#F3BEBE] placeholder-white text-white outline-none"
          placeholder=" "
        />
      </div>

      <Link href='/login' onClick={createVolunteer} className="px-8 py-3 rounded-[16px] bg-[#F68C6B] text-white font-semibold text-[16px] shadow-md hover:bg-[#e56d30] transition">
        Завершити реєстрацію
      </Link>
    </div>
  </div>
)}
    </div>
  );
}
