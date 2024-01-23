import {Button} from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Item.css";


const handleClick=() => {
  window.location.replace('http://localhost:3005/OrderInformation/');
};

const Item = (props) => {
    const history = useNavigate ();
    const { _id, name, category, description, price, image } = props.item;
    const deleteHandler = async () => {
     await axios
          .delete(`http://localhost:5000/items/${_id}`)
          .then((res) => res.data)
          .then(() => history("/"))
          .then(() => history("/items"));   
     };

     return (
     <div className = "card" >
         <img src={image} alt={name} />
         <article> {category} </article>
         <h3> {name} </h3>
         <p>{description} </p>
         <h3>Rs. {price} up </h3>
          <Button>   <a onClick = {handleClick} style={{cursor: "pointer"}}> Make Order</a>
              {/* LinkComponent={Link} to={``} sx={{ bgcolor: "#8a2be2" ,mt: "auto"}} variant="contained"   color="primary" > Make Order */}
            </Button>
         




    </div>
  );
};

export default Item;