import { useEffect, useState } from "react";
import Progress from "react-progress-2";
import { GetData } from "../apiService/GetData";
import { apis } from "../properties";

function useSpellData(filterData) {
  const [state, setState] = useState([]);

  /**
   * Get the data from specific spell from the api call. This is a custom hook.
   * TODO - pass the filterData to the api call.
   * @param {string} filterData - spell index value.
   */
  
  useEffect(() => {
    const getData = () => {
      Progress.show();
      GetData(`${apis.ALL_SPELLS}/${filterData}`).then((result) => {
        let responseJson = result;
        setState(responseJson);
        Progress.hide();
      });
    };
    if (filterData) {
      getData();
    }
    // eslint-disable-next-line
  }, [filterData]);
  return state;
}

export default useSpellData;
