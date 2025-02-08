import { create } from "zustand";

type MessageState = {
  messages: string[];
  addMessage: (message: string) => void;
};

export const useMessageStore = create<MessageState>((set) => ({
  messages: [],
  addMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
}));
