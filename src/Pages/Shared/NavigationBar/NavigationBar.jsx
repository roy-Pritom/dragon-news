import React, { useContext } from 'react';

import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { authContext } from '../../../Provider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const NavigationBar = () => {
    const { user, logOut } = useContext(authContext)

    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">

                <Container>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>

                        </Nav>
                        <Nav className='d-flex align-items-center'>
                            {
                                user ?
                                <div className="d-flex gap-3 align-items-center">
                                    <FaUserCircle style={{height:"40px"}}></FaUserCircle>
                                    <Link onClick={logOut}>
                                    <Button variant="secondary">Logout</Button>

                                        </Link>

                                </div>
                                    :
                                    <>
                    <Link to="/login/login">
                    <Button variant="secondary">Login</Button>

                        
                        </Link>
                                    
                                    </>

                            }


                           
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;