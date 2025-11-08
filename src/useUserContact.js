import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useUserContact = create(
  immer((set) => ({
    contacts: [],

    addContact: (contactData) =>
      set((state) => {
        state.contacts.unshift({
          id: Date.now(),
          ...contactData,
        });
      }),
      removeContact: (id) =>
        set((state) => {
          state.contacts = state.contacts.filter((c) => c.id !== id);
        }),

  }))
);
