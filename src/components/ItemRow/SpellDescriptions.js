import React from "react";
import style from "./style.module.css";

const SpellDescriptions = ({ spellData }) => {
  return (
    <div className={style.expandBox}>
      {/* Spell description  */}
      <h2>Description</h2>
      {spellData &&
        spellData.desc?.map((item, index) => <p key={index}>{item}</p>)}

      {/* Spell Higher Level  */}
      {spellData &&
        spellData.higher_level &&
        spellData.higher_level.length > 0 && (
          <>
            <h2>Higher Level</h2>
            {spellData.higher_level?.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </>
        )}
      {/* Spell key tags  */}
      {spellData && (
        <div className={style.tagRow}>
          {/* Range */}
          <div className={style.tagBox}>Range : {spellData?.range}</div>

          {/* Material */}
          <div className={style.tagBox}>Material : {spellData?.material}</div>

          {/* Duration */}
          <div className={style.tagBox}>Duration : {spellData?.duration}</div>

          {/* Casting Time */}
          <div className={style.tagBox}>
            Casting Time : {spellData?.casting_time}
          </div>

          {/* Level */}
          <div className={style.tagBox}>Level : {spellData?.level}</div>

          {/* Attack Type */}
          <div className={style.tagBox}>
            Attack Type : {spellData?.attack_type}
          </div>

          {/* Spell School */}
          <div className={style.tagBox}>School : {spellData?.school?.name}</div>

          {/* Spell Classes */}
          <div className={style.tagBox}>
            Classes :
            {spellData?.classes?.map((item, index) => (
              <p key={index}>{item.name}</p>
            ))}
          </div>

          {/* Spell Subclasses */}
          <div className={style.tagBox}>
            Sub Classes :
            {spellData?.subclasses?.map((item, index) => (
              <p key={index}>{item.name}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SpellDescriptions;
