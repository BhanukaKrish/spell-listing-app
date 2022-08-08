import React from "react";
import ItemRow from "../components/ItemRow/ItemRow";
import { useFaveStore } from "../store";
import style from "./style.module.css";

function Favourite() {
  // * Get the favourite spells from the store.
  const spellFave = useFaveStore((state) => state.spellFave);

  return (
    <div className="container">
      <div className={style.main_box}>
        {spellFave?.map((item) => (
          // * Map the favourite spells to the ItemRow component.
          <ItemRow key={item.index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Favourite;
