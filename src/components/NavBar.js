import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import  { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavLink  to="/" style={{ textDecoration: 'none' }}>
                        <Navbar.Brand >Navbar</Navbar.Brand> 
                    </NavLink>
                    <NavLink  to="/content" style={{ textDecoration: 'none', color:"white"}}>
                        <Nav className="me-auto">
                        Content
                        </Nav>
                    </NavLink>
                    
                </Container>
            </Navbar>

    );
}
export default NavBar;