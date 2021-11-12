import React from 'react';
import { Button } from 'react-bootstrap';

const Contact = () => {
    
    return (
        <div className="contact d-flex  contact">
            <div className="col-md-6">
                <h2/>
            </div>
        <div className=" col-md-6 pt-5">
            <h1 className="text py-4">Contact Us</h1>
              
              <input  className="w-75 mb-4 py-2" type="text" name="" placeholder="Enter Your Name" id="" />
              <br/>
             
       
              <input  className="w-75 mb-4 py-2 " type="email" name="" placeholder="Enter Your Email" id="" />
              <br/>
          
              <input  className="w-75 mb-4 py-2" type="number" name="" placeholder="Enter Your mobile number" id="" />
              <br/>
             
              <br/>
              <textarea className="w-75 h-25"name="Message" placeholder="Message" form="usrform"></textarea>
              <br/>
              <Button className="px-5 py-2 my-4" variant="secondary">Submit</Button>

          </div>
          </div>
    );
};

export default Contact;