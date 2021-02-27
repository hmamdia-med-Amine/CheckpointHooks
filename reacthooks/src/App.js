import React, { useState } from "react";
import "./App.css";
import Cardi from "./Components/Card";
import MovieList from "./Components/movieList";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalAdd from "./Components/modalpop";
import SearchBox from "./Components/Filter";
import { Button, Modal } from "react-bootstrap";
import modalAdd from "./Components/modalpop";
function App() {
  const [movies, setMovies] = useState([
    {
      Title: "Moonlight",
      Description: "Es handelt sich um ein Junge, der ....",
      PosterUrl:
        "https://cdn.pastemagazine.com/www/system/images/photo_albums/best-movie-posters-2016/large/moonlight-ver2-xlg.jpg?1384968217",
      Rate: 4,
    },
    {
      Title: "The great Gatsby",
      Description: "Es handelt sich um einen Mann, der ....",
      PosterUrl:
        "https://images-na.ssl-images-amazon.com/images/I/71oI1YEWt8L._AC_SL1200_.jpg",
      Rate: 3,
    },
    {
      Title: "The Fault in our Stars",
      Description: "Es handelt sich um zwei Freunde, die an Krebs leiden ....",
      PosterUrl:
        "https://nesmedia2017.files.wordpress.com/2016/08/tfios-poster.jpg",
      Rate: 5,
    },
    {
      Title: "The great Gatsby",
      Description: "Es handelt sich um einen Mann, der ....",
      PosterUrl:
        "https://images-na.ssl-images-amazon.com/images/I/71oI1YEWt8L._AC_SL1200_.jpg",
      Rate: 3,
    },
    {
      Title: "The Loft",
      Description: "Es geht darum, ...",
      PosterUrl:
        "https://lh3.googleusercontent.com/proxy/qG8nYZfUuTrL4rtD1nIAg2tr_qT10VKTNF8IRTsw1JCAi4B1hRKc0Kbykc9XVFUH4lmJUsv-V8b_6QCrtBoeB_9czwiBC4NQpsu1MnFOCgnDjnsb2TfIBrT_yA",
      Rate: 2,
    },
    {
      Title: "The Joker",
      Description: "Es geht darum, ...",
      PosterUrl:
        "https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500",
      Rate: 1,
    },
  ]);

  const [searchValue, setSearchValue] = useState("");

  const addMovie = (newmovie) => {
    setMovies([...movies, newmovie]);
  };

  const search = (text) => {
    setSearchValue(text);
  };
  const [keyRate, setKeyRate] = useState(0);
  return (
    <div className="App">
      <div>
        <h1 className="header">Movie Database</h1>
      </div>
      <div className="SearchBar">
        <SearchBox search={search} setKeyRate={setKeyRate} keyRate={keyRate} />
        <ModalAdd addmovie={addMovie} />
      </div>

      <div
        className="row"
        style={{ display: "flex", justifyContent: "spaceBetween" }}
      >
        <MovieList
          className="MovieList"
          movies={movies.filter(
            (movie) =>
              movie.Rate >= keyRate &&
              movie.Title.toLowerCase().includes(
                searchValue.toLowerCase().trim()
              )
          )}
        />
      </div>
    </div>
  );
}

export default App;
