import { 
    Box, 
    Button, 
    Checkbox, 
    FormControlLabel, 
    FormLabel, 
    TextField ,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ItemDetail = () => {
    const [inputs, setInputs] = useState();
    const id = useParams().id;
    const [checked, setChecked] = useState(false);
    const history = useNavigate();
    useEffect(() => { 
        const fetchHandler = async () => {
            await axios
            .get(`http://localhost:5000/items/${id}`)
            .then((res) => res.data)
            .then((data)=>setInputs(data.item));
        };
        fetchHandler();
    },[id]);

    const sendRequest = async()=> {
        await axios
        .put(`http://localhost:5000/items/${id}` , {
            name:String(inputs.name),
            category:String(inputs.category),
            description:String(inputs.description),
            price:Number(inputs.price),
            image:String(inputs.image),
            available:Boolean(checked),         
        })
        .then((res) => res.data);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(()=> history("/items"));
    };
    const handleChange = (e) => {
      setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
      }));
    };
   
return (
    <div>
     {inputs && (
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
          value={inputs.name} 
          onChange= {handleChange} 
          margin="normal" 
          fullWidth 
          variant="outlined" 
          name="name" 
    />
    <FormLabel>Category</FormLabel>
    <TextField 
           value={inputs.category} 
           onChange= {handleChange} 
           margin="normal" 
           fullWidth 
           variant="outlined" 
           name="category" 
    />
    <FormLabel>Description</FormLabel>
    <TextField 
           value={inputs.description} 
           onChange= {handleChange} 
           margin="normal" 
           fullWidth 
           variant="outlined" 
           name="description" 
    />
    <FormLabel>Price</FormLabel>
    <TextField
           value={inputs.price} 
           onChange= {handleChange}
           type="number"
           margin="normal"
           fullWidth 
           variant="outlined" 
           name="price" 
    />
     <FormLabel>Image</FormLabel>
    <TextField 
            required pattern="https?://.+"
           value={inputs.image} 
           onChange= {handleChange}
           margin="normal" 
           fullWidth 
           variant="outlined" 
           name="image" 
    />
    <FormControlLabel 
          control={
          <Checkbox 
          Checked = {checked} 
          onChange={()=>setChecked (!checked)} 
          />
        } 
          label="Discount Available" 
    />

    <Button sx={{ backgroundColor: "#1E0046" }}  variant="contained" type="submit" >
      Update
    </Button>
    </Box>
  </form>
  )} 
</div>
);
};

export default ItemDetail;