import { create } from "zustand";

interface AppState {
  selectedOption: string;
  setSelectedOption: (option: string) => void;
  notes: string;
  setNotes: (notes: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  selectedOption: "",
  setSelectedOption: (option) => set({ selectedOption: option }),
  notes: "",
  setNotes: (notes) => set({ notes }),
}));
