import { 
  Button, 
  Checkbox, 
  FormControlLabel, 
  FormLabel, 
  Tab, 
  Tabs, 
  TextField, 
  Typography, 
} from "@mui/material";
import {Box} from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import {NavLink, useNavigate } from "react-router-dom"
import logo from "./img/logo.png";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const AddItems = () => {
  
    const history = useNavigate ();
    const[inputs, setInputs] = useState ({
      name:"",
      description:"",
      price:"",
      category:"",
   
      image:"",
    });
const [checked,  setChecked] = useState(false);
const handleChange = (e) => {
  setInputs((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value,
  }));



  
//console.log(e.target.name, "Value" , e.target.value);
};

const GenderDropdown = ({ value, onChange }) => {
  const genderOptions = [
    { value: "", label: "Select gender" },
    { value: "Male", label: "Male" },
    { value: "female", label: "Feale" },
    { value: "Non-binary", label: "Non-binary" },
 
  ];
};

const [value,setValue] = useState();
const sendRequest = async() => {
  await axios
  .post ("http://localhost:5000/items",{
    name:String(inputs.name),
    category:String(inputs.category),
    description:String(inputs.description),
    price:Number(inputs.price),
    image:String(inputs.image),
    available:Boolean(checked),  
  })
  .then((res) => res.data);
};

const handleSubmit= (e) => {
  e.preventDefault();
  console.log(inputs,checked);
  sendRequest() .then(()=>history('/items'));
};


  return (

    <div>
    <div className='top-tittle'>
    <div> <img src = {logo}/></div>



    <p>
      <Tabs
       sx={{ml:'auto'}}
       textColor="primary" 
       indicatorColor="secondary" 
       value={value} 
       onChange={(e,val)=>setValue(val)}>
      <Tab LinkComponent={NavLink} to="/add" label="Add item"/>
      <Tab LinkComponent={NavLink} to="/Items" label="Services"/>
      <Tab LinkComponent={NavLink} to="/about" label=" HIBERNATED"/>
      
      </Tabs>
      
    </p>















    <div className='side-tittle'>
    </div>
    </div>  

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

    <div>
    <form onSubmit={handleSubmit}>
     <Box
        display="flex"
        flexDirection="column"
        justifyContent={"center"}
        maxWidth={700}
        alignContent={"center"}
        alignSelf={"center"}
        marginLeft={"auto"}
        marginRight={"auto"}
        marginTop={10}
     >
    <FormLabel>Name</FormLabel>
    <TextField 
          input type ="text" required placeholder = "Please enter Service name"
          value={inputs.name} 
          onChange= {handleChange} 
          margin="normal" 
          fullWidth 
          variant="outlined" 
          name="name" 
    />

<FormLabel>Gender</FormLabel>
  

<select>
  
  <option value="male">Male</option>
  <option value="female">Female</option>
  <option value="non-binary">Non-binary</option>
</select>



<GenderDropdown value={inputs.gender} onChange={handleChange} />


    


    
    <FormLabel>Category</FormLabel>
    <TextField 
           input type ="text" required placeholder = "Please enter Category name"
           value={inputs.category} 
           onChange= {handleChange} 
           margin="normal" 
           fullWidth 
           variant="outlined" 
           name="category" 
    />
    <FormLabel>Description</FormLabel>
    <TextField 
           input type ="text" required placeholder = "Please enter Description"
           value={inputs.description} 
           onChange= {handleChange} 
           margin="normal" 
           fullWidth 
           variant="outlined" 
           name="description" 
    />
    <FormLabel>Price</FormLabel>
    <TextField
          input type ="number" required placeholder = "Please enter numbers Only"
           value={inputs.price} 
           onChange= {handleChange}
           margin="normal"
           fullWidth 
           variant="outlined" 
           name="price" 
    />
     <FormLabel>Image</FormLabel>
    <TextField 
           input type ="text" required placeholder = "Please enter Valid URL"
           value={inputs.image} 
           onChange= {handleChange}
           margin="normal" 
           fullWidth 
           variant="outlined" 
           name="image" 
    />








    <Button sx={{ backgroundColor: "#1E0046" }}  variant="contained" type="submit" >
      Add
    </Button>
    </Box>
  </form>
  </div>
    
</div>
  

    




  );
};

export default AddItems;