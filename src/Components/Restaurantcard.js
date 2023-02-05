import React from 'react'
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function Restaurantcard({restaurant}) {
    console.log(restaurant);
 
  return (

<Col sm={12} md={6} lg={4} xl={3}>
<Link to={`viewrest/${restaurant.id}`} style={{textDecoration:'none',color:'white'}}>
       <Card  className='mt-4'>
      <Card.Img style={{height:'250px'} } className="p-2 " variant="top" src={restaurant.photograph} />
      <Card.Body>
        <Card.Title>{restaurant.name}</Card.Title>
        <Card.Text>
         {restaurant.neighborhood}
        </Card.Text>
      </Card.Body>
    </Card>
   
 </Link>

  </Col>

    
  )
}
