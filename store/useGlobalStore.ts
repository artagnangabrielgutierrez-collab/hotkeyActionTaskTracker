//@ts-nocheck

import { create } from "zustand";
import { persist } from "zustand/middleware";
type useIsOpen = {
  isMenuOpen: boolean;
  setMenuOpen: (value: boolean) => void;

  isAddNewTab: boolean;
  setAddNewTab: (value: boolean) => void;
};

export const useIsOpen = create<useIsOpen>((set) => ({
  isMenuOpen: false,
  setMenuOpen: (value) => set({ isMenuOpen: value }),

  isAddNewTab: false,
  setAddNewTab: (value) => set({ isAddNewTab: value }),
}));

export type DashboardInfo = {
  id: number;
  name: string;
  currentProgress: number;
  maxProgress: number;
  totalCompletion: number;
  hotkey: string;
  completionHistoryDate: string[];
  completionAnimation: boolean;
};

type useDashboardInfo = {
  dashboardInfo: DashboardInfo[];
  setDashboardInfo: (newItem: DashboardItem) => void;
  increaseProgress: (updatedItem: DashboardInfo) => void;
};
export const useDashboardInfo = create<useDashboardInfo>()(
  persist(
    (set) => ({
      dashboardInfo: [
        {
          id: 1,
          name: "Tracker 1",
          currentProgress: 2,
          maxProgress: 3,
          totalCompletion: 0,
          hotkey: "F+1",
          completionHistoryDate: [
            { time: "1/2/3" },
            { time: "1/2/3" },
            { time: "1/2/3" },
            { time: "1/2/3" },
          ],
          completionAnimation: false,
        },
        {
          id: 2,
          name: "Tracker 2",
          currentProgress: 0,
          maxProgress: 5,
          totalCompletion: 0,
          hotkey: "F+2",
          completionHistoryDate: [
            { time: "1/2/3" },
            { time: "1/2/3" },
            { time: "1/2/3" },
            { time: "1/2/3" },
          ],
          completionAnimation: false,
        },
      ],
      setDashboardInfo: (newItem) =>
        set((state) => ({
          dashboardInfo: [...state.dashboardInfo, newItem],
        })),
      increaseProgress: (updatedItem) =>
        set((state) => ({
          dashboardInfo: state.dashboardInfo.map((item) =>
            item.id === updatedItem.id ? updatedItem : item,
          ),
        })),
    }),
    {
      name: "dashboard-info",
    },
  ),
);

type useActiveTab = {
  activeTab: number;
  setActiveTab: (val: number) => void;
};

export const useActiveTab = create<useActiveTab>((set) => ({
  activeTab: 1,
  setActiveTab: (val) => set({ activeTab: val }),
}));
