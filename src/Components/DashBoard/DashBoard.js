import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';





const DashBoard = () => {
  
  const{user}=useAuth();
  return (
    <div>
  
    <div className="d-flex">
       
        <div className="col-md-2">
        <Container className=" classy">
<Row md={1}>
<Link className="colp mt-3" to="/pay">Pay</Link>
  <Link className="colp mt-3" to="/myorders">My orders</Link>
  
 

  <Link className="colp mt-3" to="/review">Review</Link>
  
  

</Row>
</Container>
        </div>
        <div className="col-md-10 pt-5 ps-5">
               <h1 className="text pt-5">Welcome {user.displayName}</h1> 
            
        </div>
     
        
    </div>
    </div>
);
};

export default DashBoard;