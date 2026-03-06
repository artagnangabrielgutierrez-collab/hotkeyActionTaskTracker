"use client";

import { useEffect, useState } from "react";
import { useDashboardInfo, useActiveTab } from "@/store/useGlobalStore";
export default function Box2({}) {
  const [completionHistoryCount, setCompletionHistoryCount] = useState(0);
  const activeTab = useActiveTab((state) => state.activeTab);
  const currentDashboardInfo = useDashboardInfo(
    (state) => state.dashboardInfo[activeTab - 1],
  );

  useEffect(() => {
    const handler = () => {
      const w = window.innerWidth;
      if (w >= 764) setCompletionHistoryCount(2);
      else setCompletionHistoryCount(4);
    };
    handler();
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <div className="group bg-[#00040f] border border-[#1d4ed8] rounded-lg text-[#bfdbfe]  h-full">
      <div
        className="bg-[#000d1f] border border-[#3b82f6] rounded-lg p-3 w-full h-full
        group-hover:shadow-[0_4px_12px_2px_rgba(59,130,246,0.3),4px_0_8px_0px_rgba(59,130,246,0.15),-4px_0_8px_0px_rgba(59,130,246,0.15)]
        transition-shadow duration-300 text-md flex flex-col "
      >
        Completion History
        <hr className="w-[99%] mx-auto border-[#3b82f6] mt-1" />
        <div className="flex flex-col gap-5 md:flex-row w-full  mb-auto mt-[0.60rem] overflow-auto ">
          {currentDashboardInfo.completionHistoryDate
            .slice(0, completionHistoryCount)
            .map((e, i) => {
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-lg border-l-4 border-y border-r border-cyan-700/50 bg-slate-900/40 w-full"
                >
                  {e.time}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
