import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card.js";

const Movies = () => {
  const [dataMovies, setDataMovies] = useState([]);

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/popular?language=fr-FR",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2N2FlMDg0ZDVmYTRjNzMzZTZmYjJmMTY3Yzc2NTRjYiIsIm5iZiI6MTc2OTUwNzgwOC42NzI5OTk5LCJzdWIiOiI2OTc4OGJlMDBhNDI3ZDNhMjAxYTFhZjYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.3GIg1WOUtjvwHPplKz5WPBghwQYSSNcHaEo9Kilc0DE",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then((res) => {
        setDataMovies(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => console.error(err.data));
  }, []);

  return (
    <div className="result">
      {dataMovies.map((movie) => {
        return <Card key={movie.id} movie={movie} />;
      })}
    </div>
  );
};

export default Movies;
