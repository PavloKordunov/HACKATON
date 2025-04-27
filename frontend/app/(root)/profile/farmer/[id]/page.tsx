// app/page.tsx
'use client';
import Image from 'next/image';

export default function ProfilePage() {
  return (
    <div className="min-h-screen  bg-gray-100 text-[#000] flex flex-col items-center justify-center gap-6">
      <div className="pl-40 flex gap-20 max-w-1400 w-full">
        <div className='w-[380px]'>
            <div className="flex mb-12">
            <Image
                src="/owner.png"
                alt="Oleg Petrosian"
                width={380}
                height={380}
                className="rounded-xl object-cover"
            />
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md w-fit">
                <h2 className="text-xl text-[36px] font-bold mb-4">Statistic</h2>
                <p className="text-gray-700 text-[24px]">Amount land: 20</p>
                <p className="text-gray-700 text-[24px]">Land area: 120 hectares</p>
                <p className="text-gray-700 text-[24px]">Projects financed: 5</p>
                <p className="text-gray-700 text-[24px]">Average annual profit: +18%</p>
                <p className="text-gray-700 text-[24px]">Investor reviews: ★ 4.9 (27 reviews)</p>
            </div>
        </div>

        <div className='w-[890px]'>
            <div className="bg-white p-6 rounded-xl mb-12 shadow-md">
                <h1 className="text-[48px] font-bold mb-8">Oleg Petrosian</h1>
                <p className="text-gray-700 text-[24px]">Location: Lviv Region, Bibrka</p>
                <p className="text-gray-700 text-[24px]">Email: oleg.petrosian@example.com</p>
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
  );
}
