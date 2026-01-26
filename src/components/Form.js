import React from "react";

const Form = () => {
  return (
    <div className="form-component">
      <div className="form-container">
        <form action="">
          <input type="text" placeholder="Entrer le titre d'un film" />
          <input type="submit" value="Rechercher" />
        </form>
      </div>
      <div className="btn-sort-container">
        <button id="goodToBad">
          Top<span>&#8680;</span>
        </button>
        <button id="badToGood">
          <span>&#8680;</span>Flop
        </button>
      </div>
    </div>
  );
};

export default Form;
