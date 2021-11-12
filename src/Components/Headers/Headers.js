import React from 'react';
import { Container, Nav, Navbar,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import logo from '../../iamges/carlogo-removebg-preview.png'
import useAuth from '../hooks/useAuth';

const Headers = () => {
  const{user,logout}=useAuth()
    return (
        <div className="head">
            <Navbar collapseOnSelect expand="lg"  variant="dark">
  <Container>
  <Nav >
      <img className="w-25 justify-content-start me-5 pe-5" src={logo} alt=""/>
  </Nav>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav >
      <Nav.Link className="me-2 text-white"  as={Link} to="/home" >Home</Nav.Link>
      
      <Nav.Link className="me-2 text-white"  as={Link} to="/about" >About</Nav.Link>
      <Nav.Link className="me-2 text-white"  as={Link} to="/explore" >Explore</Nav.Link>
      <Nav.Link className="me-2 text-white" as={Link} to="/contact" >Contact </Nav.Link>
      <Nav.Link className="me-2 text-white"  as={Link} to="/login" >Log in</Nav.Link>
      <span className="fs-6 ms-2 mt-2 text-white">{user.displayName}</span>
      
   
      
      {
                   user?.email &&<Button variant="secondary" className="ms-5" onClick={logout}>Logout  <i className="fas fa-arrow-right"></i></Button>
                 }
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Headers;