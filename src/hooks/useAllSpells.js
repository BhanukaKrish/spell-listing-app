import { useEffect, useState } from "react";
import Progress from "react-progress-2";
import { GetData } from "../apiService/GetData";
import { apis } from "../properties";

function useAllSpells(filterData) {
  const [state, setState] = useState([]);

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
    // eslint-disable-next-line
  }, [filterData]);
  return state;
}

export default useAllSpells;
