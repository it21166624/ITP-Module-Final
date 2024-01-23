
import React from "react";
import logo from './img/logo.png';
const graph = () => {
  return (
   <div className='top-nav'>
  <div className='logo'>
      <img src = {logo}/>
  </div>
  <div className='nav-item'>
       <ul>
          <li>
              <a href = "">Home</a>
          </li>
          <li>
              <a href = "">Offers</a>
          </li>
          <li>
              <a href = "">About Us</a>
          </li>
          <li>
              <a href = "">Contact Us</a>
          </li>
       </ul>
  </div>
  <div className='sign-in'>
       <button>Sign In</button>
  </div>
</div>
  );
  }
export default graph;