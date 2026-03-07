import {
  useDashboardInfo,
  useActiveTab,
  useTabNumber,
  DashboardInfoType,
} from "@/store/useGlobalStore";

interface Box5Props {
  dashboardInfoItems: DashboardInfoType;
}

function TaskCard({
  dashboardInfoItems,
  setActiveTab,
  tabNumber,
  setTabNumber,
}: Box5Props) {
  const { id, name, hotkey, totalCompletion, completionAnimation } =
    dashboardInfoItems;
  function switchTab() {
    setActiveTab(id);
    setTabNumber([id - 1, id]);
    console.log(tabNumber);
  }

  return (
    <div
      className="flex flex-col gap-1 p-2 rounded-lg border border-[#1d4ed8]/50 bg-[#00040f]/50 
     hover:shadow-[0_4px_12px_2px_rgba(59,130,246,0.3),4px_0_8px_0px_rgba(59,130,246,0.15),-4px_0_8px_0px_rgba(59,130,246,0.15)] 
     transition-shadow duration-300"
      onClick={() => switchTab()}
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
        <span className="font-semibold text-[#60a5fa]">{totalCompletion}</span>
      </div>
    </div>
  );
}

export default function Box5() {
  const dashboardInfo = useDashboardInfo((state) => state.dashboardInfo);
  const activeTab = useActiveTab((state) => state.activeTab);
  const setActiveTab = useActiveTab((state) => state.setActiveTab);
  const tabNumber = useTabNumber((state) => state.tabNumber);
  const setTabNumber = useTabNumber((state) => state.setTabNumber);

  return (
    <div className="group bg-[#00040f] border border-[#1d4ed8] rounded-lg text-[#bfdbfe] h-full">
      <div
        className={`bg-[#000d1f] border border-[#3b82f6] rounded-lg w-full h-full flex flex-col text-sm p-4 `}
      >
        <h1 className="pb-2 text-sm text-[#93c5fd] uppercase tracking-wide border-b border-[#3b82f6]/40">
          Other Tasks List
        </h1>
        <div className="mt-2 flex-1 w-full ">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-">
            {dashboardInfo
              .filter((e) => e.id != activeTab)
              .map((e, i) => (
                <TaskCard
                  key={e.id}
                  dashboardInfoItems={e}
                  setActiveTab={setActiveTab}
                  tabNumber={tabNumber}
                  setTabNumber={setTabNumber}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
