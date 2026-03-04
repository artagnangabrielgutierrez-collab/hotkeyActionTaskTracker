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
  isMenuOpen: true,
  setMenuOpen: (value) => set({ isMenuOpen: value }),

  isAddNewTab: false,
  setAddNewTab: (value) => set({ isAddNewTab: value }),
}));

type DashboardInfo = {
  id: number;
  name: string;
  progress: number;
  currentHotkey: string;
  currentConfiguration: string;
};

type useDashboardInfo = {
  dashboardInfo: DashboardItem[];
  setDashboardInfo: (newItem: DashboardItem) => void;
  increaseProgress: (updatedItem: number) => void;
};
export const useDashboardInfo = create<useDashboardInfo>()(
  persist(
    (set) => ({
      dashboardInfo: [
        {
          id: 1,
          name: "Tracker 1",
          currentProgress: 2,
          maxProgress: 15,
          hotkey: "F+1",
        },
        {
          id: 2,
          name: "Tracker 2",
          currentProgress: 0,
          maxProgress: 45,
          hotkey: "F+2",
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
