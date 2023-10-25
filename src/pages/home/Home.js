import Header from "../../components/header/Header";
import MoviesList from "../../components/moviesList/MoviesList";
import React from "react";
import SearchForm from "../../components/searchForm/SearchForm";

const Home = () => {
  return (
    <div>
      <Header />
      <MoviesList />
    </div>
  );
};

export default Home;
