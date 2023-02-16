import React from "react";
import "./Cards.css";
import Card from "react-bootstrap/Card";

const Cards = (item) => {
  const { title, desc, image } = item;
  return (
    <Card>
      <Card.Title className="py-1">{title}</Card.Title>
      <Card.Img src={image} height="250px" />
      <Card.Body>
        <Card.Text>{desc}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Cards;
