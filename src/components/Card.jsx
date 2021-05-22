import React from "react";
import data from "../data";
import "./Card.css";

function Card() {
  return (
    <>
      {data.movies.map((movie) => (
        <div className="card">
          <div className="card-image">
            <img src={movie.image} alt="What happen to images." srcset="" />
          </div>
          <div className="card-text">
            <h1>{movie.name}</h1>
            <a href={movie.movieURL}>
              <button>Watch On Youtube</button>
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
