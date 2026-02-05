import React from "react";

const Form = ({ inputValue, setSortMovies, sortMovies }) => {
  return (
    <div className="form-component">
      <div className="form-container">
        <form>
          <input
            type="text"
            placeholder="Taper le nom d'un film"
            onChange={(e) => inputValue(e.target.value)}
          />
          <input
            type="submit"
            value="Rechercher"
            onClick={(e) => e.preventDefault()}
          />
        </form>
      </div>
      <div className="btn-sort-container">
        <div
          className="btn-sort"
          id="goodToBad"
          onClick={() => {
            sortMovies === "" || sortMovies === "badToGood"
              ? setSortMovies("goodToBad")
              : setSortMovies("");
          }}
        >
          Top<span>➔</span>
        </div>
        <div
          className="btn-sort"
          id="badToGood"
          onClick={() =>
            sortMovies === "" || sortMovies === "goodToBad"
              ? setSortMovies("badToGood")
              : setSortMovies("")
          }
        >
          Flop<span>➔</span>
        </div>
      </div>
    </div>
  );
};

export default Form;
