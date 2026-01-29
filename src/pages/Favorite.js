import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import Movies from "../components/Movies";

const Favorite = (movie) => {
  const reload = (movie) => {
    if (localStorage.favorite) {
      let array = JSON.parse(localStorage.favorite);

      if (array.includes(movie.id)) console.log("ok");
    } else return;
  };

  // useEffect(() => {
  //   reload(movie);
  // }, []);

  return (
    <div>
      <Navigation />
      <div className="user-list-page">
        <h2>
          Coups de coeur &#128150;
          <br />
          <span>Aucun coup de coeur pour le moment</span>
        </h2>
      </div>
    </div>
  );
};

export default Favorite;
