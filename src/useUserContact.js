import { create } from "zustand";

export const useUserContact = create((set) => ({
    contacts: [],
    addContact: (data) =>
        set((state) => ({ contacts: [{ id: Date.now(), ...data }, ...state.contacts] })),
    removeContact: (id) =>
        set((state) => ({ contacts: state.contacts.filter((c) => c.id !== id) })),
}));
