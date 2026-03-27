//States and types

import { create } from "zustand";

import { persist, createJSONStorage } from "zustand/middleware";
type useIsOpen = {
  isMenuOpen: boolean;
  setMenuOpen: (value: boolean) => void;

  isAddNewTab: boolean;
  setAddNewTab: (value: boolean) => void;

  isTabMenu: boolean;
  setIsTabMenu: (value: boolean) => void;

  isHotkeyEdit: boolean;
  setIsHotkeyEdit: (value: boolean) => void;

  isDescriptionEdit: boolean;
  setIsDescriptionEdit: (value: boolean) => void;
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
  uniqueId: string;
  id: number; //For tracking tabs (animations, activeTab,etc)
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
  setDashboardInfo: (newItem: DashboardInfoType) => void;
  updateDashboardItem: (
    id: number,
    updates: Partial<DashboardInfoType>,
  ) => void;
  setNewTab: (newArr: DashboardInfoType[]) => void;
};

//N: Fix namings of functions
export const useDashboardInfo = create<useDashboardInfoType>()(
  persist(
    (set) => ({
      dashboardInfo: [
        {
          uniqueId: typeof crypto !== "undefined" ? crypto.randomUUID() : "",
          id: 1,
          name: "Sample",
          currentProgress: 1,
          maxProgress: 3,
          totalCompletion: 0,
          hotkey: "1Q",
          completionHistoryDate: [{ time: "3/15/2026, 12:51:59 PM" }],
          completionAnimation: false,
          description: "Sample description",
        },
        {
          uniqueId: typeof crypto !== "undefined" ? crypto.randomUUID() : "",
          id: 2,
          name: "Sample 2",
          currentProgress: 0,
          maxProgress: 10,
          totalCompletion: 0,
          hotkey: "1P",
          completionHistoryDate: [{ time: "3/15/2026, 12:51:59 PM" }],
          completionAnimation: false,
          description: "Sample description",
        },
        {
          uniqueId: typeof crypto !== "undefined" ? crypto.randomUUID() : "",
          id: 3,
          name: "Sample 3",
          currentProgress: 6,
          maxProgress: 7,
          totalCompletion: 4,
          hotkey: "1W",
          completionHistoryDate: [{ time: "3/15/2026, 12:51:59 PM" }],
          completionAnimation: false,
          description: "Sample description",
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
      setNewTab: (
        newArr, //used for deleting a tab
      ) =>
        set(() => ({
          dashboardInfo: newArr,
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

interface ProgressStore {
  currentProgress: number;
  maxProgress: number;
  decreaseMax: () => void;
  increaseMax: () => void;
  setInitialValue: (currentProgress: number, maxProgress: number) => void;
}

export const useProgress = create<ProgressStore>((set) => ({
  currentProgress: 0,
  maxProgress: 0,
  decreaseMax: () =>
    set((state) => {
      if (state.maxProgress <= 1) {
        window.alert("Max progress cannot go below 1.");
        return state;
      }
      if (state.currentProgress >= state.maxProgress - 1) {
        window.alert(
          "Max progress cannot be lower than or equal to the current progress.",
        );
        return state;
      }
      return { maxProgress: state.maxProgress - 1 };
    }),
  increaseMax: () =>
    set((state) => {
      if (state.currentProgress >= 99) {
        window.alert(
          "Cannot increase max progress when current progress is at the limit of 99.",
        );
        return state;
      }
      return { maxProgress: state.maxProgress + 1 };
    }),
  setInitialValue: (currentProgress: number, maxProgress: number) =>
    set({ currentProgress, maxProgress }),
}));

type useIsMobileType = {
  isMobile: boolean;
  setIsMobile: (val: boolean) => void;
};

export const useIsMobile = create<useIsMobileType>((set) => ({
  isMobile: false,
  setIsMobile: (val) => set({ isMobile: val }),
}));

type useSwitchTabType = {
  viewPrevTabs: () => void;
  viewNextTabs: () => void;
};

export const useSwitchTab = create<useSwitchTabType>(() => ({
  viewPrevTabs: () => {
    const { activeTab, setActiveTab } = useActiveTab.getState();
    const { tabNumber, setTabNumber } = useTabNumber.getState();
    const { isMobile } = useIsMobile.getState();
    const { dashboardInfo } = useDashboardInfo.getState();

    const prev = activeTab === 1 ? dashboardInfo.length : activeTab - 1;
    setActiveTab(prev);
    if (isMobile) setTabNumber([tabNumber[0] - 1, tabNumber[1] - 1]);
  },

  viewNextTabs: () => {
    const { activeTab, setActiveTab } = useActiveTab.getState();
    const { tabNumber, setTabNumber } = useTabNumber.getState();
    const { isMobile } = useIsMobile.getState();

    setActiveTab(activeTab + 1);
    if (isMobile) setTabNumber([tabNumber[0] + 1, tabNumber[1] + 1]);
  },
}));
