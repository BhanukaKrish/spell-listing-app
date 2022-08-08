import React, { useState } from "react";
import style from "./style.module.css";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import useSpellData from "../../hooks/useSpellData";
import SpellDescriptions from "./SpellDescriptions";
import { useFaveStore } from "../../store";

function ItemRow({ item }) {
  // * Get the favourite spells from the store.
  const setSpellFave = useFaveStore((state) => state.setSpellFave);
  const spellFave = useFaveStore((state) => state.spellFave);

  const [show, setShow] = useState(false);
  const [selectedSpell, setSelectedSpell] = useState(null);
  const getSpellData = useSpellData(selectedSpell);

  /**
   * Toggle the show/hide state of the spell description.
   * @param {string} spell - spell index value.
   * @param {string} flag - show/hide flag.
   */
  const handleShow = (spell, flag) => {
    setSelectedSpell(spell);
    setShow(flag);
  };

  /**
   * Toggle the favourite spell.
   * @param {string} spell - The spell object.
   */
  const handleFavorite = (spell) => {
    const fave = [...spellFave];
    if (fave.filter((item) => item.index === spell.index).length > 0) {
      fave.splice(fave.indexOf(spell), 1);
    } else {
      fave.push(spell);
    }
    setSpellFave(fave);
  };

  return (
    <>
      <div className={style.box}>
        <p>{item.name}</p>
        <div className={style.box_btn}>
          {spellFave.find((faveItem) => faveItem.index === item.index) ? (
            <div className={style.faveBtn} onClick={() => handleFavorite(item)}>
              <MdFavorite />
            </div>
          ) : (
            <div className={style.faveBtn} onClick={() => handleFavorite(item)}>
              <MdFavoriteBorder />
            </div>
          )}
          
          {show ? (
            <div
              className={style.expandBtn}
              onClick={() => handleShow(null, false)}
            >
              <IoIosArrowUp />
            </div>
          ) : (
            <div
              className={style.expandBtn}
              onClick={() => handleShow(item.index, true)}
            >
              <IoIosArrowDown />
            </div>
          )}
        </div>
      </div>
      {show && <SpellDescriptions spellData={getSpellData} />}
    </>
  );
}

export default ItemRow;
