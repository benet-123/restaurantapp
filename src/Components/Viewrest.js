import React from 'react';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { Col } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Restoperation from './Restoperation';




export default function Viewrest() {
    const urlParams=useParams()
    console.log(urlParams.id);

    const[restaurantlist,setrestaurantlist]=useState([])
    //create a function for api call
    const getRestaurant=async()=>{
//asynch await
await fetch('/restaurants.json')  //asynchonus call
.then((data)=>{
      data.json()
      .then((result)=>{  //2 then is used to determine what is next
        setrestaurantlist(result.restaurants);

      })
})
    }
    console.log(restaurantlist);
    useEffect(()=>{  //it is a hook.to call the function
        getRestaurant()
    },[])

    const viewrest=restaurantlist.find(item=>item.id==urlParams.id)
    console.log(viewrest);

  return (
    <div>
     {
        viewrest?(
             <Row>
            
                <Col md={3} className='m-4'>
                <Image fluid style={{height:'300px',marginLeft:'50%',marginTop:'20px'}} src={viewrest.photograph}/>
                </Col>

                <Col md={7}>
                <h4>{viewrest.name}</h4>
                <ListGroup className='mt-4 w-50'>
      <ListGroup.Item>Id: {viewrest.id}</ListGroup.Item>
      <ListGroup.Item>Cuisine type: {viewrest.cuisine_type}</ListGroup.Item>

      <ListGroup.Item>Neigborhood: {viewrest.neighborhood}</ListGroup.Item>
      <ListGroup.Item >Address: {viewrest.address}</ListGroup.Item>
    </ListGroup>
    <Restoperation/>

    
    

                </Col>
            
        </Row>
        ):'null'
     }

    </div>
  )
}
