import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Movies from "../components/Movies";
import Form from "../components/Form";
import { UNSAFE_withHydrateFallbackProps } from "react-router-dom";

const Home = () => {
  const [input, inputSearchValue] = useState("");
  const [top, topValue] = useState(false);
  const [flop, flopValue] = useState(false);

  return (
    <div>
      <Navigation />
      <Form
        inputSearchValue={inputSearchValue}
        topValue={topValue}
        flopValue={flopValue}
      />
      <Movies input={input} top={top} flop={flop} />
    </div>
  );
};

export default Home;
