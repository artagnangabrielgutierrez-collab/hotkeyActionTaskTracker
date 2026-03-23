"use client";
import {
  useDashboardInfo,
  useActiveTab,
  useIsOpen,
  DashboardInfoType,
  useTabNumber,
} from "@/store/useGlobalStore";
import AddNewTab from "./AddNewTab";
import Box1 from "./Box1";
import Box2 from "./Box2";
import Box3 from "./Box3";
import Box4 from "./Box4";
import Box5 from "./Box5";
import TabBar from "./TabBar";
import EditHotkey from "./EditHotkey";
import EditDescription from "./EditDescription";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Box6 from "./Box6";
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

export default function HotKeyActionTracker() {
  const dashboardInfo = useDashboardInfo((state) => state.dashboardInfo);
  const setDashboardInfo = useDashboardInfo((state) => state.setDashboardInfo);
  const updateDashboardItem = useDashboardInfo(
    (state) => state.updateDashboardItem,
  );
  const activeTab = useActiveTab((state) => state.activeTab);
  const setActiveTab = useActiveTab((state) => state.setActiveTab);
  const currentDashboardInfo = dashboardInfo.find(
    (item: DashboardInfoType) => item.id === activeTab,
  );

  const setTabNumber = useTabNumber((state) => state.setTabNumber);
  {
    /* Conditional Components boolean */
  }
  const isAddNewTab = useIsOpen((state) => state.isAddNewTab);
  const isHotkeyEdit = useIsOpen((state) => state.isHotkeyEdit);
  const isDescriptionEdit = useIsOpen((state) => state.isDescriptionEdit);

  if (!currentDashboardInfo) {
    setActiveTab(1);
    setTabNumber([0, 1]);
  }

  return (
    <section className="min-h-[90vh] pb-6 ">
      {/* Conditional Components */}
      {isDescriptionEdit && (
        <EditDescription
          currentDashboardInfo={currentDashboardInfo}
          updateDashboardItem={updateDashboardItem}
        />
      )}

      {isHotkeyEdit && (
        <EditHotkey
          currentDashboardInfo={currentDashboardInfo}
          updateDashboardItem={updateDashboardItem}
        />
      )}

      {isAddNewTab && (
        <AddNewTab
          dashboardInfo={dashboardInfo}
          setDashboardInfo={setDashboardInfo}
        />
      )}
      {/* Conditional Components End*/}

      <TabBar />
      <div
        className="mx-auto my-auto grid grid-cols-2 grid-rows-3 gap-4 px-4 pt-4 pb-4 h-90 md:min-h-110 md:h-[65vh] lg:h-[65vh] xl:h-[59vh]  xl:max-w-[55%]"
        data-dashboard="Whole Dashboard Compiled"
      >
        <motion.div
          {...fadeUp(0)}
          className="col-start-1 row-start-1 row-span-2"
        >
          <Box1
            currentDashboardInfo={currentDashboardInfo}
            updateDashboardItem={updateDashboardItem}
          />
        </motion.div>
        <motion.div
          {...fadeUp(0.1)}
          className="col-start-2 row-start-1 row-span-4 md:row-span-1"
        >
          <Box5
            dashboardInfo={dashboardInfo}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            setTabNumber={setTabNumber}
            updateDashboardItem={updateDashboardItem}
          />
        </motion.div>
        <motion.div
          {...fadeUp(0.2)}
          className="col-start-2 row-start-2 row-span-3 hidden md:block"
        >
          {/* for md screens and above */}
          <Box5
            dashboardInfo={dashboardInfo}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            setTabNumber={setTabNumber}
            updateDashboardItem={updateDashboardItem}
          />
        </motion.div>
        <motion.div
          {...fadeUp(0.3)}
          className="col-start-1 row-start-3 row-span-2 "
        >
          <Box3 hotkey={currentDashboardInfo?.hotkey!} />
        </motion.div>
      </div>
      <div className="col-start-1 col-span-2 row-start-6 row-span-6 px-4 xl:max-w-[55%] mx-auto">
        <motion.div {...fadeUp(0.4)} className="">
          <Box4
            currentDashboardInfo={currentDashboardInfo}
            updateDashboardItem={updateDashboardItem}
          />
        </motion.div>
        <motion.div
          {...fadeUp(0.5)}
          className="col-start-2 row-start-2 row-span-3 md:hidden pt-4 "
        >
          {/* for mobile */}
          <Box2 currentDashboardInfo={currentDashboardInfo} />
        </motion.div>
        <motion.div
          {...fadeUp(0.5)}
          className="col-start-2 row-start-2 row-span-3 pt-4 "
        >
          <Box6 />
        </motion.div>
      </div>
    </section>
  );
}
