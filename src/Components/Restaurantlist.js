import Restaurantcard from './Restaurantcard'
import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';

export default function Restaurantlist() {
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
  return (
   <Row>
{
 
 
   restaurantlist.map((item)=>(
    
    <Restaurantcard restaurant={item}/>
        
      ))
 


}
</Row> 
 )
}
