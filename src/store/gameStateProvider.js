import React from "react";
import { useState } from "react";
import GameStateContext from "./gameState-context";

const GameStateProvider = (props) => {
    const [gameState, setGameState] = useState("FirstPage");
    const [gameScore, setGameScore] = useState(0);
    
    const gameStateHandler = (gameState) => {
        setGameState(gameState);
    }
    return (
        <GameStateContext.Provider
        value={{
            onGameState: gameStateHandler,
            gameState: gameState,
            setGameState: setGameState,
            gameScore: gameScore,
            setGameScore: setGameScore,
        }}
        >
        {props.children}
        </GameStateContext.Provider>
    );
    }

export default GameStateProvider;