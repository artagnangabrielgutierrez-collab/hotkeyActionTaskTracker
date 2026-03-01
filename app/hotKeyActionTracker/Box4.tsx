export default function Box4() {
  return (
    <div className="group bg-[#1a1b2e] border border-[#414868] rounded-lg text-[#c0caf5] p-3 h-full">
      <div
        className="bg-[#2a2b3e] border border-[#565f89] rounded-lg p-3 w-full h-full flex flex-col
        group-hover:shadow-[0_4px_12px_2px_rgba(192,192,192,0.1),4px_0_8px_0px_rgba(192,192,192,0.05),-4px_0_8px_0px_rgba(192,192,192,0.05)]
        transition-shadow duration-300 text-sm"
      >
        Current Configuration
        <hr className="w-[99%] mx-auto t border-white mt-1" />
        <div className="bg-[#1e1f32] border border-[#3b4261] rounded-md p-2 mt-2 flex-1 w-full grid grid-rows-3 grid-cols-2 gap-4 pb-5 pt-4">
          <div className="group bg-[#1e2030] border border-[#3d59a1] rounded-lg text-[#c0caf5] p-3">
            1
          </div>
          <div className="group bg-[#1e2030] border border-[#3d59a1] rounded-lg text-[#c0caf5] p-3">
            2
          </div>
          <div className="group bg-[#1e2030] border border-[#3d59a1] rounded-lg text-[#c0caf5] p-3">
            1
          </div>
          <div className="group bg-[#1e2030] border border-[#3d59a1] rounded-lg text-[#c0caf5] p-3">
            2
          </div>
          <div className="group bg-[#1e2030] border border-[#3d59a1] rounded-lg text-[#c0caf5] p-3 col-span-2">
            1
          </div>
        </div>
      </div>
    </div>
  );
}
