//@ts-nocheck

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
type useIsOpen = {
  isMenuOpen: boolean;
  setMenuOpen: (value: boolean) => void;

  isAddNewTab: boolean;
  setAddNewTab: (value: boolean) => void;

  isTabMenu: boolean;
  setIsTabMenu: (value: boolean) => void;
};

export const useIsOpen = create<useIsOpen>((set) => ({
  isMenuOpen: false,
  setMenuOpen: (value) => set({ isMenuOpen: value }),

  isAddNewTab: false,
  setAddNewTab: (value) => set({ isAddNewTab: value }),

  isTabMenu: false,
  setIsTabMenu: (value) => set({ isTabMenu: value }),

  isHotkeyEdit: false,
  setIsHotkeyEdit: (value) => set({ isHotkeyEdit: value }),

  isDescriptionEdit: false,
  setIsDescriptionEdit: (value) => set({ isDescriptionEdit: value }),
}));

export type DashboardInfoType = {
  id: number;
  name: string;
  currentProgress: number;
  maxProgress: number;
  totalCompletion: number;
  hotkey: string;
  completionHistoryDate: Array<{ time: string }>;
  completionAnimation: boolean;
  description: string;
};

export type useDashboardInfoType = {
  dashboardInfo: DashboardInfoType[];
  setDashboardInfo: (newItem: DashboardItem) => void;
  updateDashboardItem: (
    id: number,
    updates: Partial<DashboardInfoType>,
  ) => void;
};

export const useDashboardInfo = create<useDashboardInfo>()(
  persist(
    (set) => ({
      dashboardInfo: [
        {
          id: 1,
          name: "Drink Water",
          currentProgress: 1,
          maxProgress: 3,
          totalCompletion: 0,
          hotkey: "Q",
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
          hotkey: "E",
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
        {
          id: 3,
          name: "Walk for 5 minutes",
          currentProgress: 0,
          maxProgress: 3,
          totalCompletion: 0,
          hotkey: "W",
          completionHistoryDate: [
            { time: "1/2/3" },
            { time: "1/2/3" },
            { time: "1/2/3" },
            { time: "1/2/3" },
          ],
          completionAnimation: false,
          description: "Walk for 5 minutes per 1 hour",
        },
      ],
      setDashboardInfo: (
        newItem, //for adding new tab only
      ) =>
        set((state) => ({
          dashboardInfo: [...state.dashboardInfo, newItem],
        })),
      updateDashboardItem: (id, updates) =>
        set((state) => ({
          dashboardInfo: state.dashboardInfo.map((item) =>
            item.id === id ? { ...item, ...updates } : item,
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

type useTabNumberProps = {
  tabNumber: number[];
  setTabNumber: (val: number[]) => void;
};

export const useTabNumber = create<useTabNumberProps>((set) => ({
  tabNumber: [0, 1],
  setTabNumber: (val) => set({ tabNumber: val }),
}));
