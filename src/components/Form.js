import React, { useState } from "react";

const Form = ({ inputSearchValue }) => {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="form-component">
      <div className="form-container">
        <form action="">
          <input
            type="text"
            placeholder="Entrer le titre d'un film"
            onChange={(e) => {
              setInputSearch(e.target.value);
              inputSearchValue(e.target.value);
            }}
          />
          <input
            type="submit"
            value="Rechercher"
            onClick={(e) => {
              e.preventDefault();
              inputSearchValue(inputSearch);
            }}
          />
        </form>
      </div>
      <div className="btn-sort-container">
        <button id="goodToBad" onClick={() => console.log("good")}>
          Top<span>&#8680;</span>
        </button>
        <button id="badToGood" onClick={() => console.log("bad")}>
          <span>&#8680;</span>Flop
        </button>
      </div>
    </div>
  );
};

export default Form;
