import { create } from "zustand";

interface AppState {
  selectedOption: string;
  setSelectedOption: (option: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  selectedOption: "",
  setSelectedOption: (option) => set({ selectedOption: option }),
}));
