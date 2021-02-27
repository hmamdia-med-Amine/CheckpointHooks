import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";

const Cardi = ({ movie }) => {
  console.log(movie);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={movie.PosterUrl} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>{movie.Description}</Card.Text>
        <StarRatingComponent
          name="Rate"
          starCount={5}
          value={movie.Rate}
          starColor="red"
        />
      </Card.Body>
    </Card>
  );
};
export default Cardi;
