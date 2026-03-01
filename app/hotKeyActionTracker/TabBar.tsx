"use client";
import { useState, useEffect } from "react";
import { useDashboardInfo } from "@/store/useGlobalStore";

export default function TabBar() {
  //zustand
  const tabName = useDashboardInfo((state) => state.dashboardInfo);

  const [active, setActive] = useState(1);
  const [tabNumber, setTabNumber] = useState([0, 1]); //for viewing other tabs,i can make it into a function but it feels like over engineering
  const [maxTabs, setMaxTabs] = useState(0);

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
          const isActive = tab.id === active;
const tabCount = tab
          return (
            <section key={tab.id}>
              <div className="pr-">
                <button
                  key={tab.id}
                  onClick={() => setActive(tab.id)}
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
        <button className=" text-center my-auto">+</button>
        <button
          className=" text-center my-auto"
          onClick={() => setTabNumber((prev) => [prev[0] + 1, prev[1] + 1])}
          disabled={tabNumber[1] + maxTabs >= tabName.length}
        >
          &gt;{" "}
        </button>
      </div>
      <div className="w-full p-1 h-1 bg-indigo-500"></div>
    </div>
  );
}
