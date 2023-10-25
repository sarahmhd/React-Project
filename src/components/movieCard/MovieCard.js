import "./movieCard.sass";

import { Link } from "react-router-dom";
import React from "react";

const MovieCard = (props) => {
  const { movie } = props;
  return (
    <div className="col-md-6 col-lg-3">
      <div className="card position-relative mb-3 border-0">
        <Link
          to={`movie/${movie.id}/${movie.media_type}`}
          className="card-img-top"
        >
          <img
            src={
              `https://image.tmdb.org/t/p/w500/${movie.poster_path}` ||
              `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}` ||
              `https://picsum.photos/200/300`
            }
            alt={movie.original_title || movie.original_name}
          />
        </Link>
        <div className="card-body">
          <h3 className="card-title">
            {movie.original_title || movie.original_name}
          </h3>
          <div className="rate position-absolute">
            {movie.vote_average?.toFixed(1)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
