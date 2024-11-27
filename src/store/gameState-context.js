import React from "react";

const GameStateContext = React.createContext({
    gameState: "FirstPage",
    setGameState: (gameState) => {}, 
    gameScore: 0,
    setGameScore: () => {},
    onGameState: (gameState) => {},
});

export default GameStateContext;