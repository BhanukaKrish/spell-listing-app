import React from "react";
import ItemRow from "../components/ItemRow";
import { useFaveStore } from "../store";
import style from "./style.module.css";

function Favourite() {
  const spellFave = useFaveStore((state) => state.spellFave);

  return (
    <div className="container">
      <div className={style.main_box}>
        {spellFave?.map((item) => (
          <ItemRow key={item.index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Favourite;
