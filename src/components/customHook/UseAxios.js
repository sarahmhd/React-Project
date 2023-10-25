import { useEffect, useState } from "react";

import axios from "axios";

const UseAxios = (url, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        setIsLoading(false);
        setTotalPages(res.data.total_pages);
        setData(res.data.results);
        setSearchVal(query);
      })
      .catch((err) => {
        setError(err.message);
        search(url);
      });
  }, [url, query]);

  const search = (url) => {
    axios.get(url).then((res) => setData(res.data.results));
  };
  return {
    data,
    isLoading,
    error,
    totalPages,
    searchVal,
    search,
  };
};

export default UseAxios;
