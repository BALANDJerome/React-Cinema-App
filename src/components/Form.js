import React from "react";

const Form = () => {
  return (
    <div className="form-component">
      <div className="form-container">
        <form>
          <input type="text" placeholder="Taper le nom d'un film" />
          <input type="submit" value="Rechercher" />
        </form>
      </div>
      <div className="btn-sort-container">
        <div className="btn-sort" id="goodToBad">
          Top<span>➔</span>
        </div>
        <div className="btn-sort" id="badToGood">
          Flop<span>➔</span>
        </div>
      </div>
    </div>
  );
};

export default Form;
