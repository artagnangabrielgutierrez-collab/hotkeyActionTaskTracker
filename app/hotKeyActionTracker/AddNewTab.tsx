"use client";
import { useForm } from "react-hook-form";

type formInput = {
  id: number;
  name: string;
  currentProgress: number;
  maxProgress: number;
  currentHotkey: string;
};

export default function AddNewTab() {
  const { register, handleSubmit } = useForm<formInput>();

  function onSubmit(data: formInput) {
    const result = {
      id: Date.now(),
      name: data.name,
      currentProgress: Number(data.currentProgress),
      maxProgress: Number(data.maxProgress),
      currentHotkey: data.currentHotkey,
      currentConfiguration: {},
    };
    console.log(result);
  }

  return (
    <section className="w-full min-h-screen bg-transparent flex justify-center items-start pt-12">
      <div className="w-full max-w-md mx-4 rounded-xl border border-[#2a2d3e] bg-[#1a1b2e] shadow-2xl shadow-black/50">
        <div className="relative border-b border-[#2a2d3e] p-6">
          <h2 className="text-xl font-bold text-[#c0caf5]">Add New Tab</h2>
          <button className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-[#f7768e]/30 bg-[#f7768e]/10 text-[#f7768e] transition-all hover:bg-[#f7768e]/20">
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
              className="rounded-lg border border-[#2a2d3e] bg-[#13131f] px-4 py-2 text-[#c0caf5] outline-none"
            />
            <input
              {...register("currentProgress")}
              type="number"
              placeholder="Current Progress"
              className="rounded-lg border border-[#2a2d3e] bg-[#13131f] px-4 py-2 text-[#c0caf5] outline-none"
            />
            <input
              {...register("maxProgress")}
              type="number"
              placeholder="Max Progress"
              className="rounded-lg border border-[#2a2d3e] bg-[#13131f] px-4 py-2 text-[#c0caf5] outline-none"
            />
            <input
              {...register("currentHotkey")}
              placeholder="Current Hotkey (e.g. F+1)"
              className="rounded-lg border border-[#2a2d3e] bg-[#13131f] px-4 py-2 text-[#c0caf5] outline-none"
            />
            <button
              type="submit"
              className="rounded-lg bg-indigo-500 py-2 font-semibold text-white hover:bg-indigo-600"
            >
              Add Tab
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}