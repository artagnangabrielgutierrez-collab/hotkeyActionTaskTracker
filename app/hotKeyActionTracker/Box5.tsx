"use client";
import { useEffect, useState } from "react";
import {
  useTabNumber,
  DashboardInfoType,
  useDashboardInfoType,
} from "@/store/useGlobalStore";

type updateDashboardItem = useDashboardInfoType["updateDashboardItem"];

interface TaskCardProps {
  dashboardInfo: DashboardInfoType;
  setActiveTab: (val: number) => void;
  setTabNumber: any; //temp
}

function TaskCard({
  dashboardInfo,
  setActiveTab,
  setTabNumber,
}: TaskCardProps) {
  const {
    id,
    name,
    hotkey,
    currentProgress,
    maxProgress,
    completionAnimation,
  } = dashboardInfo;
  const tabNumber = useTabNumber((state) => state.tabNumber);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function update() {
      if (window.innerWidth <= 764) setIsMobile(true);
      else setIsMobile(false);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  function switchTab() {
    setActiveTab(id);
    if (isMobile) setTabNumber([id - 1, id]);
  }

  return (
    <div
      className={`flex flex-col gap-1 p-2 rounded-lg border border-[#1d4ed8]/50 bg-[#00040f]/50 
    hover:shadow-[0_4px_12px_2px_rgba(192,192,192,0.3),4px_0_8px_0px_rgba(192,192,192,0.15),-4px_0_8px_0px_rgba(192,192,192,0.15)]
    transition-all duration-300 ${completionAnimation ? "border border-blue-400 shadow-2xl shadow-blue-500/80 scale-101 bg-blue-800/50" : ""}`}
      onClick={switchTab}
    >
      <div className="flex items-center gap-2 px-2">
        <span className="text-[#93c5fd]">Name:</span>
        <span className="font-semibold text-[#eff6ff] truncate">{name}</span>
      </div>
      <div className="flex items-center gap-2 px-2">
        <span className="text-[#93c5fd]">Hotkey:</span>
        <span className="px-1.5 py-0.5 font-mono font-semibold text-[#eff6ff] rounded border border-[#1d4ed8]/50 bg-[#00040f]/70">
          {hotkey}
        </span>
      </div>
      <div className="flex items-center gap-2 px-2">
        <span className="text-[#93c5fd]">Progress:</span>
        <span className="font-semibold text-[#60a5fa]">
          {currentProgress} / {maxProgress}
        </span>
      </div>
    </div>
  );
}

interface Box5Props {
  dashboardInfo: DashboardInfoType[];
  activeTab: number;
  setActiveTab: (val: number) => void;
  setTabNumber: any;
  updateDashboardItem: updateDashboardItem;
}

export default function Box5({
  dashboardInfo,
  activeTab,
  setActiveTab,
  setTabNumber,
  updateDashboardItem,
}: Box5Props) {
  //For increasing progress with hotkey
  useEffect(() => {
    const heldKeys = new Set<string>();

    function handleKeyDown(e: KeyboardEvent) {
      heldKeys.add(e.key);
      dashboardInfo.forEach((item) => {
        const key = [...heldKeys].join("").toUpperCase();
        if (key === item.hotkey) {
          const newProgress = item.currentProgress + 1;
          if (newProgress >= item.maxProgress) {
            updateDashboardItem(item.id, {
              currentProgress: 0,
              totalCompletion: item.totalCompletion + 1,
              completionAnimation: true,
              completionHistoryDate: [
                { time: new Date().toLocaleString() },
                ...item.completionHistoryDate,
              ],
            });
            setTimeout(() => {
              updateDashboardItem(item.id, {
                completionAnimation: false,
              });
            }, 400);
          } else {
            updateDashboardItem(item.id, { currentProgress: newProgress });
          }
        }
      });
    }

    function handleKeyUp(e: KeyboardEvent) {
      heldKeys.delete(e.key);
    }

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [dashboardInfo]);

  return (
    <div
      className="group bg-[#00040f] border border-[#1d4ed8] rounded-lg text-[#bfdbfe] h-full hover:shadow-[0_4px_12px_2px_rgba(59,130,246,0.3),4px_0_8px_0px_rgba(59,130,246,0.15),-4px_0_8px_0px_rgba(59,130,246,0.15)]
transition-shadow duration-300"
    >
      <div className="bg-[#000d1f] border border-[#3b82f6] rounded-lg w-full h-full flex flex-col text-sm p-4">
        <h1 className="pb-2 text-sm text-[#93c5fd] uppercase tracking-wide border-b border-[#3b82f6]/40">
          Other Tasks List
        </h1>
        <div className="mt-2 flex-1 w-full">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {dashboardInfo
              .filter((e) => e.id != activeTab)
              .map((e) => (
                <TaskCard
                  key={e.id}
                  dashboardInfo={e}
                  setActiveTab={setActiveTab}
                  setTabNumber={setTabNumber}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
