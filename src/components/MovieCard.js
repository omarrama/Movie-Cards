import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Col lg="3" md="4" sm="6" xs="12" className="mb-4">
      <Link to={`/movie/${movie.id}`}>
        <div className="card">
          <img
            src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
            alt={movie.original_title}
            className="card-image"
          />
          <div className="card-overlay">
            <div className="overlay-text text-center w-100 p-2">
              <p>اسم الفيلم: {movie.title}</p>
              <p>
                تاريخ الإصدار: <span dir="ltr">{movie.release_date}</span>
              </p>
              <p>التقييم: {movie.vote_average.toFixed()}</p>
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
};

export default MovieCard;
