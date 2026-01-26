import React from "react";
import Navigation from "../components/Navigation";
import Movies from "../components/Movies";
import Form from "../components/Form";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Form />
      <Movies />
    </div>
  );
};

export default Home;
