import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Card from "../components/Card";

const UserList = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    let moviesId = window.localStorage.movieLike
      ? window.localStorage.movieLike.split(",")
      : [];

    for (let i = 0; i < moviesId.length; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=67ae084d5fa4c733e6fb2f167c7654cb`,
        )
        .then((res) => {
          setListData((listData) => [...listData, res.data]);
        });
    }
  }, []);

  return (
    <div className="user-list-page">
      <Header />
      <h2>
        Coups de coeur <span>💖</span>
      </h2>
      <div className="result">
        {listData.length > 0 ? (
          listData.map((movie) => <Card movie={movie} key={movie.id} />)
        ) : (
          <h2>Aucun coup de coeur pour le moment</h2>
        )}
      </div>
    </div>
  );
};

export default UserList;
