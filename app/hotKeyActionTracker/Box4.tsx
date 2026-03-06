import { ChevronLeft, ChevronRight } from "lucide-react";

interface Box4Props {
  dashboardInfo: any; //Placeholder
}

const btnCls =
  "p-1 rounded-lg border border-[#3b82f6]/50 text-[#93c5fd] transition-all bg-gradient-to-r from-[#1d4ed8]/20 to-[#2563eb]/20 hover:from-[#1d4ed8]/30 hover:to-[#2563eb]/30 hover:shadow-lg hover:shadow-[#3b82f6]/30";
const valueCls =
  "px-1.5 py-0.5 font-mono font-semibold text-[#eff6ff] rounded border border-[#1d4ed8]/50 bg-[#00040f]/70";

function SideArrow({ value }: { value: number }) {
  return (
    <div className="bg-[#000d1f] border border-[#1d4ed8] rounded-lg text-[#bfdbfe] p-3 flex flex-col text-center">
      <div className="flex flex-row justify-center items-center gap-2">
        <button className={btnCls}>
          <ChevronLeft size={16} strokeWidth={2.5} />
        </button>
        <span className={valueCls}>{value}</span>
        <button className={btnCls}>
          <ChevronRight size={16} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}

export default function Box4({ dashboardInfo }: Box4Props) {
  const { name, currentProgress, maxProgress } = dashboardInfo;
  const progressPercentage = Math.round((currentProgress / maxProgress) * 100);
  let motivationalQuote = undefined;
  if (progressPercentage <= 25) motivationalQuote = "Just getting started!";
  else if (progressPercentage <= 50) motivationalQuote = "Halfway there!";
  else if (progressPercentage <= 75) motivationalQuote = "Keep pushing!";
  else if (progressPercentage <= 99) motivationalQuote = "Almost there!";
  else motivationalQuote = "Finished!!!";
  return (
    <div className="group bg-[#00040f] border border-[#1d4ed8] rounded-lg text-[#bfdbfe] h-full">
      <div className="bg-[#000d1f] border border-[#3b82f6] rounded-lg w-full h-full flex flex-col group-hover:shadow-[0_4px_12px_2px_rgba(59,130,246,0.3),4px_0_8px_0px_rgba(59,130,246,0.15),-4px_0_8px_0px_rgba(59,130,246,0.15)] transition-shadow duration-300 text-sm p-3">
        <div className="pb-2 flex gap-2 justify-start items-center">
          <span className={`${valueCls} inline`}>{name}</span>
          Current Configuration
        </div>
        <hr className="w-[99%] mx-auto border-[#3b82f6] mt-1" />
        <div className="bg-[#00040f] border border-[#1d4ed8] rounded-md p-4 mt-2 flex-1 w-full gap-4 pb-5 pt-4 flex flex-col">
          <div className="flex flex-row items-center gap-4 justify-start">
            <p className=" w-min  text-center">Current Progress</p>
            <SideArrow value={currentProgress} />
            <div className="w-full p-1 rounded-sm bg-gradient-to-r from-[#1e3a8a]/60 via-[#2563eb] to-[#3b82f6] border border-[#3b82f6]/30 shadow-[0_0_8px_rgba(59,130,246,0.4)]">
              <span className="pl-[5%]">{motivationalQuote}</span>
            </div>
          </div>
          <div className="flex flex-row items-center gap-4 justify-end">
            <SideArrow value={maxProgress} />
            <p className=" w-min text-center">Max Progress</p>
          </div>
        </div>
      </div>
    </div>
  );
}
