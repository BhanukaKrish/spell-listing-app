import React from "react";
import ItemRow from "../components/ItemRow/ItemRow";
import SearchBox from "../components/SearchBox/SearchBox";
import useAllSpells from "../hooks/useAllSpells";
import style from "./style.module.css";

function Home() {
  // * Get the search input value from the components.
  const [filterData, setFilterData] = React.useState("");

  // * Get the all spells from the api call. This is a custom hook.
  const allUserList = useAllSpells(filterData);

  return (
    <>
      {/* Search input box */}
      <SearchBox filterData={filterData} setFilterData={setFilterData} />
      <div className="container">
        <div className={style.main_box}>
          {/* Map the all spells to the ItemRow component. */}
          {allUserList.map((item) => (
            <ItemRow key={item.index} item={item} />
          ))}

          {/* Empty. */}
          {allUserList.length === 0 && (
            <div className={style.empty}>
              <p>No spells found.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
