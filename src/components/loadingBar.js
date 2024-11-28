import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import classes from './loadingBar.module.css';
import GameStateContext from '../store/gameState-context';


const LoadingBar = () => {
    const gameStateCtx = React.useContext(GameStateContext);


    return (
        <ProgressBar now={gameStateCtx.gameState*25} label={`${gameStateCtx.gameState} * 25`} className={classes.progressBar} />
    );
}

export default LoadingBar;