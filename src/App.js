import Navbar from "./components/Navbar";
import MoviesList from "./components/MoviesList";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviePage from "./components/MoviePage";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchCount, setSearchCount] = useState([0, false, ""]);

  const fetchMovies = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar"
    );
    setMovies(res.data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const searchMovies = async (term) => {
    if (term === "") {
      fetchMovies();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${term}&page=1&language=ar`
      );
      setMovies(res.data.results);
      setSearchCount([res.data.total_pages, true, term]);
    }
  };

  const fetchPage = async (page) => {
    if (searchCount[1] == false) {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&page=${page}`
      );
      setMovies(res.data.results);
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${searchCount[2]}&page=${page}language=ar`
      );
      setMovies(res.data.results);
    }
  };

  return (
    <div className="body-style">
      <Navbar searchMovies={searchMovies} />
      <BrowserRouter basename={"/Movie-Cards"}>
        <Routes>
          <Route
            path="/"
            element={
              <MoviesList
                movies={movies}
                searchCount={searchCount}
                fetchPage={fetchPage}
              />
            }
          />
          <Route path="/movie/:id" element={<MoviePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
