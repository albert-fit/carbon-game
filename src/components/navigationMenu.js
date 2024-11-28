import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import classes from './navigationMenu.module.css';
import Container from 'react-bootstrap/Container';
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
const NavigationMenu = (props) => {
    return (
        <Navbar bg="dark" variant="dark" fixed="bottom" className={classes.nav}>
        <Container>
        <Button><MdArrowBackIos />Back</Button>
        <Button>Next<MdArrowForwardIos /></Button>
        </Container>
        </Navbar>
    );
}

export default NavigationMenu;