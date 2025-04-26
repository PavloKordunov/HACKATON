import Footer from "@/components/Footer";
import NavBar from "@/components/Header"
import Image from "next/image"
import Link from "next/link"

const HomePage = () => {

    const investors = [
        { name: "Jane Ritcher", area: "15261", amount: "435343" },
        { name: "John Dane", area: "14320", amount: "464323" },
        { name: "Quirrel Bame", area: "13000", amount: "42345" },
        { name: "Michael Lebiga", area: "13200", amount: "40000" },
        { name: "Pope Francis", area: "11000", amount: "38308" },
      ];

    return (
        <div>
            <div className="relative py-9 px-20 w-full h-[600px] overflow-hidden mb-15">
                <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/mapImg.png')",
                }}
                ></div>

                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-[1200px] h-[300px] bg-white/70 flex flex-col items-center justify-center text-center">
                        <h1 className="text-[#000] mb-8 text-[56px] font-semibold">Make your investment into farming</h1>
                        <Link 
                            className="text-[#fff] text-[32px] font-medium py-4 px-10 bg-[#000] rounded-lg transition hover:bg-gray-800"
                            href="/map"
                        >
                            Select Field
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center p-6 mb-20">
      <h2 className="text-[48px] text-[#000] font-bold mb-6">Top Investors</h2>

      <div className="w-full max-w-[1600px] rounded-lg shadow-md bg-white">
        <div className="grid grid-cols-3 font-semibold border-b p-4">
          <span className="text-[36px] text-[#000]">Name</span>
          <span className="text-[36px] text-[#000]">Area</span>
          <span className="text-[36px] text-[#000]">Amount</span>
        </div>

        {investors.map((investor, idx) => (
          <div
            key={idx}
            className="grid grid-cols-3 items-center p-4 border-b last:border-none text-gray-700"
          >
            <div className="flex items-center gap-2 text-[36px] font-bold">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white text-[36px] font-bold">
                {investor.name.split(" ")[0][0]}
              </div>
              {investor.name}
            </div>
            <div>
              <span className="text-[36px] font-bold">{investor.area} hectares</span> 
            </div>
            <div className="text-[36px] font-bold">{investor.amount}$</div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
        </div>
    )
}

export default HomePage