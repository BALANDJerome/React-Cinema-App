import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Movies from "../components/Movies";

const Favorite = () => {
  const [favoriteMovies, setFavoriteMovies] = useState();

  useEffect(() => {
    localStorage.favorite ? setFavoriteMovies(true) : setFavoriteMovies(false);
  }, []);

  return (
    <div>
      <Navigation />
      <div className="user-list-page">
        <h2>
          Coups de coeur &#128150;
          <br />
          {favoriteMovies ? (
            <Movies favorite />
          ) : (
            <span>Aucun coup de coeur pour le moment</span>
          )}
        </h2>
      </div>
    </div>
  );
};

export default Favorite;
