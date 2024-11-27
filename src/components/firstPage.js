import React from "react";
import Button from "react-bootstrap/Button";
import GameStateContext from "../store/gameState-context";

const FirstPage = () => {
    const gameStateCtx = React.useContext(GameStateContext);
    const handleClick = () => {
        gameStateCtx.onGameState("SecondPage");
    };
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
        {gameStateCtx.gameState === "playing" && <h1>Game on!</h1>}
      </div>
    </div>
  );
};

export default FirstPage;
