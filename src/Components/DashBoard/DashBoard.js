import React, { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
   
    useParams,
    useRouteMatch
  } from "react-router-dom";
import DashboardHome from './DashboardHome/DashboardHome';
import MakeAdmin from './DashboardHome/MakeAdmin/MakeAdmin';

const DashBoard = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let { path, url } = useRouteMatch();
    return (
        <div className="py-5 dashboard">
       
  

  
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>DashBoard</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
       
        <Link to={`${url}`}>DashBoard</Link>
        <br/>
        <Link to={`${url}/manage`}>Manage All Orders</Link>
        <br/>
        <Link to={`${url}/addproduct`}>Add a product</Link>
        <br/>
        <Link to={`${url}/makeadmin`}>Make Admin</Link>
        <br/>
        <Link to={`${url}/manageproduct`}>Manage Products</Link>
       
       
         <br/>

         <Switch>
          <Route  path="/">
              <DashboardHome/>
        
          </Route>
          <Route path={`${path}/makeadmin`}>
          <MakeAdmin/>
          </Route>
        </Switch>
   
  
         
        </Offcanvas.Body>
      </Offcanvas>

        </div>
    );
};

export default DashBoard;