import React from "react";
import style from "./style.module.css";
import { BsSearch } from "react-icons/bs";

function SearchBox({ filterData, setFilterData }) {
  return (
    <div className="container">
      <div className={style.searchBox}>
        <input
          type="text"
          placeholder="Search here..."
          value={filterData}
          onChange={(e) => setFilterData(e.target.value)}
        />
        <button type="button" value="Search" className={style.search_btn}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
}

export default SearchBox;
