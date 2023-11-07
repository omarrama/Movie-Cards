import React from "react";
import { Container, Row } from "react-bootstrap";
import MovieCard from "./MovieCard";
import Pages from "./Pages";

const MoviesList = ({ movies, fetchPage, searchCount }) => {
  return (
    <Container>
      <Row className="mt-4 justify-content-center">
        {movies.length >= 1 ? (
          movies.map((movie) => {
            if (movie.poster_path !== null) {
              return <MovieCard movie={movie} key={movie.id} />;
            }
          })
        ) : (
          <h1
            className="text-center mt-5 pt-5 text-muted pb-3"
            style={{ borderBottom: "2px dashed black" }}
          >
            لا يوجد أفلام
          </h1>
        )}
        {movies.length >= 1 ? (
          <Pages fetchPage={fetchPage} searchCount={searchCount} />
        ) : null}
      </Row>
    </Container>
  );
};

export default MoviesList;
