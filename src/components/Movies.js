import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card.js";

const Movies = ({ input, top, flop, favorite }) => {
  const [dataMovies, setDataMovies] = useState([]);
  const [dataGenresMovies, setDataGenresMovies] = useState([]);

  const reload = (movie) => {
    if (localStorage.favorite) {
      let array = JSON.parse(localStorage.favorite);
      if (array.includes(movie.id))
        return (
          <Card
            key={movie.id}
            movie={movie}
            genres={dataGenresMovies}
            favorite
          />
        );
    } else return;
  };

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
      {dataMovies
        .sort((a, b) => {
          if (top) return b.vote_average - a.vote_average;
          if (flop) return a.vote_average - b.vote_average;
          else
            return (
              parseInt(b.release_date.split("-").join("")) -
              parseInt(a.release_date.split("-").join(""))
            );
        })
        .map((movie) => {
          return favorite ? (
            reload(movie)
          ) : (
            <Card key={movie.id} movie={movie} genres={dataGenresMovies} />
          );
        })}
    </div>
  );
};

export default Movies;
