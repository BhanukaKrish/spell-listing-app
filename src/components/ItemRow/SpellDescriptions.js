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
      {spellData && spellData.higher_level && spellData.higher_level.length > 0 &&  (
        <>
          <h2>Higher Level</h2>
          {spellData.higher_level?.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </>
      )}

      {spellData && (
        <div className={style.tagRow}>
          <div className={style.tagBox}>Range : {spellData?.range}</div>
          <div className={style.tagBox}>Material : {spellData?.material}</div>
          <div className={style.tagBox}>Duration : {spellData?.duration}</div>
          <div className={style.tagBox}>
            Casting Time : {spellData?.casting_time}
          </div>
          <div className={style.tagBox}>Level : {spellData?.level}</div>
          <div className={style.tagBox}>
            Attack Type : {spellData?.attack_type}
          </div>
          <div className={style.tagBox}>School : {spellData?.school?.name}</div>
          <div className={style.tagBox}>
            Classes :
            {spellData?.classes?.map((item, index) => (
              <p key={index}>{item.name}</p>
            ))}
          </div>
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
