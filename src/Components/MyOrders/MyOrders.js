import React, { useEffect, useState } from 'react';
import { Table,Button } from 'react-bootstrap';
import DashBoard from '../DashBoard/DashBoard';

const MyOrders = () => {
    <DashBoard/>
    const[order,setOrder]=useState([])
    
    useEffect(()=>{
        fetch(`https://agile-tor-83300.herokuapp.com/orders`)
        .then(res=>res.json())
        .then(data=>setOrder(data))
    },[])
    const handleDelete=id=>{
        const proceed=window.confirm("Are you sure about delete?")
        if(proceed){
        const url=`https://agile-tor-83300.herokuapp.com/orders/${id}`
        fetch(url,{
        method:'DELETE'
        

    })
    .then(res=>res.json())
    .then(data=>{
        if(data.deletedCount>0){
            alert("Deleted SuccessFully");
            const remainingOrders=order.filter(orders=>orders._id!==id)
            setOrder(remainingOrders)
        }
    }

    )
    }
    }
    return (
        <div className="pass">
           <Table>
                        <thead className="bg-light">
                            <tr>
                                <th>Name</th>
                                <th>Email ID</th>
                              
                                <th>Shipping Address</th>
                                <th>Action</th>
                                
                            </tr>
                        </thead>
                        {
                            order.map(orders => {
                                return (
                                    <tbody key={orders._id} style={{ fontWeight: "500" }}>
                                        <tr>
                                            <td>{orders.name}</td>
                                            <td>{orders.email}</td>
                                          
                                            <td>{orders.address}</td>
                                                      <td> <Button onClick={()=> handleDelete(orders._id)}variant="danger">Cancel</Button> </td>
                                           
                                            
                                        </tr>
                                    </tbody>
                                )
                            })
                        }

                    </Table>
            
    
        </div>
    );
};

export default MyOrders;