import {Button} from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Item.css";
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
          <Button LinkComponent={Link} to={`/items/${_id}`} sx={{ bgcolor: "black", mt: "auto",color: "white",'&:hover': { bgcolor: "grey" }}}color="primary"  >
            Update
            </Button>
            
          <Button color="error" onClick={deleteHandler} sx={{ bgcolor: "red",mt: "auto",color: "white",'&:hover': { bgcolor: "orange" }}}>
            Delete
            </Button>
    </div>
  );
};

export default Item;