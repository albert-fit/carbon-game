import React from "react";
import { useState } from "react";
import GameStateContext from "./gameState-context";

const GameStateProvider = (props) => {
    const [gameState, setGameState] = useState(0);
    const [gameScore, setGameScore] = useState(0);
    const [questionOneScore, setQuestionOneScore] = useState(0);
    const [questionTwoScore, setQuestionTwoScore] = useState(0);
    const [questionThreeScore, setQuestionThreeScore] = useState(0);
    const [questionFourScore, setQuestionFourScore] = useState(0);
    
    const gameStateHandler = (input) => {
        const newGameState = gameState + input;
        setGameState(newGameState);
        console.log(newGameState);
    }

    const questionScoreHandler = (question, points) => {
        switch (question) {
            case 1:
                const newQuestionOneScore = questionOneScore + points;
                setQuestionOneScore(newQuestionOneScore);
                break;
            case 2:
                const newQuestionTwoScore = questionTwoScore + points;
                setQuestionTwoScore(newQuestionTwoScore);
                break;
            case 3:
                const newQuestionThreeScore = questionThreeScore + points;
                setQuestionThreeScore(newQuestionThreeScore);
                break;
            case 4:
                const newQuestionFourScore = questionFourScore + points;
                setQuestionFourScore(newQuestionFourScore);
                break;
            default:
                break
    }
}

    return (
        <GameStateContext.Provider
        value={{
            onGameState: gameStateHandler,
            gameState: gameState,
            setGameState: setGameState,
            gameScore: gameScore,
            setGameScore: setGameScore,
            questionOneScore: questionOneScore,
            questionTwoScore: questionTwoScore,
            questionThreeScore: questionThreeScore,
            questionFourScore: questionFourScore,
            onQuestionScore: questionScoreHandler,
        }}
        >
        {props.children}
        </GameStateContext.Provider>
    );
    }

export default GameStateProvider;