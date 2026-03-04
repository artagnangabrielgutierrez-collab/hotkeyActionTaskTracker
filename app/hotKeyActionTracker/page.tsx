"use client";

import AddNewTab from "./AddNewTab";
import Box1 from "./Box1";
import Box2 from "./Box2";
import Box3 from "./Box3";
import Box4 from "./Box4";
import TabBar from "./TabBar";
import {
  useDashboardInfo,
  useActiveTab,
  useIsOpen,
} from "@/store/useGlobalStore";
export default function HotKeyActionTracker() {
  const dashboardInfo = useDashboardInfo((state) => state.dashboardInfo);

  const activeTab = useActiveTab((state) => state.activeTab);
  const isAddNewTab = useIsOpen((state) => state.isAddNewTab);

  console.log(dashboardInfo);

  return (
    <section className="min-h-[90vh] pb-6 ">
      {isAddNewTab && <AddNewTab />}

      <TabBar
        name={dashboardInfo.find((item) => item.id === activeTab)?.name}
      />
      <div className="grid grid-cols-2 grid-rows-3 gap-4 min-h-120 px-4 pt-4 xl:max-w-[75%] mx-auto pb-4 my-auto ">
        <div className="col-start-1 row-start-1 row-span-2">
          <Box1
            currentProgress={
              dashboardInfo.find((item) => item.id === activeTab)
                ?.currentProgress
            }
            maxProgress={
              dashboardInfo.find((item) => item.id === activeTab)?.maxProgress
            }
            activeTab={activeTab}
          />
        </div>
        <div className="col-start-2 row-start-1 row-span-3">
          <Box2 />
        </div>
        <div className="col-start-1 row-start-3 row-span-1 ">
          <Box3
            hotkey={dashboardInfo.find((item) => item.id === activeTab)?.hotkey}
          />
        </div>
      </div>
      <div className="col-start-1 col-span-2 row-start-6 row-span-6 px-4 xl:max-w-[75%] mx-auto">
        <Box4 />
      </div>
    </section>
  );
}
