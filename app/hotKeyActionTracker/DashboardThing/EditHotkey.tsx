"use client";
import { useState } from "react";
import { useIsOpen, DashboardInfoType, useDashboardInfoType } from "@/store/useGlobalStore";

type EditHotkeyProps = {
  currentDashboardInfo: DashboardInfoType;
  updateDashboardItem: useDashboardInfoType["updateDashboardItem"];
};
export default function EditHotkey({
  currentDashboardInfo,
  updateDashboardItem,
}: EditHotkeyProps) {
  const { id } = currentDashboardInfo;
  const setIsHotkeyEdit = useIsOpen((state) => state.setIsHotkeyEdit);
  const [newhotkeyValue, setNewhotkeyValue] = useState("");

  function updateHotkey() {
    updateDashboardItem(id, { hotkey: newhotkeyValue });
    setIsHotkeyEdit(false);
  }

  return (
    <section className="w-full min-h-[94vh] bg-transparent flex justify-center items-start absolute pt-40 z-15">
      <div className="w-full max-w-2xl mx-4 rounded-xl border border-[#1e293b] bg-[#0f172a] shadow-2xl shadow-black/50">
        <div className="relative border-b border-[#1e293b] p-6">
          <h2 className="text-xl font-bold text-slate-100">Edit hotkey</h2>
          <button
            className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border
           border-red-400/30 bg-red-400/10 text-red-400 transition-all hover:bg-red-400/20"
            onClick={() => setIsHotkeyEdit(false)}
          >
            ×
          </button>
        </div>

        <div className="p-6 flex flex-col gap-4">
          <input
            value={newhotkeyValue}
            onChange={(e) => setNewhotkeyValue(e.target.value)}
            placeholder="Name"
            className="rounded-lg border border-[#334155] bg-[#020617] px-4 py-2 text-slate-100 outline-none"
          />
          <button
            className="rounded-lg bg-blue-600 py-2 font-semibold text-white hover:bg-blue-700"
            onClick={() => updateHotkey()}
          >
            Edit Hotkey
          </button>
        </div>
      </div>
    </section>
  );
}
