import Image from "next/image"

const Footer = () => {
    return(
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
    )
}

export default Footer