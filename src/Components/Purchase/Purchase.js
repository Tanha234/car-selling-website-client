import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../hooks/useAuth';

const Purchase = () => {
    const[item,setItem]=useState({})
    const { register, handleSubmit } = useForm();
    const{user}=useAuth()
    const{id}=useParams()
    useEffect(()=>{
        fetch(`https://agile-tor-83300.herokuapp.com/cars/${id}`)
        .then(res=>res.json())
        .then(data=>setItem(data))
    })
    const onSubmit = data => {
        console.log(data);
        alert("Submitted")
        
    } 
    const onButton=()=>{
        

        
    }
    return (
        <div>
            <h2>Confirm Your Order</h2>
        <div className="d-flex py-5">
            
            
         <div className="col-md-6">
         <Row xs={1} md={1} className="g-4">
                    {
               
                    <Col >
                <Card className="w-50 mx-auto mb-4 place-card">
                      <Card.Img className="img-fluid " variant="top" src={item.img}/>
                      <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                          {item.description}
                        </Card.Text>
                        <Card.Title>Travel Cost:${item.price}</Card.Title>
                       
                      </Card.Body>
                      
                    </Card>
                  </Col>

            
                    }

                  
              </Row>
             
         </div>
         <div className="col-md-6">
         <form onSubmit={handleSubmit(onSubmit)}>
                   <label className="fs-5 me-5">Name:</label>
      <input className="w-75 my-3 py-2" defaultValue={user.displayName} {...register("name")} />
      <br/>
      <label className="fs-5 me-5">Email:</label>
      <input className="w-75 my-3 py-2 " defaultValue={user.email} {...register("email")} />
      <br/>
      <label className="fs-5 me-4">Address:</label>
      <input className="w-75 my-3 py-2"{...register("address")} />
     <br/>
     
      <label className="fs-5 me-4">Phone:</label>
      <input className="w-75 my-3 py-2"{...register("phone")} />
     <br/>
     
      <input onChange={onButton}className="regular-button px-5 py-2" type="submit"> 
    
          </input>
      
      

    </form>
         </div>
        
            
            
        </div>
        </div>
    );
};

export default Purchase;