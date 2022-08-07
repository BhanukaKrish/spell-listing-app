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
        <div
          className={style.search_btn}
          onClick={() => setFilterData(filterData)}
        >
          <BsSearch />
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
