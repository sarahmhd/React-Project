import { useEffect, useState } from "react";

import axios from "axios";

const UseAxios = (url, query = "") => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [searchVal, setSearchVal] = useState(query);

  useEffect(() => {
    // setIsLoading(true);
    // axios
    //   .get(url)
    //   .then((res) => {
    //     setIsLoading(false);
    //     setTotalPages(res.data.total_pages);
    //     setData(res.data.results);
    //     setSearchVal(query);
    //   })
    //   .catch((err) => {
    //     setError(err.message);
    //     search(url);
    //   });
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(url, {
          params: { query: searchVal }, // Include search query as a parameter
        });

        setTotalPages(res.data.total_pages);
        setData(res.data.results);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, query]);

  const search = (url) => {
    axios.get(url).then((res) => setData(res.data.results));
  };

  return {
    data,
    isLoading,
    error,
    totalPages,
    search,
    setData,
  };
};

export default UseAxios;
