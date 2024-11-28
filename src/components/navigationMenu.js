import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import classes from './navigationMenu.module.css';
import Container from 'react-bootstrap/Container';
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import GameStateContext from '../store/gameState-context';
const NavigationMenu = (props) => {
    const gameStateCtx = React.useContext(GameStateContext);
    const forwardClickHandler = () => {
        gameStateCtx.onGameState(1);
    }
    const backClickHandler = () => {
        gameStateCtx.onGameState(-1);
    }
    return (
        <Navbar bg="dark" variant="dark" fixed="bottom" className={classes.nav}>
        <Container>
        <Button onClick={backClickHandler}><MdArrowBackIos />Back</Button>
        <Button onClick={forwardClickHandler}>Next<MdArrowForwardIos /></Button>
        </Container>
        </Navbar>
    );
}

export default NavigationMenu;