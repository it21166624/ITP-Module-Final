import { Box, Button, Tab, Tabs, TextField, Toolbar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import jsPDF from "jspdf";
import "./css/Home.css";
import "./Item/Item.css";
import axios from "axios";
import logo from "./img/logo2.png";
import Item from "./Item/Item";
import UItem from "./Item/UItem";

const URL = "http://localhost:5000/items";

const fetchHandler = async() => {
  return await axios.get(URL).then((res)=> res.data);
};

const Home = () => {
  const [query, setQuery] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchHandler().then((data) => setItems(data.items));
  }, []);

  const handleSearch = () => {
    axios.get(`${URL}?q=${query}`)
      .then(res => setItems(res.data.items))
      .catch(err => console.log(err));
  };

const handleClick=() => {
  window.location.replace('http://localhost:3001/contactUs/');
};
const handleClick1=() => {
  window.location.replace('http://localhost:3000/');
};

const handleClick2=() => {
  window.location.replace('http://localhost:3005/AvailableVacancies/');
};



  const generatePDF = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/items`);
      const items = response.data.items;

      const doc = new jsPDF();

      // Add title
      doc.setFontSize(20);
      doc.setTextColor("#8a2be2");
      doc.text("Jacklup Solutions Price List", 105, 20, null, null, "center");

      // Add logo
      const logoImg = new Image();
      logoImg.src = logo;
      await new Promise(resolve => {
        logoImg.onload = resolve;
      });
      doc.addImage(logoImg, "PNG", 70, 20, 70, 30);

      // Add table of items
      doc.autoTable({
        startY: 50,
        head: [["No.", "Name", "Price (LKR)"]],
        body: items.map((item, index) => [index + 1, item.name, item.price]),
      });

      doc.save("Price List.pdf");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className='top-tittlee'>
        <div> <a href = "/Items"> <img src = {logo}/> </a></div>
        <Toolbar>
          <div className='navi'>
            <a href = "">Home</a>
            <a onClick = {handleClick1} style={{cursor: "pointer"}}>Offers</a>
            <a onClick = {handleClick2} style={{cursor: "pointer"}}>Careers</a>
            <a onClick = {handleClick} style={{cursor: "pointer"}}>Contact Us</a> 
          </div>
        </Toolbar>
      </div>

      <br/>

      <Box sx={{ display: 'flex', alignItems: 'center',gap:5, justifyContent: 'center', mb: '1rem' }}>
        <TextField label="Search" variant="outlined" value={query} onChange={(e) => setQuery(e.target.value)} sx={{ mr: '1rem' }} />
        <Button variant="contained" onClick={handleSearch}>Search</Button>
        
        <Button 
          onClick={generatePDF}
          sx={{ bgcolor: "#8a2be2" }}
          variant="contained" 
          color="primary" 
        >
          Price List
        </Button>
      </Box>



      <div>
        <ul>
          {items &&
            items.map((item, i) => (       
            <li key={i}>
              <UItem item={item} />
            </li>
          ))}
        </ul>
      </div> 
    </div>
  );
};

export default Home;
