import { useEffect, useState } from "react";
import Progress from "react-progress-2";
import { GetData } from "../apiService/GetData";
import { apis } from "../properties";

function useSpellData(filterData) {
  const [state, setState] = useState([]);

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
