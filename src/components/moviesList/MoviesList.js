import "./moviesList.sass";

import React, { useEffect, useState } from "react";

import Loader from "../loader/Loader";
import MovieCard from "../movieCard/MovieCard";
import { Pagination } from "@mui/material";
import SearchForm from "../searchForm/SearchForm";
import UseAxios from "../customHook/UseAxios";

const MoviesList = () => {
  const [page, setPage] = useState(1);
  let mediaType = [];

  const {
    data: moviesData,
    isLoading,
    totalPages,
    search,
  } = UseAxios(
    `https://api.themoviedb.org/3/trending/all/day?api_key=14bdd69ce887376edfafb09f23f78fe9&page=${page}`
  );

  let movies = moviesData;
  let data = movies.map((movie) => {
    mediaType.push(movie.media_type);
    return <MovieCard key={movie.id} movie={movie} />;
  });

  const filteredData = [...new Set(mediaType)];
  const filteration = filteredData.map((el) => ({ value: el, label: el }));

  const changePage = (event, page) => {
    setPage(page);
  };

  if (isLoading) {
    return <Loader />;
  }

  const handleSearch = (query) => {
    if (query === "") {
      movies = moviesData;
    } else {
      search(
        `https://api.themoviedb.org/3/search/multi?api_key=14bdd69ce887376edfafb09f23f78fe9&query=${query}`
      );
    }
  };

  const handleSelect = (value) => {
    data = movies.filter((movie) => movie.media_type === value);
    console.log(data);
  };

  return (
    <>
      <SearchForm
        handleSearch={handleSearch}
        filteration={filteration}
        handleSelect={handleSelect}
      />
      <div className="movies-list py-5">
        <div className="container">
          <div className="movies-list-content text-capitalize">
            <h2>latest movies & TV shows</h2>
            <div className="row mt-5">{data}</div>
            <div className="pagination d-flex justify-content-center ">
              <Pagination
                count={totalPages}
                page={page}
                onChange={changePage}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviesList;
