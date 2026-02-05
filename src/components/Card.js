import React from "react";

const Card = ({ movie, dataGenresMovies }) => {
  const dateFormater = (date) => {
    let [yy, mm, dd] = date.split("-");
    return [dd, mm, yy].join("/");
  };

  const defindGenre = (genreId) => {
    for (const genre of dataGenresMovies)
      if (genre.id === genreId) return genre.name;
  };

  return (
    <div className="card">
      <img
        src={
          movie.backdrop_path
            ? "https://image.tmdb.org/t/p/original/" + movie.backdrop_path
            : "./img/poster.jpg"
        }
        alt={"affiche du film " + movie.title}
      />
      <h2>{movie.title ? movie.title : ""}</h2>
      <h5>
        {movie.release_date
          ? "Sorti le : " + dateFormater(movie.release_date)
          : "Inconnu"}
      </h5>
      <h4>
        {movie.vote_average.toFixed(2)}
        <span>⭐</span>
      </h4>
      <ul>
        {movie.genre_ids
          ? movie.genre_ids.map((genre, index) => (
              <li key={index}>{defindGenre(genre)}</li>
            ))
          : ""}
      </ul>
      <h3>Synopsis</h3>
      <p>{movie.overview ? movie.overview : ""}</p>
      <div className="btn">Ajouter aux favoris</div>
    </div>
  );
};

export default Card;
