//@ts-nocheck

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
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

  isTabMenu: false,
  setIsTabMenu: (value) => set({ isTabMenu: value }),
}));

export type DashboardInfoType = {
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
  dashboardInfo: DashboardInfoType[];
  setDashboardInfo: (newItem: DashboardItem) => void;
  increaseProgress: (updatedItem: DashboardInfoType) => void;
};
export const useDashboardInfo = create<useDashboardInfo>()(
  persist(
    (set) => ({
      dashboardInfo: [
        {
          id: 1,
          name: "Drink Water",
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
          description: "Drink water every 30 minutes, 8 cups total per day",
        },
        {
          id: 2,
          name: "Screen BreakTime",
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
          description:
            "Step away from the screen every hour for at least 5 minutes",
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
      updateDashboardItem: (updatedItem) =>
        set((state) => ({
          dashboardInfo: state.dashboardInfo.map((item) =>
            item.id === updatedItem.id ? { ...item, ...updatedItem } : item,
          ),
        })),
    }),
    {
      name: "dashboard-info",
      storage: createJSONStorage(() => typeof window !== 'undefined' ? localStorage : sessionStorage),
      skipHydration: true,
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

type useTabNumber = {
  tabNumber: number[];
  setTabNumber: (val: number[]) => void;
};

export const useTabNumber = create<useTabNumber>((set) => ({
  tabNumber: [0, 1],
  setTabNumber: (val) => set({ tabNumber: val }),
}));
