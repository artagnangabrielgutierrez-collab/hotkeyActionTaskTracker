"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import {
  DashboardInfoType,
  useDashboardInfoType,
  useIsOpen,
  useProgress,
} from "@/store/useGlobalStore";
type updateDashboardItem = useDashboardInfoType["updateDashboardItem"];

interface Box4Props {
  currentDashboardInfo: DashboardInfoType;
  updateDashboardItem: updateDashboardItem;
}

const btnCls =
  "p-1 rounded-lg border border-[#3b82f6]/50 text-[#93c5fd] transition-all bg-gradient-to-r from-[#1d4ed8]/20 to-[#2563eb]/20 hover:from-[#1d4ed8]/30 hover:to-[#2563eb]/30 hover:shadow-lg hover:shadow-[#3b82f6]/30";
const valueCls =
  "px-1.5 py-0.5 font-mono font-semibold text-[#eff6ff] rounded border border-[#1d4ed8]/50 bg-[#00040f]/70";

function SideArrow({
  value,
  leftArrowClick,
  rightArrowClick,
}: {
  value: number;
  leftArrowClick: () => void;
  rightArrowClick: () => void;
}) {
  return (
    <div
      className=" bg-[#000d1f] border border-[#1d4ed8] rounded-lg text-[#bfdbfe] p-3 flex flex-col text-center hover:shadow-[0_4px_12px_2px_rgba(192,192,192,0.3),4px_0_8px_0px_rgba(192,192,192,0.15),-4px_0_8px_0px_rgba(192,192,192,0.15)]
transition-shadow duration-300"
    >
      <div className="flex flex-row justify-center items-center gap-2 ">
        <button className={btnCls} onClick={leftArrowClick}>
          <ChevronLeft size={16} strokeWidth={2.5} />
        </button>
        <span className={valueCls}>{value}</span>
        <button className={btnCls} onClick={rightArrowClick}>
          <ChevronRight size={16} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}
interface State {
  currentProgress: number;
  maxProgress: number;
}

type Action =
  | { type: "DECREASE_CURRENT" }
  | { type: "INCREASE_CURRENT" }
  | { type: "DECREASE_MAX" }
  | { type: "INCREASE_MAX" };

export default function CurrentConfiguration({
  currentDashboardInfo,
  updateDashboardItem,
}: Box4Props) {
  const { id, name, description, currentProgress, maxProgress } =
    currentDashboardInfo;
  const {
    currentProgress: currentProgressStore,
    maxProgress: maxProgressStore,
    increaseMax,
    decreaseMax,
    setInitialValue,
  } = useProgress();
  const [quote, setQuote] = useState(undefined);

  async function getApi() {
    const res = await fetch("/api/TestingApi");
    const data = await res.json();
    setQuote(data);
  }

  useEffect(() => {
    getApi();
  }, []);

  useEffect(() => {
    setInterval(() => {
      getApi();
    }, 10000);
  }, []);

  const isMounted = useRef(false);

  useEffect(() => {
    setInitialValue(currentProgress, maxProgress);
  }, []);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    updateDashboardItem(id, {
      currentProgress: currentProgressStore,
      maxProgress: maxProgressStore,
    });
  }, [currentProgressStore, maxProgressStore]);

  const progressPercentage = Math.round(
    (currentProgressStore / maxProgressStore) * 100,
  );
  const isDescriptionEdit = useIsOpen((state) => state.isDescriptionEdit);
  const setIsDescriptionEdit = useIsOpen((state) => state.setIsDescriptionEdit);

  let motivationalQuote = undefined;

  if (progressPercentage <= 25) motivationalQuote = "Just getting started!";
  else if (progressPercentage <= 50) motivationalQuote = "Halfway there!";
  else if (progressPercentage <= 75) motivationalQuote = "Keep pushing!";
  else if (progressPercentage <= 99) motivationalQuote = "Almost there!";
  else motivationalQuote = "Finished!!!";

  function decreaseCurrent() {
    if (currentProgress - 1 < 0) {
      window.alert("Cant be lower than 0");
      return;
    }
    updateDashboardItem(id, {
      currentProgress: currentProgress - 1,
    });
  }

  function increaseCurrent() {
    if (currentProgress + 1 >= maxProgress) {
      window.alert('Max Reached, "Press Task Complete (+ 1)" instead');
      return;
    }
    updateDashboardItem(id, {
      currentProgress: currentProgress + 1,
    });
  }

  return (
    <div className=" h-0  ">
      <div className="bg-[#000d1f] border border-[#3b82f6] rounded-lg  flex flex-col group-hover:shadow-[0_4px_12px_2px_rgba(59,130,246,0.3),4px_0_8px_0px_rgba(59,130,246,0.15),-4px_0_8px_0px_rgba(59,130,246,0.15)] transition-shadow duration-300 text-sm p-3">
        <div className="pb-2 flex gap-2 justify-start items-center">
          <span className={`${valueCls} inline `}>{name}</span>
          <span className="text-xs">Current Configuration</span>
          <span className="ml-auto text-xs">{quote}</span>
        </div>

        <hr className="w-[99%] mx-auto border-[#3b82f6] mt-1" />

        <div className="bg-[#00040f] border border-[#1d4ed8] rounded-md p-4 mt-2 flex-1 w-full gap-4 pb-5 pt-4 flex flex-col overflow-auto">
          <div className="flex flex-row items-center gap-4 justify-start">
            <p className=" w-min  text-center">Current Progress</p>
            <SideArrow
              value={currentProgress}
              leftArrowClick={() => decreaseCurrent()}
              rightArrowClick={() => increaseCurrent()}
            />
            <div
              className="w-full p-1 rounded-sm bg-linear-to-r from-[#1e3a8a]/60 via-[#2563eb] to-[#3b82f6] border
             border-[#3b82f6]/30 shadow-[0_0_8px_rgba(59,130,246,0.4)] "
            >
              <span className="pl-[5%]">{motivationalQuote}</span>
            </div>
          </div>

          <div className="flex flex-row items-center gap-4 justify-end">
            <div className="flex flex-row items-center gap-4 justify-start w-full ">
              <div
                className="bg-[#000d1f] border border-[#1d4ed8] rounded-lg text-[#bfdbfe] p-3 flex flex-col text-center w-full hover:shadow-[0_4px_12px_2px_rgba(192,192,192,0.3),4px_0_8px_0px_rgba(192,192,192,0.15),-4px_0_8px_0px_rgba(192,192,192,0.15)]
transition-shadow duration-300 "
                onClick={() => setIsDescriptionEdit(true)}
              >
                <p className="text-xs line-clamp-2">{description}</p>
              </div>
            </div>

            <SideArrow
              value={maxProgressStore}
              leftArrowClick={() => decreaseMax()}
              rightArrowClick={() => increaseMax()}
            />
            <p className=" w-min text-center">Max Progress</p>
          </div>
        </div>
      </div>
    </div>
  );
}

//Notes Ignore
//this file current and max doesnt change when box 1 increases i need to move reducer in zustand
