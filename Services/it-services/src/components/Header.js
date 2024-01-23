import React, { useState } from "react"
import {AppBar, Tab, Tabs, Toolbar, Typography} from "@mui/material";
import { NavLink } from "react-router-dom";
import logo from "./img/logo.png";
const Header = () => {
    const [value,setValue] = useState();
  return (
    <div>
        <AppBar sx={{ backgroundColor: "#1E0046" }} position="sticky">
            <Toolbar>
                <NavLink to="/" style={{color:"white"}}>
                
                <div> <a href = "/"> <img src = {logo}/> </a></div>
            
                </NavLink>
                     <Tabs 
                        sx={{ml:'auto'}}
                textColor="inherit" 
                indicatorColor="White" 
                value={value} 
                onChange={(e,val)=>setValue(val)}>

                    <Tab LinkComponent={NavLink} to="/add" label="Add item"/>
                    <Tab LinkComponent={NavLink} to="/Items" label="Services"/>
                    <Tab LinkComponent={NavLink} to="/about" label=" HIBERNATED"/>
                </Tabs>
            </Toolbar> 
           
        </AppBar>
    </div>
  );
};

export default Header;