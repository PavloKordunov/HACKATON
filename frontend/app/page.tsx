import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-fit">
      <div className="relative py-9 px-20 w-full h-[600px] overflow-hidden mb-15">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/bgImg.png')",
          }}
        ></div>

        <div className="absolute inset-0 bg-[#1B7A43] opacity-90"></div>

        <div className="relative z-10 flex h-full gap-60">
          <div className="max-w-[920px] mt-15">
            <h1 className="text-[#fff] text-[56px] font-semibold text-base/14 mb-5">Let's Revive Ukraine's Agricultural Economy Together!</h1>
            <p className="text-[#fff] text-[26px] mb-15">Help farmers restore their crops — earn tokens as a reward for your support.</p>
            <button className="py-3 px-10 bg-[#fff] rounded-[5px] text-[32px] font-medium text-[#1B7A43] shadow-md">Join now</button>
          </div>
          <div className="w-120 h-120 relative">
            <Image src='/farmerMain.png' alt="" fill className="object-contein" />    
          </div>
        </div>
      </div>
      <div className="w-full text-center">
        <p className="text-[42px] text-[#000] font-bold mb-8">How it works?</p>
      </div>
      <div className="ml-24 flex items-center gap-5 mb-15">
          <div className="px-5 py-6 bg-[#fff] rounded-[10px] shadow-xl w-[260px] text-center flex flex-col items-center">
            <div className="w-25 h-25 relative mb-4">
              <Image src='/direction.png' alt="" fill className="object-contein" />    
            </div>
            <p className="text-[24px] text-[#000] font-medium">Choose the field</p>
          </div> 
          <div className="w-30 h-12 relative">
            <Image src='/arrow.png' alt="" fill className="object-contein" />    
          </div>
          <div className="px-5 py-6 bg-[#fff] rounded-[10px] shadow-xl w-[260px] text-center flex flex-col items-center">
            <div className="w-20 h-20 relative mb-4">
              <Image src='/donate.png' alt="" fill className="object-contein" />    
            </div>
            <p className="text-[24px] text-[#000] w-[145px] text-base/6 font-medium">Make an investment</p>
          </div> 
          <div className="w-30 h-12 relative">
            <Image src='/arrow.png' alt="" fill className="object-contein" />    
          </div>
          <div className="px-5 py-6 bg-[#fff] rounded-[10px] shadow-xl w-[260px] text-center flex flex-col items-center">
            <div className="w-20 h-20 relative mb-4">
              <Image src='/farmerInst.png' alt="" fill className="object-contein" />    
            </div>
            <p className="text-[24px] text-[#000] w-[145px] text-base/6 font-medium">Support a farmer</p>
          </div> 
          <div className="w-30 h-12 relative">
            <Image src='/arrow.png' alt="" fill className="object-contein" />    
          </div>
          <div className="px-5 py-6 bg-[#fff] rounded-[10px] shadow-xl w-[260px] text-center flex flex-col items-center">
            <div className="w-24 h-24 relative mb-4">
              <Image src='/gift.png' alt="" fill className="object-contein" />    
            </div>
            <p className="text-[24px] text-[#000] w-[145px] text-base/6 font-medium">Get rewards</p>
          </div> 
      </div>

      <div className="w-full flex flex-col  bg-[#F3FFF1] py-13 px-25">
        <div className="w-full text-center">
          <p className="text-[42px] text-[#000] font-bold mb-8">Why this platform Matters for Ukraine</p>
        </div>
        <p className="text-[38px] text-[#3C3838] mb-8">Before the war, the agricultural sector was a pride of Ukraine. Our farmers fed the world.<br/> 
          But the war devastated farms, lands, and economic connections.
          We created this platform to help rebuild agriculture, support the heroes of our villages, and bring life back to our native land.
        </p>
        
        <div className="flex items-center gap-8 mt-8">
          <div className="w-130 h-200 relative mb-4">
            <Image src='/welcomeImg1.png' alt="" fill className="object-contein" />    
          </div>
          <div className="w-130 h-200 relative mb-4">
            <Image src='/welcomeImg2.png' alt="" fill className="object-contein" />    
          </div>
          <div className="w-130 h-200 relative mb-4">
            <Image src='/welcomeImg3.png' alt="" fill className="object-contein" />    
          </div>
        </div>
      </div>
      <footer className="bg-[#D2EACF] text-[#000] py-10 px-25">
        <div className="w-full mx-auto flex gap-16">
          
          <div className="flex flex-col mr-20 items-center gap-4 w-[600px]">
          <div className="w-40 h-40 relative mb-4">
            <Image src='/logo.png' alt="" fill className="object-contein" />    
          </div>
            <p className="text-[26px]">
              ReFarm, investment platform, supports the farmers and agriculture. 
              We let investors from all around the world select fields in need of help 
              and give them much needed finances.
            </p>
          </div>

          <div className="mt-20">
            <h3 className="font-medium mb-4 text-[32px]">Useful Links</h3>
            <ul className="flex flex-col gap-2 text-[26px]">
              <li><a className="text-[26px]" href="#">About Us</a></li>
              <li><a className="text-[26px]" href="#">Privacy & Policy</a></li>
              <li><a className="text-[26px]" href="#">Terms & Condition</a></li>
            </ul>
          </div>

          <div className="mt-20">
            <h3 className="font-medium mb-4 text-[32px]">Contact</h3>
            <ul className="text-[26px] flex flex-col gap-2">
              <li>Address: Mohammadpur, Dhaka</li>
              <li>Phone: +8801323455677</li>
              <li>Email: info@agro.com</li>
            </ul>
          </div>

          <div className="mt-20">
            <h3 className="font-medium mb-4 text-[32px]">Follow Us</h3>
            <ul className="flex flex-col gap-2 text-[26px]">
              <li className="flex items-center gap-2"> Facebook</li>
              <li className="flex items-center gap-2"> Instagram</li>
              <li className="flex items-center gap-2">Youtube</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center text-[26px] text-[#000]">
          All Rights Reserved by C&C team
        </div>
      </footer>
    </div>
  );
}
