import create from "zustand";
import { devtools, persist } from "zustand/middleware";

let faveStore = (set) => ({
  spellFave: [],

  setSpellFave: (spellFave) => {
    set((state) => ({ ...state, spellFave: spellFave }));
  },
});

faveStore = devtools(faveStore);
faveStore = persist(faveStore, { name: "z" });

export const useFaveStore = create(faveStore);
