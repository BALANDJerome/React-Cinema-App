import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserList from "./pages/UserList";

const App = () => {
  const [dataGenresMovies, setDataGenresMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=67ae084d5fa4c733e6fb2f167c7654cb&language=fr-FR",
      )
      .then((res) => {
        setDataGenresMovies(res.data.genres);
      });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/userlist" element={<UserList />} />
        <Route
          path="*"
          element={<Home dataGenresMovies={dataGenresMovies} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
