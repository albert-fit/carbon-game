import React from "react";

const GameStateContext = React.createContext({
    gameState: 0,
    setGameState: () => {}, 
    maxScore: 0,
    setMaxScore: () => {},
    gameScore: 0,
    questionOneScore: 0,
    questionTwoScore: 0,
    questionThreeScore: 0,
    questionFourScore: 0,
    setQuestionOneScore: () => {},
    setQuestionTwoScore: () => {},
    setQuestionThreeScore: () => {},
    setQuestionFourScore: () => {},
    setGameScore: () => {},
    onGameState: (input) => {},
    onQuestionScore: (question, points) => {},
});

export default GameStateContext;