import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Marquee from "react-fast-marquee";
import { authContext } from '../../../Provider/AuthProvider';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';



const Header = () => {
  const {user}=useContext(authContext)
    return (
        <Container>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p className='text'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D,YYYY")}</p>
            </div>
            <div className="d-flex shadow-lg py-2 px-3">
                <Button variant="danger">Danger</Button>
                <Marquee className='text-danger' speed={100}>
                    I can be a React component, multiple React components, or just some text.
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            {/* <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
           
          </Nav>
          <Nav className='d-flex align-items-center'>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <Button variant="secondary">Profile</Button>{' '}

            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}

        </Container>

    );
};

export default Header;