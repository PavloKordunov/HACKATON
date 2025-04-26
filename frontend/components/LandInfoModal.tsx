import Image from "next/image";

interface LandInfoModalProps {
  onClose: () => void;
  area: string;
  crop: string;
}

export default function LandInfoModal({ onClose, area, crop }: LandInfoModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center text-[#000] bg-white/50 p-4 z-50">

      <div className="bg-white rounded-xl shadow-xl w-full max-w-fit p-6 relative">
        <h2 className="text-center text-xl font-bold mb-6">
          Cadastral number: <span className="font-extrabold">№ 4623686600:06:000:0002</span>
        </h2>

        <div className="flex gap-24">
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Information about the owner:</h3>
            <div className="w-40 h-40 relative rounded-lg overflow-hidden mb-4">
              <Image
                src="/owner.png"
                alt="Owner"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-medium">Oleg Petrosyan</p>
              <p className="text-gray-600">Lands in possession: 3</p>
            </div>
          </div>

          {/* Land Plot Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Information about the land plot:</h3>
            <div className="text-gray-800 space-y-1 mb-6">
              <p><span className="font-semibold">Area:</span> {area} га</p>
              <p><span className="font-semibold">Location:</span> village of Nagorny</p>
              <p><span className="font-semibold">Property:</span> Private property</p>
              <p><span className="font-semibold">Using:</span> For commercial agricultural production</p>
              <p><span className="font-semibold">Category:</span> Agricultural land</p>
              <p><span className="font-semibold">What is sown:</span> {crop}</p>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-gray-200 rounded-full h-3 mb-3 overflow-hidden">
              <div className="bg-blue-500 h-3" style={{ width: "40%" }}></div>
            </div>

            <div className="flex items-center justify-between mb-4">
              <button className="bg-blue-600 text-white py-2 px-6 rounded-full text-sm font-semibold hover:bg-blue-700 transition">
                Donate
              </button>
              <p className="text-gray-800">collected: 100$</p>
            </div>
          </div>
        </div>

        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          ✕
        </button>
      </div>
    </div>
  );
}
