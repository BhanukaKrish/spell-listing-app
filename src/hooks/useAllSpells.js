import { useEffect, useState } from "react";
import Progress from "react-progress-2";
import { GetData } from "../apiService/GetData";
import { apis } from "../properties";

function useAllSpells(filterData) {
  const [state, setState] = useState([]);

  /**
   * Get the all spells from the api call. This is a custom hook.
   * TODO - pass the filterData to the api call.
   * @param {string} filterData - The search input value.
   */

  useEffect(() => {
    const getData = () => {
      Progress.show();
      GetData(`${apis.ALL_SPELLS}?name=${filterData}`).then((result) => {
        let responseJson = result;
        setState(responseJson.results);
        Progress.hide();
      });
    };
    getData();
  }, [filterData]);
  return state;
}

export default useAllSpells;
