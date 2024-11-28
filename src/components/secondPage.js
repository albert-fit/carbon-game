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
            <Container>
                <Row className={classes.projectDescription}>
                    <Col>
                        <h1 className={classes.header1}>Project Brief</h1>
                        <h2 className={classes.header2}>HS2 - Chiltrens</h2>
                        <p className={classes.paragraph}>
                            This project involves conducting seismic wave testing on a chalk trial embankment. 
                            The objective is to assess the stability and structural integrity of the embankment 
                            by analyzing the propagation of seismic waves through the chalk material. 
                            The data collected will help in understanding the behavior of the embankment under 
                            various stress conditions and will be crucial for ensuring the safety and reliability 
                            of the HS2 infrastructure.
                        </p>
                    </Col>
                    <Col>
                        <img src={`${process.env.PUBLIC_URL}/site-photo.jpeg`} alt="site-photo" className={classes.sitePhoto} />
                    </Col>
                </Row>
                <Row className={classes.questionSpace}>

                </Row>
            </Container>
        </div>
    )

}

export default SecondPage;