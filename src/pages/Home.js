import React from "react";
import ItemRow from "../components/ItemRow";
import SearchBox from "../components/SearchBox";
import useAllSpells from "../hooks/useAllSpells";
import style from "./style.module.css";

function Home() {
  const [filterData, setFilterData] = React.useState("");
  const allUserList = useAllSpells(filterData);

  return (
    <>
      <SearchBox filterData={filterData} setFilterData={setFilterData}/>
      <div className="container">
        <div className={style.main_box}>
          {allUserList.map((item) => (
            <ItemRow key={item.index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
