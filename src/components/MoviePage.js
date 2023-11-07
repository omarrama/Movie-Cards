import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const MoviePage = () => {
  const params = useParams();
  const [movie, setMovie] = useState([]);

  const fetchMovieDetails = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=52ef927bbeb21980cd91386a29403c78&language=ar`
    );
    setMovie(res.data);
  };
  useEffect(() => {
    fetchMovieDetails();
  }, []);
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-4 ">
          <div className="d-flex align-items-center">
            <img
              className="movie-img w-30"
              src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
              alt={movie.title}
            />
            <div className="justify-content-center text-center mx-auto">
              <p className="movie-info border-bottom">
                اسم الفيلم: {movie.title}
              </p>
              <p className="movie-info border-bottom">
                تاريخ الفيلم: <span dir="rtl">{movie.release_date}</span>
              </p>
              <p className="movie-info border-bottom">
                عدد المقيمين: {movie.vote_count}
              </p>
              <p className="movie-info border-bottom">
                التقييم: {Number(movie.vote_average).toFixed(1)}
              </p>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col
          md="12"
          xs="12"
          sm="12"
          className="my-3 d-flex justify-content-center"
        >
          <div className="movie-story d-flex flex-column align-items-start py-4">
            <div className="text-end px-5">
              <p className="movie-story-title border-bottom">القصة:</p>
            </div>
            <div className="text-end px-5">
              <p className="movie-story-description">
                {movie.overview !== "" ? (
                  movie.overview
                ) : (
                  <h5>غير متاحة الآن</h5>
                )}
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col
          md="12"
          xs="12"
          sm="12"
          className="mb-4 d-flex justify-content-center"
        >
          <Link to="/">
            <button
              style={{
                backgroundColor: "#b45b35",
                color: "white",
                border: "none",
              }}
              className="btn mx-2"
            >
              عودة للرئيسية
            </button>
          </Link>
          <a
            href={`https://www.imdb.com/title/${movie.imdb_id}/`}
            target="_blank"
          >
            <button
              style={{
                backgroundColor: "#b45b35",
                color: "white",
                border: "none",
              }}
              className="btn"
            >
              مشاهدة التريلر
            </button>
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default MoviePage;
