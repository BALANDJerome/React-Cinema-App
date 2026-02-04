import React from "react";

const Card = ({ movie }) => {
  const dateFormater = (date) => {
    let [yy, mm, dd] = date.split("-");
    return [dd, mm, yy].join("/");
  };
  const defindGenre = (id) => {
    switch (id) {
      case 28:
        id = "Action";
        break;
      case 12:
        id = "Aventure";
        break;
      case 16:
        id = "Animation";
        break;
      case 35:
        id = "Comédie";
        break;
      case 80:
        id = "Crime";
        break;
      case 99:
        id = "Documentaire";
        break;
      case 18:
        id = "Drame";
        break;
      case 10751:
        id = "Familial";
        break;
      case 14:
        id = "Fantastique";
        break;
      case 36:
        id = "Histoire";
        break;
      case 27:
        id = "Horreur";
        break;
      case 10402:
        id = "Musique";
        break;
      case 9648:
        id = "Mystère";
        break;
      case 10749:
        id = "Romance";
        break;
      case 878:
        id = "Science-Fiction";
        break;
      case 10770:
        id = "Téléfilm";
        break;
      case 53:
        id = "Thriller";
        break;
      case 10752:
        id = "Guerre";
        break;
      case 37:
        id = "Western";
        break;
    }
    return id;
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
