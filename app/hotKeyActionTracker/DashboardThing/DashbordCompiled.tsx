import React from "react";
import AddNewTab from "./AddNewTab";
import ProgressBar from "./ProgressBar";
import CompletionHistory from "./CompletionHistory";
import CurrentHotkey from "./CurrentHotkey";
import CurrentConfiguration from "./CurrentConfiguration";
import OtherTasksList from "./OtherTasksList";
import { motion } from "framer-motion";
import {
  DashboardInfoType,
  useDashboardInfoType,
  useSwitchTab,
} from "@/store/useGlobalStore";

type DashbordCompiledProps = {
  currentDashboardInfo: DashboardInfoType;
  updateDashboardItem: useDashboardInfoType["updateDashboardItem"];
  dashboardInfo: DashboardInfoType[];
  activeTab: number;
  setActiveTab: (val: number) => void;
  setTabNumber: (val: number[]) => void;
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

export default function DashbordCompiled({
  currentDashboardInfo,
  updateDashboardItem,
  dashboardInfo,
  activeTab,
  setActiveTab,
  setTabNumber,
}: DashbordCompiledProps) {
  const { viewPrevTabs, viewNextTabs } = useSwitchTab();

  return (
    <>
      <div className="flex flex-row items-center justify-center">
        <button
          className="hidden lg:flex items-center justify-center bg-transparent border-none cursor-pointer hover:opacity-70 active:scale-95 transition-all"
          onClick={viewPrevTabs}
        >
          <svg
            width="70"
            height="70"
            viewBox="0 0 28 28"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 22L10 14l8-8" />
          </svg>
        </button>

        <div className=" grid grid-cols-2 grid-rows-6  gap-4 px-4 pt-4 pb-4 max-h- md:max-h-auto xl:max-w-[100%] 2xl:max-w-[50%] w-full">
          {/*ProgressBar*/}
          <motion.div
            {...fadeUp(0)}
            className="col-start-1 col end-1 col-span-1 row-start-1 row-end-3 row-span-4"
          >
            {" "}
            <ProgressBar
              currentDashboardInfo={currentDashboardInfo}
              updateDashboardItem={updateDashboardItem}
            />
          </motion.div>
          {/*End*/}

          {/*OtherTasksList*/}
          <motion.div
            {...fadeUp(0.1)}
            className="col-start-2 col-end-2 row-start-1 row-end-4"
          >
            <OtherTasksList
              dashboardInfo={dashboardInfo}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              setTabNumber={setTabNumber}
              updateDashboardItem={updateDashboardItem}
            />
          </motion.div>
          {/*End*/}

          {/*CurrentHotkey*/}
          <motion.div
            {...fadeUp(0.3)}
            className="col-start-1 col-end-1 row-start-3 row-end-3"
          >
            <CurrentHotkey hotkey={currentDashboardInfo?.hotkey!} />
          </motion.div>
          {/*End*/}

          {/*CurrentConfiguration*/}
          <motion.div
            {...fadeUp(0.5)}
            className="col-start-1 col-span-2 col-end-3 row-start-4   row-end-6     "
          >
            <CurrentConfiguration
              currentDashboardInfo={currentDashboardInfo}
              updateDashboardItem={updateDashboardItem}
            />
          </motion.div>

          {/*CompletionHistory*/}
          <motion.div
            {...fadeUp(0.5)}
            className="col-start-1 col-span-2 col-end-3 row-start-6 pt-4   md:row-start-5  row-end-6  md:pt-27   "
          >
            <CompletionHistory currentDashboardInfo={currentDashboardInfo} />
          </motion.div>
          {/*End*/}
        </div>
        <button
          className="hidden lg:flex items-center justify-center bg-transparent border-none cursor-pointer hover:opacity-70 active:scale-95 transition-all"
          onClick={viewNextTabs}
        >
          <svg
            width="70"
            height="70"
            viewBox="0 0 28 28"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10 22L18 14l-8-8" />
          </svg>
        </button>
      </div>
    </>
  );
}
