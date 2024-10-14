import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../App.css";

interface MathCardProps {
  title: string;
  image: any;
  onSelectCard: () => void;
}

function MathCard({ title, image, onSelectCard }: MathCardProps) {
  return (
    <div className="growing-button" onClick={onSelectCard}>
      <Card style={{ width: "200px" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MathCard;
