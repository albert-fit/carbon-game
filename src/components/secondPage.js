import React from "react";
import { useState } from "react";
import GameStateContext from "../store/gameState-context";
import { Row, Col, Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';

import classes from "./secondPage.module.css";

const SecondPage = () => {
    const gameStateCtx = React.useContext(GameStateContext);

    return(
        <div className={classes.secondPageDiv}>
        <Container fluid>
        <Row>
            <Col>Some Text</Col>
        </Row>
        <Row>
            <Col md="6">
                <Button onClick={() => gameStateCtx.onGameState("FirstPage")}>Back</Button>
            </Col>
            <Col md="6">
                <Button onClick={() => gameStateCtx.onGameState("ThirdPage")}>Next</Button>
            </Col>
        </Row>
        </Container>

        </div>
    )

}

export default SecondPage;