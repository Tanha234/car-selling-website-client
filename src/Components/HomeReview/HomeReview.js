import React, { useEffect, useState } from 'react';
import { Card, Col, Row,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeReview = () => {
    const[review,setReview]=useState([])
    useEffect(()=>{
        fetch("https://agile-tor-83300.herokuapp.com/review")
        .then(res=>res.json())
        .then(data=>setReview(data))

    },[])
    return (
        <div className="bg-dark">
            <h2 className="text-white py-5">Customer's Review:{review.length}</h2>
           <Row xs={1} md={12} className="g-2 mx-5 px-5">
                {
                    review.map(product=>

                    
                
  
    <Col>
      <Card  className="w-75 products "data-aos="fade-up">
      
        <Card.Body >
          <Card.Title data-aos="fade-up">{product.name}</Card.Title>
          <Card.Text data-aos="fade-up">
          {product.description.slice(0,150)}
          </Card.Text>
      
        </Card.Body>
        
      </Card>
    </Col>

  )
}
</Row>

        </div>
    );
};

export default HomeReview;