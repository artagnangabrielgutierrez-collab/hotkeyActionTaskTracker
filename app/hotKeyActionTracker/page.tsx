"use client";
import {
  useDashboardInfo,
  useActiveTab,
  useIsOpen,
  DashboardInfoType,
  useTabNumber,
} from "@/store/useGlobalStore";
import AddNewTab from "./DashboardThing/AddNewTab";
import TabBar from "./TabBar";
import EditHotkey from "./DashboardThing/EditHotkey";
import EditDescription from "./DashboardThing/EditDescription";
import DashbordCompiled from "./DashboardThing/DashbordCompiled";

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
    return null;
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

      <div className=" " data-dashboard="whole dashboard">
        <DashbordCompiled
          currentDashboardInfo={currentDashboardInfo}
          updateDashboardItem={updateDashboardItem}
          dashboardInfo={dashboardInfo}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setTabNumber={setTabNumber}
        />
      </div>
    </section>
  );
}
