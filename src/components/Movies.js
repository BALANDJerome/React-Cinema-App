import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card.js";

const Movies = ({ input }) => {
  const [dataMovies, setDataMovies] = useState([]);
  const [dataGenresMovies, setDataGenresMovies] = useState([]);

  useEffect(() => {
    if (input) {
      axios
        .get(
          "https://api.themoviedb.org/3/search/movie?api_key=67ae084d5fa4c733e6fb2f167c7654cb&query=" +
            input +
            "&language=fr-FR",
        )
        .then((res) => {
          setDataMovies(res.data.results);
        });
    } else {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/popular?api_key=67ae084d5fa4c733e6fb2f167c7654cb&language=fr-FR",
        )
        .then((res) => {
          setDataMovies(res.data.results);
        });
    }
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=67ae084d5fa4c733e6fb2f167c7654cb&language=fr-FR",
      )
      .then((res) => {
        setDataGenresMovies(res.data.genres);
      });
  }, [input]);

  return (
    <div className="result">
      {dataMovies.map((movie) => {
        return <Card key={movie.id} movie={movie} genres={dataGenresMovies} />;
      })}
    </div>
  );
};

export default Movies;
