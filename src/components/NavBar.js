import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {CONTENT_ROUTE, MAIN_ROUTE} from "../consts";

const NavBar = () => {
    return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href={MAIN_ROUTE}>Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href={CONTENT_ROUTE}>Content</Nav.Link>

                    </Nav>
                </Container>
            </Navbar>

    );
}
export default NavBar;