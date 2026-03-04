"use client";
import { useState, useEffect } from "react";
import {
  useDashboardInfo,
  useActiveTab,
  useIsOpen,
} from "@/store/useGlobalStore";

interface TabBarprops {
  name: string;
}

export default function TabBar({ name }: TabBarprops) {
  const tabName = useDashboardInfo((state) => state.dashboardInfo);
  const setAddNewTab = useIsOpen((state) => state.setAddNewTab);

  const { activeTab, setActiveTab } = useActiveTab();
  const [tabNumber, setTabNumber] = useState([0, 1]);
  const [maxTabs, setMaxTabs] = useState(0);
  console.log(name);
  useEffect(() => {
    function update() {
      setMaxTabs(
        window.innerWidth >= 1536 ? 4 : window.innerWidth >= 1024 ? 2 : 0,
      );
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return (
    <div className="flex flex-col bg-[#13131f] pt-3">
      <div className="flex flex-row gap- px-3 gap-4">
        <button
          className=" text-center my-auto "
          onClick={() => setTabNumber((prev) => [prev[0] - 1, prev[1] - 1])}
          disabled={tabNumber[0] <= 0}
        >
          &lt;{" "}
        </button>
        {tabName.slice(tabNumber[0], tabNumber[1] + maxTabs).map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <section key={tab.id}>
              <div className="pr-">
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  data-active={isActive}
                  className="relative flex items-center gap-1 px-4 py-2   transition-all duration-200 rounded-t-md cursor-pointer border-none
               bg-slate-900 text-slate-500 hover:text-slate-300 data-[active=true]:bg-slate-800 data-[active=true]:text-slate-100 w-35"
                >
                  {/*<span className=" opacity-70">{tab.icon}</span>*/}
                  <span className="font-medium truncate">{tab.name}</span>
                </button>
              </div>
              <div
                className={`w-full h-[0.40rem] ${isActive ? "bg-indigo-500" : ""} rounded-t-2xl z-1`}
              />
            </section>
          );
        })}
        <button
          className=" text-center my-auto"
          onClick={() => setAddNewTab(true)}
        >
          +
        </button>
        <button
          className=" text-center my-auto"
          onClick={() => setTabNumber((prev) => [prev[0] + 1, prev[1] + 1])}
          disabled={tabNumber[1] + maxTabs >= tabName.length}
        >
          &gt;{" "}
        </button>
        <button
  onClick={() => {
    localStorage.clear();
    window.location.reload();
  }}
  className="rounded-lg border border-red-500/40 bg-red-950/40 hover:bg-red-900/50 shadow-lg shadow-red-950/20
   hover:shadow-red-500 w-15 h-9 ml-auto transition-all duration-300 hover:border-red-400/60 active:scale-95"
>
  <span className=" text-sm font-semibold text-red-400 hover:text-red-300 tracking-wide">
    Reset
  </span>
</button>
      </div>

      <div className="w-full p-1 h-1 bg-indigo-500"></div>
    </div>
  );
}
