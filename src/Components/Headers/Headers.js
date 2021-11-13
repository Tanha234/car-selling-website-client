import React from 'react';
import { Container, Nav, Navbar,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import logo from '../../iamges/carlogo-removebg-preview.png'
import useAuth from '../hooks/useAuth';

const Headers = () => {
  const{user,logout}=useAuth()
    return (
        <div >
            <Navbar collapseOnSelect expand="lg" bg="secondary" variant="info">
              
  <Container>
  <Nav >
      <img className="w-25 justify-content-start me-5 pe-5" src={logo} alt=""/>
  </Nav>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav >
      <Nav.Link className="me-2 text-dark"  as={Link} to="/home" >Home</Nav.Link>
      
      <Nav.Link className=" text-dark"  as={Link} to="/about" >About</Nav.Link>
      <Nav.Link className=" text-dark"  as={Link} to="/explore" >Explore</Nav.Link>
      <Nav.Link className=" text-dark" as={Link} to="/contact" >Contact </Nav.Link> 
       <Nav.Link className="text-dark"  as={Link} to="/login" >Login</Nav.Link>
        
       <span className="fs-6  mt-2 text-dark">{user.displayName}</span> 
      
   
      
   {
                   user?.email &&
                   <div className="d-flex">
                   <Nav.Link className=" text-dark"  as={Link} to="/dashboard" >DashBoard</Nav.Link>
                   <Button variant="secondary" onClick={logout}>Logout  <i className="fas fa-arrow-right"></i></Button>
                   </div>
                 }
    </Nav> 
    
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Headers;