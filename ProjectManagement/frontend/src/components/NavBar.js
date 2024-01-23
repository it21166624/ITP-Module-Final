import React, { Component } from 'react';

const handleClick=() => {
  window.location.replace('http://localhost:3002/');
};


export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a class="navbar-brand">
            <a onClick ={handleClick}><img src = {"/BlacjLogo.png"} width="150" height="70"/></a>

            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>





            <nav class="e d-flex justify-content-center">

              <a className="nav-link" href="/AdminProjectHome">Admin Project Home</a>
              {/* <a className="nav-link" href="#">About US</a> */}

              {/* <a className="nav-link" href="#">Contact US</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}


            </nav>


          </div>
        </nav>


      </div>


    )
  }
}
