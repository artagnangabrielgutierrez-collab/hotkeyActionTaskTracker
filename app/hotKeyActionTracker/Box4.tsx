interface Box4Props {
  name: string;
  currentProgress: number;
  maxProgress: number;
  totalCompletion: number;
}

export default function Box4({
  name,
  currentProgress,
  maxProgress,
  totalCompletion,
}: Box4Props) {
  return (
    <div className="group bg-[#00040f] border border-[#1d4ed8] rounded-lg text-[#bfdbfe]  h-full">
      <div
        className="bg-[#000d1f] border border-[#3b82f6] rounded-lg  w-full h-full flex flex-col
        group-hover:shadow-[0_4px_12px_2px_rgba(59,130,246,0.3),4px_0_8px_0px_rgba(59,130,246,0.15),-4px_0_8px_0px_rgba(59,130,246,0.15)]
        transition-shadow duration-300 text-sm p-4"
      >
        Current Configuration
        <hr className="w-[99%] mx-auto border-[#3b82f6] mt-1" />
        <div className="bg-[#00040f] border border-[#1d4ed8] rounded-md p-4 mt-2 flex-1 w-full grid grid-rows-3 grid-cols-2 gap-4 pb-5 pt-4">
          <div className="bg-[#000d1f] border border-[#1d4ed8] rounded-lg text-[#bfdbfe] p-3">
            Name: {name}
          </div>
          <div className="bg-[#000d1f] border border-[#1d4ed8] rounded-lg text-[#bfdbfe] p-3">
            current Progress: {currentProgress}
          </div>
          <div className="bg-[#000d1f] border border-[#1d4ed8] rounded-lg text-[#bfdbfe] p-3">
            maxProgress: {maxProgress}
          </div>
          <div className="bg-[#000d1f] border border-[#1d4ed8] rounded-lg text-[#bfdbfe] p-3">
            totalCompletion: {totalCompletion}
          </div>
          <div className="bg-[#000d1f] border border-[#1d4ed8] rounded-lg text-[#bfdbfe] p-3 col-span-2">
            5
          </div>
        </div>
      </div>
    </div>
  );
}
