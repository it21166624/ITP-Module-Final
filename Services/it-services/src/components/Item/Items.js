import React, { useEffect, useState } from "react";
import "./Item.css";
import axios from "axios";
import Item from "./Item";
import logo from "./img/logo.png";
import { Tab, Tabs } from "@mui/material";
import { NavLink } from "react-router-dom";


const handleClick=() => {
   window.location.replace('http://localhost:3000/AdminOfferHome/');
 };

 const handleClick2=() => {
   window.location.replace('http://localhost:3003/AdminProjectHome/');
 };

 
 const handleClick3=() => {
  window.location.replace('http://localhost:3001/adminViewFeedback/');
};

const handleClick4=() => {
  window.location.replace('http://localhost:3004/adminHome/');
};

const handleClick5=() => {
  window.location.replace('http://localhost:3005/employeeview/');
};

const handleClick6=() => {
  window.location.replace('http://localhost:3005/OrderAll/');
};

const handleClick7=() => {
  window.location.replace('http://localhost:3005/PaymentHistory/');
};

const URL = "http://localhost:5000/items";
const fetchHandler = async() => {
   return await axios.get(URL).then((res)=> res.data);
};
const Items = () => {
   const [value,setValue] = useState();
    const [items, setItems] = useState();
    useEffect(() => {
       fetchHandler().then((data) => setItems(data.items));
    }, []);
    console.log(items);
    return (
      <div>
      <div className='top-tittle'>
      <div> <a href="/"> <img src = {logo}/> </a> </div>
      <p>
      <Tabs
       sx={{ml:'auto'}}
       textColor="primary" 
       indicatorColor="secondar" 
       value={value} 
       onChange={(e,val)=>setValue(val)}>
      <Tab LinkComponent={NavLink} to="/add" label="Add item"/>
      <Tab LinkComponent={NavLink} to="/Items" label="Services"/>
      <Tab LinkComponent={NavLink} to="/about" label=" HIBERNATED"/>
      
      </Tabs>
      
    </p>     









      <div className='side-tittle'>
      </div>  </div>


      


      <div class="sidebar"> 
      <p style={{color:'white',marginLeft:50,marginBottom:30,marginTop:20, fontSize:20,}}>
              Admin Panel
          </p>
          <a href="" className='active'>Service Management</a>
          <a onClick = {handleClick} style={{cursor: "pointer"}} > Offer Management</a>
          <a onClick = {handleClick2} style={{cursor: "pointer"}} > Project Management</a>
          <a onClick = {handleClick3} style={{cursor: "pointer"}}> Customer Support</a>
          <a onClick = {handleClick5} style={{cursor: "pointer"}}>Employee Management</a>
          <a onClick = {handleClick4} style={{cursor: "pointer"}}>User Management</a>
          <a onClick = {handleClick6} style={{cursor: "pointer"}}>Order Management</a>
          <a onClick = {handleClick7} style={{cursor: "pointer"}}>Payment Management</a>
      </div> 
  
      <br/>
  






    <div>
     <ul>
        {items &&  
         items.map((item, i) => (
            <li key={i}>
              <Item item={item} />
           </li>
       ))}
      </ul>
  </div></div>
    );
};

export default Items;