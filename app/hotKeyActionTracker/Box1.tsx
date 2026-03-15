"use client";
import {
  DashboardInfoType,
  useDashboardInfoType,
  useDashboardInfo,
} from "@/store/useGlobalStore";
import { Award,  } from "lucide-react";
type updateDashboardItem = useDashboardInfoType["updateDashboardItem"];

interface Box1Props {
  currentDashboardInfo: DashboardInfoType;
  updateDashboardItem: updateDashboardItem;
}

export default function Box1({
  currentDashboardInfo,
  updateDashboardItem,
}: Box1Props) {
  if (!currentDashboardInfo) return;
  // prettier-ignore
  const { id, currentProgress, maxProgress, totalCompletion, completionHistoryDate, completionAnimation } = currentDashboardInfo;
  const percentage = Math.min(
    Math.round((currentProgress / maxProgress) * 100),
    100,
  );

  const dashboardInfo = useDashboardInfo((state) => state.dashboardInfo); //for debugging only
  function handleManualIncrease() {
    
    updateDashboardItem(id, { currentProgress: currentProgress + 1 });
    if (currentProgress + 1 === maxProgress) {
      updateDashboardItem(id, {
        currentProgress: 0,
        totalCompletion: totalCompletion + 1,
        completionHistoryDate: [...completionHistoryDate, { time: new Date().toLocaleString() }]
      });
    }
  }

  return (
    <div
      className="border border-[#1d4ed8] rounded-lg text-[#bfdbfe] h-full 
    hover:shadow-[0_4px_12px_2px_rgba(59,130,246,0.3),4px_0_8px_0px_rgba(59,130,246,0.15),-4px_0_8px_0px_rgba(59,130,246,0.15)] 
    transition-shadow duration-300"
    >
      <div
        className="relative flex flex-col w-full h-full rounded-lg overflow-hidden border-4 border-[#3b82f6]/30
        shadow-2xl shadow-[#3b82f6]/20 bg-linear-to-br from-[#000d1f] via-[#00040f] to-[#000209]
        transition-shadow duration-300"
      >
        {/* Progress pill */}
        <div className="flex justify-center gap-4">
          <div className="relative flex flex-row items-center justify-center w-[50%] px-1 py-1 mt-4  rounded-full border border-[#1d4ed8]/50 bg-[#000d1f]/50 z-10">
            <span className="font-bold text-[#bfdbfe] text-[1em] xl:text-[1.5em]">
              {currentProgress}
            </span>
            <span className="mx-2 text-[#3b82f6] text-[1em] xl:text-[1.5em]">
              /
            </span>
            <span className="font-bold text-[#3b82f6] text-[1em] xl:text-[1.5em]">
              {maxProgress}
            </span>
          </div>
          <div className="text-sm relative flex flex-row items-center justify-center  px-1 py-1 mt-4 min-w-15 rounded-sm border border-[#1d4ed8]/50 bg-[#000d1f]/50 z-10">
            <Award className=" w-5  text-purple-400 text-center my-auto" />
            {totalCompletion}
          </div>
        </div>
        {/* Water fill */}
        <div
          className="absolute bottom-0 left-0 right-0 transition-all duration-500 ease-out bg-linear-to-r from-[#1d4ed8] to-[#3b82f6]"
          style={{ height: `${percentage}%` }}
        >
          <div className="absolute inset-0 bg-linear-to-t from-[#3b82f6]/30 to-transparent" />
        </div>
        {/* Percentage */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="font-bold text-[#bfdbfe] drop-shadow-lg text-[2em] xl:text-[2.0em]">
            {percentage}%
          </span>
        </div>
        {/* Increase button */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center z-10 gap-2">
          <button
            className="px-2 py-1 text-sm font-semibold text-[#bfdbfe] rounded-lg border border-[#3b82f6] shadow-lg transition-all duration-300 transform bg-linear-to-r from-[#1d4ed8] to-[#3b82f6] hover:from-[#2563eb] hover:to-[#60a5fa] hover:shadow-[#3b82f6]/50 hover:scale-105"
            onClick={handleManualIncrease}
          >
            Increase
          </button>

        </div>
      </div>
    </div>
  );
}
