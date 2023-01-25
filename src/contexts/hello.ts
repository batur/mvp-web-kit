import { create } from "zustand";

interface HelloState {
  text: string;
  setText: (text: string) => void;
}

const useHelloStore = create<HelloState>((set) => ({
  text: "Hello World",
  setText: (text: string) => set({ text }),
}));

export default useHelloStore;
