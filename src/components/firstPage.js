import React from "react";
import Button from "react-bootstrap/Button";

const FirstPage = () => {
    const handleClick = () => {
        console.log("Button was clicked!");
    }
  return (
    <div>
      <h1>Welcome to the Carbon Game</h1>
      <p>
        This game helps you understand your carbon footprint and how to reduce
        it.
      </p>
      <div className="d-grid gap-2">
        <Button variant="primary" size="lg" onClick={() => handleClick()}>
          Start Game
        </Button>
      </div>
    </div>
  );
};

export default FirstPage;
