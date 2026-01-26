import React from "react";
import Navigation from "../components/Navigation";

const Favorite = () => {
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
