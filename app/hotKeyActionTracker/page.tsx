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

  const isAddNewTab = useIsOpen((state) => state.isAddNewTab);
  const setTabNumber = useTabNumber((state) => state.setTabNumber);
  
  return (
    <section className="min-h-[90vh] pb-6 ">
      {isAddNewTab && <AddNewTab dashboardInfo={dashboardInfo} setDashboardInfo={setDashboardInfo}/>}

      <TabBar />
      <div className="grid grid-cols-2 grid-rows-3 gap-4 h-90 md:h-110 px-4 pt-4 xl:max-w-[75%] mx-auto pb-4 my-auto ">
        {" "}
        {/* "h" controls Grid sizing  */}
        <div className="col-start-1 row-start-1 row-span-2">
          <Box1
            currentDashboardInfo={currentDashboardInfo}
            updateDashboardItem={updateDashboardItem}
          />
        </div>
        <div className="col-start-2 row-start-1 row-span-4 md:row-span-1">
          <Box2 currentDashboardInfo={currentDashboardInfo} />
        </div>
        <div className="col-start-2 row-start-2 row-span-3 hidden md:block">
          <Box5
            dashboardInfo={dashboardInfo}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            setTabNumber={setTabNumber}
            
          />
        </div>
        <div className="col-start-1 row-start-3 row-span-2 ">
          <Box3 hotkey={currentDashboardInfo?.hotkey!} />
        </div>
      </div>
      <div className="col-start-1 col-span-2 row-start-6 row-span-6 px-4 xl:max-w-[75%] mx-auto">
        <Box4
          currentDashboardInfo={currentDashboardInfo}
          updateDashboardItem={updateDashboardItem}
        />
        <div className="col-start-2 row-start-2 row-span-3  md:hidden pt-4">
          <Box5
            dashboardInfo={dashboardInfo}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            setTabNumber={setTabNumber}
          />
        </div>
      </div>
    </section>
  );
}
