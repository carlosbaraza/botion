import create from "zustand";

type Store = {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

export const useMainStore = create<Store>((set) => ({
  isModalOpen: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
}));
