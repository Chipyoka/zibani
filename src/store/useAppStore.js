import { create } from "zustand";

export const useAppStore = create((set) => ({
  currentTown: null,
  audioUrl: null,
  isPlaying: false,

  setTown: (town) => set({ currentTown: town }),
  setAudioUrl: (url) => set({ audioUrl: url }),
  setIsPlaying: (status) => set({ isPlaying: status }),
}));
