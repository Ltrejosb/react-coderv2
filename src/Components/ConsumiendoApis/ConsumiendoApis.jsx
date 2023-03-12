import { useEffect } from "react";

const ConsumiendoApis = () => {
  useEffect(() => {
    const getData = fetch("https://jsonplaceholder.typicode.com/posts");

    getData
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  }, []);

  return <div></div>;
};

export default ConsumiendoApis;
