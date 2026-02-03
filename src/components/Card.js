import React from "react";

const Card = ({ movie }) => {
  return (
    <div className="card">
      <img src="movie.backdrop_path" alt="movie.backdrop_path" />
      <h2>{movie.title}</h2>
      <h5>{movie.title}</h5>
      <h4>
        {movie.title}
        <span></span>
      </h4>
      <ul>
        <li>{movie.title}</li>
      </ul>
      <h3>{movie.title}</h3>
      <p>{movie.title}</p>
      <div className="btn"></div>
    </div>
  );
};

export default Card;
