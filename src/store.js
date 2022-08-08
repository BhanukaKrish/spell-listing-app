import create from "zustand";
import { devtools, persist } from "zustand/middleware";

// * Important: the persist middleware is used to persist the state in localStorage.
// * This is useful for offline usage.

let faveStore = (set) => ({
  spellFave: [],

  setSpellFave: (spellFave) => {
    set((state) => ({ ...state, spellFave: spellFave }));
  },
});

faveStore = devtools(faveStore);
faveStore = persist(faveStore, { name: "z" });

// * The store is exported as a singleton and can be imported anywhere.
export const useFaveStore = create(faveStore);
