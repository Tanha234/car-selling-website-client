import React, { useEffect, useState } from 'react';
import { Card, Col, Row,Button } from 'react-bootstrap';
import Aos from "aos";
import "aos/dist/aos.css";

const Vehicle = () => {
    const[vehicle,setVehicle]=useState([])
    useEffect(()=>{
        Aos.init({duration:1000})
        fetch('http://localhost:7000/cars')
        .then(res=>res.json())
        .then(data=>setVehicle(data.slice(0,4)))

    },[])
    return (
        <div className="py-5 bg-dark">
            <h3 className="text-white">OUR SERVICES</h3>
           <p className="text-white"> WE ARE OFFERING VEHICLE SERVICES 24/7</p>
            <Row xs={1} md={4} className="g-2 mx-5 px-5">
                {
                 vehicle.map(product=>

                    
                
  
    <Col>
      <Card  className="w-75 h-100 products "data-aos="fade-left">
        <Card.Img data-aos="zoom-in" className="w-25" variant="top" className="w-100" src={product.service_img} />
        <Card.Body >
            
          <Card.Title  className="fs-4"data-aos="fade-up">{product.service}</Card.Title>
          
          {/* <Card.Text>{product.about?.slice(0,70)}</Card.Text> */}
        </Card.Body>
       
      </Card>
    </Col>

  )
}
</Row>
            
        </div>
    );
};

export default Vehicle;