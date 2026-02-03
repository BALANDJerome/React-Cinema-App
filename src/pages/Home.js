import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "../components/Form";
import Header from "../components/Header";
import Card from "../components/Card";

const Home = () => {
  const [dataMovies, setDataMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=67ae084d5fa4c733e6fb2f167c7654cb&language=fr-FR",
      )
      .then((res) => {
        setDataMovies(res.data.results);
      });
  }, []);

  return (
    <div className="home-page">
      <Header />
      <Form />
      <div className="result">
        {dataMovies.map((movie) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
