import React, { useEffect, useState } from "react";

const Card = ({ movie, genres }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const triGenre = (genreId) => {
    for (const genre of genres) {
      if (genre.id === genreId) {
        return genre.name;
      }
    }
  };

  const newDate = () => {
    let arrayDate = movie.release_date.split("-");
    return arrayDate.reverse().join("/");
  };

  const reload = () => {
    if (localStorage.favorite) {
      let array = JSON.parse(localStorage.favorite);
      if (array.includes(movie.id)) setIsFavorite(true);
    } else return;
  };

  const save = (movie) => {
    let array;
    if (localStorage.favorite) {
      array = JSON.parse(localStorage.favorite);
    } else {
      array = [];
    }
    if (array.includes(movie)) return;
    else array.push(movie);
    localStorage.favorite = JSON.stringify(array);
    setIsFavorite(true);
  };

  const deletef = (movie) => {
    let array;
    let newArray;
    array = JSON.parse(localStorage.favorite);
    const index = array.indexOf(movie);
    newArray = array.splice(index, 1);
    localStorage.favorite = JSON.stringify(array);
    setIsFavorite(false);
  };

  useEffect(() => {
    reload();
  }, []);

  return (
    <div className="card">
      <img
        src={
          movie.poster_path
            ? "https://image.tmdb.org/t/p/original/" + movie.poster_path
            : "./img/poster.jpg"
        }
        alt=""
      />
      <h2>{movie.title}</h2>
      <h5>Sorti le : {newDate()}</h5>
      <h4>
        {movie.vote_average}/10
        <span>&#x2B50;</span>
      </h4>
      <ul>
        {movie.genre_ids.map((id) => {
          return <li key={id}>{triGenre(id)}</li>;
        })}
      </ul>
      <h3>Synopsis</h3>
      <p>{movie.overview}</p>
      {isFavorite ? (
        <button className="btn" onClick={() => deletef(movie.id)}>
          Favori
        </button>
      ) : (
        <button className="btn" onClick={() => save(movie.id)}>
          Ajouter aux coups de coeur
        </button>
      )}
    </div>
  );
};

export default Card;
