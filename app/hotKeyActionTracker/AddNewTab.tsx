"use client";
import { useForm } from "react-hook-form";
import { useIsOpen } from "@/store/useGlobalStore";
import { DashboardInfoType } from "@/store/useGlobalStore";

type AddNewTabProps = {
  dashboardInfo: DashboardInfoType[];
  setDashboardInfo: (val: DashboardInfoType) => void;
};

type formInput = {
  name: string;
  maxProgress: number;
  hotkey1: string;
  hotkey2: string;
  description: string;
};

const PLACEHOLDER_DATA = {
  name: "Screen BreakTime",
  description: "Step away from the screen every hour for at least 5 minutes",
  maxProgress: 5,
  hotkey1: "2",
  hotkey2: "F",
};

export default function AddNewTab({
  dashboardInfo,
  setDashboardInfo,
}: AddNewTabProps) {
  const setAddNewTab = useIsOpen((state) => state.setAddNewTab);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<formInput>();

  const hotkey1 = watch("hotkey1");
  const hotkey2 = watch("hotkey2");

  function fillPlaceholder() {
    Object.entries(PLACEHOLDER_DATA).forEach(([key, val]) =>
      setValue(key as keyof formInput, val, { shouldValidate: true }),
    );
  }

  function onSubmit(data: formInput) {
    const result = {
      uniqueId: crypto.randomUUID(),
      id: dashboardInfo.length + 1,
      name: data.name,
      currentProgress: 0,
      maxProgress: Number(data.maxProgress),
      totalCompletion: 0,
      hotkey: `${data.hotkey1}${data.hotkey2}`,
      completionHistoryDate: [],
      completionAnimation: false,
      description: data.description,
    };
    setDashboardInfo(result);
    reset();
    console.log(dashboardInfo)
  }

  const errorClass = "border-red-500 shadow-[0_0_0_2px_rgba(239,68,68,0.3)]";

  return (
    <section className="w-full min-h-[94vh] bg-transparent flex justify-center items-start absolute pt-40 z-15">
      <div className="w-full max-w-2xl mx-4 rounded-xl border border-[#1e293b] bg-[#0f172a] shadow-2xl shadow-black/50">
        <div className="relative border-b border-[#1e293b] p-6">
          <h2 className="text-xl font-bold text-slate-100">Add New Tab</h2>
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <button
              type="button"
              onClick={fillPlaceholder}
              className="flex items-center gap-1.5 px-3 h-8 rounded-full border border-slate-600/50 bg-slate-700/40 text-slate-300 text-xs font-medium transition-all hover:bg-slate-700 hover:text-slate-100"
            >
              <span>Fill Placeholder</span>
            </button>
            <button
              className="flex h-8 w-8 items-center justify-center rounded-full border border-red-400/30 bg-red-400/10 text-red-400 transition-all hover:bg-red-400/20"
              onClick={() => setAddNewTab(false)}
            >
              ×
            </button>
          </div>
        </div>

        <div className="p-6">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <input
              {...register("name", { required: true })}
              placeholder="Name"
              className={`rounded-lg border border-[#334155] bg-[#020617] px-4 py-2 text-slate-100 outline-none ${errors.name ? errorClass : ""}`}
            />
            <input
              {...register("description", { required: true })}
              placeholder="Description"
              className={`rounded-lg border border-[#334155] bg-[#020617] px-4 py-2 text-slate-100 outline-none ${errors.description ? errorClass : ""}`}
            />
            <div className="flex flex-row w-full gap-3">
              <label htmlFor="maxProgress" className="text-xs text-center">
                Max progress to complete
              </label>
              <input
                {...register("maxProgress", { required: true })}
                type="number"
                placeholder="(e.g. 5)"
                onKeyDown={(e) =>
                  ["ArrowUp", "ArrowDown"].includes(e.key) && e.preventDefault()
                }
                className={`rounded-lg border border-[#334155] bg-[#020617] px-4 py-2 text-slate-100 outline-none w-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ${errors.maxProgress ? errorClass : ""}`}
              />
            </div>
            <p className="text-slate-400 text-sm text-center">
              Hotkey combination (one Number + one Letter)
            </p>
            <div className="flex flex-row w-full items-center gap-2">
              <input
                {...register("hotkey1", {
                  required: true,
                  maxLength: 1,
                  pattern: /^[1-9]$/,
                })}
                placeholder="Number"
                maxLength={1}
                onKeyDown={(e) => {
                  if (
                    !/^[1-9]$/.test(e.key) &&
                    !["Backspace", "Delete", "Tab"].includes(e.key)
                  ) {
                    e.preventDefault();
                  }
                }}
                className={`rounded-lg border border-[#334155] bg-[#020617] px-4 py-2 text-slate-100 outline-none w-full ${errors.hotkey1 ? errorClass : ""}`}
              />
              <span className="text-slate-100 font-bold">+</span>
              <input
                {...register("hotkey2", { required: true, maxLength: 1 })}
                placeholder="Letter"
                maxLength={1}
                className={`rounded-lg border border-[#334155] bg-[#020617] px-4 py-2 text-slate-100 outline-none w-full ${errors.hotkey2 ? errorClass : ""}`}
              />
              <span className="text-slate-400 text-[0.75rem] whitespace-nowrap">
                Final hotkey combination <br />
                <span className="text-lg block text-center">
                  {hotkey1 && hotkey2 ? `${hotkey1}+${hotkey2}` : "xx"}
                </span>
              </span>
            </div>

            <button
              type="submit"
              className="rounded-lg bg-blue-600 py-2 font-semibold text-white hover:bg-blue-700"
            >
              Add Tab
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
