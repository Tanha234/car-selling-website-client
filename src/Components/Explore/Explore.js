import React from 'react';
import  { useEffect, useState } from 'react';
import { Card, Col, Row,Button } from 'react-bootstrap';
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';

const Explore = () => {
    const[products,setProducts]=useState([]);
    useEffect(()=>{
        Aos.init({duration:1000})
        fetch('http://localhost:7000/cars')
        .then(res=>res.json())
        .then(data=>setProducts(data))

    },[])
    
    return (
        <div className="exlpore">
            <Row xs={1} md={3} className="g-2 mx-5 px-5">
                {
                    products.map(product=>

                    
                
  
    <Col>
      <Card  className="w-75 products "data-aos="fade-up">
        <Card.Img data-aos="zoom-in" variant="top" className="w-100" src={product.img} />
        <Card.Body >
          <Card.Title data-aos="fade-up">{product.name}</Card.Title>
          <Card.Text data-aos="fade-up">
          {product.description.slice(0,150)}
          </Card.Text>
          <Card.Title data-aos="fade-up"> ${product.price}</Card.Title>
        </Card.Body>
        <Link to="/purchase">
        <Button className="product-btn px-5 mb-3" ><i class="fas fa-shopping-cart"></i>  Purchase</Button>
        </Link>
      </Card>
    </Col>

  )
}
</Row>
            
        </div>
    );
};

export default Explore;