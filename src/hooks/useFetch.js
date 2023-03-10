import { useState, useEffect } from "react";

const useFetch = (url, options = { method: "GET" }) => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => setError(error));
  }, []);
  return [data, error];
};

export default useFetch;
