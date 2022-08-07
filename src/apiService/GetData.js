import axios from "axios";
import Progress from "react-progress-2";

export function GetData(url) {
  const headers = {
    "Content-Type": "application/json",
  };

  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        headers: headers,
      })
      .then((response) => {
        if (response.status === 200 && response.statusText === "OK") {
          resolve(response.data);
        } else if (response.status === "error") {
          // message.error(response.message);
        }
      })
      .catch((error) => {
        Progress.hide();
        if (error.response.status === 422) {
          const errors = error.response.data.errors;
          errors.forEach(error => {
            // message.error(error.detail);
          });
        } else {
          // message.error(error.response.data.message);
        }
        reject(error);
      });
  });
}
