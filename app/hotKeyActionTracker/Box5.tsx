import {
  useDashboardInfo,
  useActiveTab,
  useTabNumber,
  DashboardInfoType,
} from "@/store/useGlobalStore";

interface TaskCardProps {
  dashboardInfoItems: DashboardInfoType;
  setActiveTab: (val: number) => void;
  setTabNumber: any; //temp
}

function TaskCard({
  dashboardInfoItems,
  setActiveTab,
  setTabNumber,
}: TaskCardProps) {
  const { id, name, hotkey, currentProgress, maxProgress } = dashboardInfoItems;
  const tabNumber = useTabNumber((state) => state.tabNumber);
  const activeTab = useActiveTab((state) => state.activeTab);
  function switchTab() {
    setActiveTab(id);
    console.log(id);

    if (activeTab < id) {
      setTabNumber([tabNumber[0] + id - 1, tabNumber[1] + id - 1]);
    }
    if (activeTab > id) {
      setTabNumber([tabNumber[0] - id, tabNumber[1] - id]);
    }

    //N: improve (maybe) the condition later ,must be mobile only for the 2 if
  }

  return (
    <div
      className="flex flex-col gap-1 p-2 rounded-lg border border-[#1d4ed8]/50 bg-[#00040f]/50 
    hover:shadow-[0_4px_12px_2px_rgba(192,192,192,0.3),4px_0_8px_0px_rgba(192,192,192,0.15),-4px_0_8px_0px_rgba(192,192,192,0.15)]
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
        <span className="font-semibold text-[#60a5fa]">{currentProgress} / {maxProgress}</span>
      </div>
    </div>
  );
}

interface Box5Props {
  dashboardInfo: DashboardInfoType[];
  activeTab: number;
  setActiveTab: (val: number) => void;
  setTabNumber: any; //temp
}

export default function Box5({
  dashboardInfo,
  activeTab,
  setActiveTab,
  setTabNumber,
}: Box5Props) {
  return (
    <div
      className="group bg-[#00040f] border border-[#1d4ed8] rounded-lg text-[#bfdbfe] h-full hover:shadow-[0_4px_12px_2px_rgba(59,130,246,0.3),4px_0_8px_0px_rgba(59,130,246,0.15),-4px_0_8px_0px_rgba(59,130,246,0.15)]
transition-shadow duration-300"
    >
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
                  setTabNumber={setTabNumber}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
