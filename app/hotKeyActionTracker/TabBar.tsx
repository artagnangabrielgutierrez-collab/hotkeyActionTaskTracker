"use client";
import { useState, useEffect } from "react";
import {
  useDashboardInfo,
  useActiveTab,
  useIsOpen,
  useTabNumber,
  DashboardInfoType,
} from "@/store/useGlobalStore";
import { Award, Menu } from "lucide-react";

export default function TabBar() {
  const tabName = useDashboardInfo((state) => state.dashboardInfo);
  const setAddNewTab = useIsOpen((state) => state.setAddNewTab);
  const tabNumber = useTabNumber((state) => state.tabNumber);
  const setTabNumber = useTabNumber((state) => state.setTabNumber);
  const { activeTab, setActiveTab } = useActiveTab();
  const dashboardInfo = useDashboardInfo((state) => state.dashboardInfo);
  const isTabMenu = useIsOpen((state) => state.isTabMenu);
  const setIsTabMenu = useIsOpen((state) => state.setIsTabMenu);

  const [maxTabs, setMaxTabs] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    function update() {
      setMaxTabs(
        window.innerWidth >= 1536 ? 4 : window.innerWidth >= 1024 ? 2 : 0,
      );
      if (window.innerWidth <= 764) setIsMobile(true);
      else setIsMobile(false);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  function viewPrevTabs() {
    setTabNumber([tabNumber[0] - 1, tabNumber[1] - 1]);
    if (isMobile) setActiveTab(activeTab - 1);
  }

  function viewNextTabs() {
    setTabNumber([tabNumber[0] + 1, tabNumber[1] + 1]);
    if (isMobile) setActiveTab(activeTab + 1);
  }
  return (
    <>
      <section className="flex flex-col bg-[#13131f]  pt-3 flex-wrap ">
        <div className="flex flex-row gap- px-3 gap-4 flex-wrap">
          <button
            className=" text-center my-auto "
            onClick={() => viewPrevTabs()}
            disabled={tabNumber[0] <= 0}
          >
            &lt; {/* < */}
          </button>
          {tabName
            .slice(tabNumber[0], tabNumber[1] + maxTabs)
            .map((tab: { id: number; name: string }) => {
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
                    className={`w-full h-[0.40rem] ${isActive ? "bg-indigo-500" : ""}  z-1`}
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
            onClick={() => viewNextTabs()}
            disabled={tabNumber[1] + maxTabs >= tabName.length}
          >
            &gt; {/* > */}
          </button>
          <button
            className="text-center p-2 rounded-md hover:bg-white/10 transition-colors text-white/50"
            onClick={() => setIsTabMenu(!isTabMenu)}
          >
            <Menu /> {/* N: view other tasks with dropdown menu */}
          </button>
          {/*  */}
          <div className="flex flex-row items-center gap-2 ml-auto">
            <div className="flex flex-row items-center gap-2 ml-auto mb-3">
              {/* 
            <div className="flex items-center gap-1  px-2 py-1  rounded-lg border border-orange-500/30 bg-linear-to-r from-orange-500/20 to-yellow-500/20 hover:from-orange-500/30 hover:to-yellow-500/30 cursor-pointer transition-all">
              <Zap className="w-3 h-3  text-yellow-400" />
              <span className="text-xs  font-semibold text-orange-300">
                Achievements
              </span>
            </div> */}{" "}
              {/* Achievements,i might add it later */}
              <div className="flex items-center gap-1 px-2  py-1  rounded-lg border border-purple-500/30 bg-linear-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 transition-all ml-auto">
                <Award className="w-3 h-3  text-purple-400" />
                <span className="text-xs font-semibold text-purple-300">
                  Total
                </span>
              </div>
              <button
                onClick={() => {
                  localStorage.clear();
                  window.location.reload();
                }}
                className="flex items-center px-2 py-1 rounded-lg border border-red-500/40 bg-red-950/40 hover:bg-red-900/50 shadow-lg shadow-red-950/20 hover:shadow-red-500 transition-all duration-300 hover:border-red-400/60 active:scale-95"
              >
                <span className="text-xs font-semibold text-red-400 hover:text-red-300 tracking-wide">
                  Reset
                </span>
              </button>
            </div>
          </div>
          {/*  */}
        </div>

        <div className="w-full p-1 h-1 bg-indigo-500"></div>
      </section>
      {isTabMenu && (
        <div className="flex flex-col bg-black border border-white/10 overflow-hidden w-full right-0 bottom-auto z-15">
          <button
            className="absolute right-2  p-1.5 rounded-md text-white/40 hover:text-white/80 hover:bg-white/10 transition-colors text-xl font-medium"
            onClick={() => setIsTabMenu(false)}
          >
            ✕
          </button>
          {dashboardInfo.map((e: DashboardInfoType) => (
            <div
              key={e.id}
              className="px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/10 cursor-pointer border-b border-white/5 last:border-none transition-colors font-medium"
            >
              <span className="text-white/30 text-xs mr-2">{e.id}</span>
              {e.name}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
