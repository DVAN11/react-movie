import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../../Assets/logo.png";
import "../../Global/Header/Header.css";
import { Link, useNavigate } from 'react-router-dom';
const Header = () => {
    const navigate = useNavigate();
    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/search/${e.target.querySelector("input").value}`);
        e.target.querySelector("input").value = "";
    }
    return (
        <>
            <Navbar expand="lg" className="header navbar navbar-expand-lg navbar-light">
                <Container>
                    <Navbar.Brand href='#'>
                        <img src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Link to="/">Home</Link>
                        <Link to="/movie">Movie</Link>
                    </Nav>
                    <Form className="d-flex" onSubmit={handleSearch} >
                        <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
                    </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;