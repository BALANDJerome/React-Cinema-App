import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "../components/Form";
import Header from "../components/Header";
import Card from "../components/Card";

const Home = ({ dataGenresMovies }) => {
  const [dataMovies, setDataMovies] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [sortMovies, setSortMovies] = useState("");

  useEffect(() => {
    if (inputValue === "") {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/popular?api_key=67ae084d5fa4c733e6fb2f167c7654cb&language=fr-FR",
        )
        .then((res) => {
          setDataMovies(res.data.results);
        });
    } else {
      axios
        .get(
          "https://api.themoviedb.org/3/search/movie?api_key=67ae084d5fa4c733e6fb2f167c7654cb&query=" +
            inputValue +
            "&language=fr-FR",
        )
        .then((res) => {
          setDataMovies(res.data.results);
        });
    }
  }, [inputValue]);

  return (
    <div className="home-page">
      <Header />
      <Form
        inputValue={setInputValue}
        setSortMovies={setSortMovies}
        sortMovies={sortMovies}
      />
      <div className="result">
        {dataMovies
          .sort((a, b) => {
            if (sortMovies === "badToGood") {
              return a.vote_average - b.vote_average;
            } else if (sortMovies === "goodToBad") {
              return b.vote_average - a.vote_average;
            } else
              return (
                parseInt(b.release_date.split("-").join("")) -
                parseInt(a.release_date.split("-").join(""))
              );
          })
          .map((movie) => (
            <Card
              movie={movie}
              key={movie.id}
              dataGenresMovies={dataGenresMovies}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
