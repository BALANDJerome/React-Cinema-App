import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Movies from "../components/Movies";
import Form from "../components/Form";

const Home = () => {
  const [input, inputSearchValue] = useState("");

  return (
    <div>
      <Navigation />
      <Form inputSearchValue={inputSearchValue} />
      <Movies input={input} />
    </div>
  );
};

export default Home;
