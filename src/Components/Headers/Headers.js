import React from 'react';
import { Container, Nav, Navbar,Button, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import logo from '../../iamges/carlogo-removebg-preview.png'
import useAuth from '../hooks/useAuth';

const Headers = () => {
  const{user,logout,admin}=useAuth()
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
      
    
      <Nav.Link className=" text-dark"  as={Link} to="/explore" >Explore</Nav.Link>
      <Nav.Link className=" text-dark" as={Link} to="/contact" >Contact </Nav.Link> 
       <Nav.Link className="text-dark"  as={Link} to="/login" >Login</Nav.Link>
        
       <span className="fs-6  mt-2 text-dark">{user.displayName}</span> 
      
   
      
   {
                   user?.email &&
                   <div className="d-flex">
                   <NavDropdown className="fs-6 dark text-dark"title="DashBoard" id="basic-nav-dropdown">
          {admin && <div>
          <NavDropdown.Item as={Link} to="/manage">Manage All Orders</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/adduser">Add a product</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/about">Make an admin</NavDropdown.Item>
          
          <NavDropdown.Item as={Link} to="/manageProduct">Manage Products</NavDropdown.Item>
          
        
   </div>}
          <NavDropdown.Item as={Link} to="/pay">Pay</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/myorders">My orders</NavDropdown.Item>
          <NavDropdown.Item as={Link}to="/review">Review</NavDropdown.Item>
        
          <NavDropdown.Item as={Link} onClick={logout}>LogOut</NavDropdown.Item>
        </NavDropdown>
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