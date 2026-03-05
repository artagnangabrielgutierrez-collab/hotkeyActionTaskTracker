"use client";
import { useForm } from "react-hook-form";
import { useDashboardInfo, useIsOpen } from "@/store/useGlobalStore";
type formInput = {
  id: number;
  name: string;
  maxProgress: number;
  hotkey: string;
};

export default function AddNewTab() {
  const setAddNewTab = useIsOpen((state) => state.setAddNewTab);

  const { register, handleSubmit, reset } = useForm<formInput>();
  const setDashboardInfo = useDashboardInfo((state) => state.setDashboardInfo);
  function onSubmit(data: formInput) {
    const result = {
      id: Date.now(),
      name: data.name,
      maxProgress: Number(data.maxProgress),
      hotkey: data.hotkey || "None",
      currentConfiguration: {},
    };
    setDashboardInfo(result);
    reset();
  }

  return (
    <section className="w-full min-h-[94vh]  bg-transparent flex justify-center items-start absolute pt-40 z-15">
      <div className="w-full max-w-2xl mx-4 rounded-xl border border-[#1e293b] bg-[#0f172a] shadow-2xl shadow-black/50  ">
        <div className="relative border-b border-[#1e293b] p-6">
          <h2 className="text-xl font-bold text-slate-100">Add New Tab</h2>
          <button
            className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-red-400/30
           bg-red-400/10 text-red-400 transition-all hover:bg-red-400/20"
            onClick={() => setAddNewTab(false)}
          >
            ×
          </button>
        </div>

        <div className="p-6">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <input
              {...register("name")}
              placeholder="Name"
              className="rounded-lg border border-[#334155] bg-[#020617] px-4 py-2 text-slate-100 outline-none"
            />

            <input
              {...register("maxProgress")}
              type="number"
              placeholder="Number of completions required(eg 10)"
              className="rounded-lg border border-[#334155] bg-[#020617] px-4 py-2 text-slate-100 outline-none"
            />
            <div className="flex flex-row w-full items-center gap-2">
              <input
                {...register("hotkey")}
                placeholder="First Hotkey (e.g. F)"
                className="rounded-lg border border-[#334155] bg-[#020617] px-4 py-2 text-slate-100 outline-none w-full"
              />
              <span className="text-slate-100 font-bold">+</span>
              <input
                {...register("hotkey")}
                placeholder="Second Hotkey (e.g. 1)"
                className="rounded-lg border border-[#334155] bg-[#020617] px-4 py-2 text-slate-100 outline-none w-full"
              />
              <span className="text-slate-400 text-[0.75rem] whitespace-nowrap">
                Final hotkey combination <br />
                <span className="text-lg  block text-center">xx</span>
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
