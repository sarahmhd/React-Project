import "./movieDetails.sass";

import { useEffect, useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Header from "../../components/header/Header";
import axios from "axios";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id, media_type } = useParams();
  const [movie, setMovie] = useState({});
  console.log(id);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${media_type}/${id}?api_key=14bdd69ce887376edfafb09f23f78fe9`
      )
      .then((res) => setMovie(res.data));
  });
  return (
    <>
      <Header />
      <div className="details">
        <div className="bg-img">
          <img
            src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}`}
            alt={movie.title}
          />
        </div>
        <div className="top-details">
          <div className="details-content d-flex">
            <div className="img">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt=""
              />
            </div>
            <div className="publish-date">
              {movie.release_date.substring(0, 4)}
            </div>
            <h2 className="title">
              {movie.original_title || movie.original_name}
            </h2>
            <p className="description">{movie.overview}</p>
            <div className="more-info d-flex">
              <div className="genres d-flex">
                {movie?.genres?.map((genre) => {
                  return <span>{genre.name}</span>;
                })}
              </div>
              <div className="release-data">{movie.release_date}</div>
            </div>
            <div className="status-info">
              <span className="rate">
                {movie.vote_average?.toFixed(1)} IMDb
              </span>
              <div className="status d-flex flex-column">
                <span className="status-text">status</span>
                <span className="status-val">{movie.status}</span>
              </div>
              <div className="btns d-flex">
                <button className="btn add">
                  <AddIcon />
                </button>
                <button className="btn fav">
                  <FavoriteIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
