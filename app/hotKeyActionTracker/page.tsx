"use client";
import {
  useDashboardInfo,
  useActiveTab,
  useIsOpen,
  DashboardInfoType,
  useTabNumber,
} from "@/store/useGlobalStore";
import AddNewTab from "./DashboardThing/AddNewTab";
import ProgressBar from "./DashboardThing/ProgressBar";
import CompletionHistory from "./DashboardThing/CompletionHistory";
import CurrentHotkey from "./DashboardThing/CurrentHotkey";
import CurrentConfiguration from "./DashboardThing/CurrentConfiguration";
import OtherTasksList from "./DashboardThing/OtherTasksList";
import TabBar from "./TabBar";
import EditHotkey from "./DashboardThing/EditHotkey";
import EditDescription from "./DashboardThing/EditDescription";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Box6 from "./DashboardThing/Quote";
import Heatmap from "./DashboardThing/Heatmap";
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
        className="mx-auto my-auto grid grid-cols-2  gap-4 px-4 pt-4 pb-4 h-90 md:min-h-110 md:h-[65vh] lg:h-[65vh] xl:h-[59vh]  xl:max-w-[55%]"
        data-dashboard="Whole Dashboard Compiled"
      >
        {/*ProgressBar*/}
        <motion.div
          {...fadeUp(0)}
          className="col-start-1 row-start-1 row-span-3"
        >
          <ProgressBar
            currentDashboardInfo={currentDashboardInfo}
            updateDashboardItem={updateDashboardItem}
          />
        </motion.div>
        {/*End*/}

        {/*Box5*/}
        <motion.div
          {...fadeUp(0.1)}
          className="col-start-2 row-start-1 row-span-4 md:row-span-1"
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

        {/*Box5*/}
        <motion.div
          {...fadeUp(0.2)}
          className="col-start-2 row-start-2 row-span-3 hidden md:block"
        >
          {/* for md screens and above */}
          <CurrentConfiguration
            currentDashboardInfo={currentDashboardInfo}
            updateDashboardItem={updateDashboardItem}
          />
        </motion.div>
        {/*End*/}

        {/*Box3*/}
        <motion.div
          {...fadeUp(0.3)}
          className="col-start-1 row-start-4 row-span-1 "
        >
          <CurrentHotkey hotkey={currentDashboardInfo?.hotkey!} />
        </motion.div>
        {/*End*/}
      </div>
      <div className="col-start-1 col-span-2 row-start-6 row-span-6 px-4 xl:max-w-[55%] mx-auto">
        {/*Box4*/}
        <motion.div
          {...fadeUp(0.5)}
          className="col-start-2 row-start-2 row-span-3 md:hidden  "
        >
          {/* for mobile */}
          <motion.div {...fadeUp(0.4)} className="pt-">
            <CurrentConfiguration
              currentDashboardInfo={currentDashboardInfo}
              updateDashboardItem={updateDashboardItem}
            />
          </motion.div>
        </motion.div>
        {/*End*/}

        {/*Box2*/}
        <motion.div {...fadeUp(0.4)} className="pt-4">
          <CompletionHistory currentDashboardInfo={currentDashboardInfo} />
        </motion.div>
        {/*End*/}

        {/*Box6*/}
        <motion.div
          {...fadeUp(0.5)}
          className="col-start-2 row-start-2 row-span-3 pt-4 "
        >
          <Box6 />
        </motion.div>
        {/*End*/}
      </div>
    </section>
  );
}
