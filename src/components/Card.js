import React from "react";

const Card = ({ movie }) => {
  console.log(movie);

  return (
    <div className="card">
      <img
        src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
        alt=""
      />
      <h2>{movie.title}</h2>
      <h5>Sorti le : {movie.release_date}</h5>
      <h4>
        {movie.vote_average}/10
        <span>&#x2B50;</span>
      </h4>
      <ul>
        <li>{movie.genre_ids}</li>
      </ul>
      <h3>Synopsis</h3>
      <p>{movie.overview}</p>
      <button className="btn" value="">
        Ajouter aux coups de coeur
      </button>
    </div>
  );
};

export default Card;
