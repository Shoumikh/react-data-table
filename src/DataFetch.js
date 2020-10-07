import React, { useEffect } from "react";
import axios from "axios";
import { useStateValue } from "./StateProvider";

function DataFetch() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res);
        dispatch({
          type: "FETCH_DATA",
          user: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {user?.map((i) => {
        console.log("ee leeeeeeee>> " + i.username);
      })}
    </div>
  );
}

export default DataFetch;
