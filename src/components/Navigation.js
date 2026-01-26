import React from "react";

const Navigation = () => {
  return (
    <div className="header">
      <h1>React Movies</h1>
      <nav>
        <ul>
          <a href="/Home">Acueil</a>
          <a href="/Favorite">Coups de coeur</a>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
