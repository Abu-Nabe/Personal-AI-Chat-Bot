import { create } from "zustand";

type Message = {
  role: "user" | "ai";
  content: string;
};

type MessageState = {
  messages: Message[];
  addMessage: (role: "user" | "ai", content: string) => void;
};

export const useMessageStore = create<MessageState>((set) => ({
  messages: [],
  addMessage: (role, content) =>
    set((state) => ({ messages: [...state.messages, { role, content }] })),
}));
