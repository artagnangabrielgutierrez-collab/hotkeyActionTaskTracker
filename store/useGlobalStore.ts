//@ts-nocheck

import { create } from "zustand";

type useIsOpen = {
  isMenuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
};

export const useIsOpen = create<useIsOpen>((set) => ({
  isMenuOpen: true,
  setMenuOpen: (value) => set({ isMenuOpen: value }),
}));

type DashboardInfo = {
  id: number;
  name: string;
  progress: number;
  currentHotkey: string;
  completionHistory: date[];
  currentConfiguration: string;
};

type DashboardStore = {
  dashboardInfo: DashboardItem[];
  setDashboardInfo: (updates: DashboardItem[]) => void;
};

export const useDashboardInfo = create<DashboardStore>((set) => ({
  dashboardInfo: [
    { id: 1, name: "Tracker 1", progress: 10, currentHotkey: "F+1", completionHistory: [1, 2, 3], currentConfiguration: {} },
    { id: 2, name: "Tracker 2", progress: 45, currentHotkey: "F+2", completionHistory: [4, 5], currentConfiguration: {} },
    { id: 3, name: "Tracker 3", progress: 70, currentHotkey: "F+3", completionHistory: [6], currentConfiguration: {} },
    { id: 4, name: "Tracker 4", progress: 20, currentHotkey: "F+4", completionHistory: [7, 8, 9], currentConfiguration: {} },
    { id: 5, name: "Tracker 5", progress: 90, currentHotkey: "F+5", completionHistory: [10], currentConfiguration: {} },
  ],
  setDashboardInfo: (updates) =>
    set((state) => ({
      dashboardInfo: { ...state.dashboardInfo, ...updates },
    })),
}));
