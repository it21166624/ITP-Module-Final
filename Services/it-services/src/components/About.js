import { Box, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom"
import logo from "./img/logo.png";

const About = () => {
  const [value,setValue] = useState();
  return <div>
    
    <div className='top-tittle'>
    <div> <img src = {logo}/></div>

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
    <a href="">Shedule</a>
    <a href="">Homework</a>
    <a href="" >Customer Support</a>
    <a href="">Employee Management</a>
    <a href="">User Management</a>
    <a href="">Setting</a>
</div> 



<br/>




  </div>;
};

export default About;