import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './img/logo.png';
import call from './img/call.png';
import chat from './img/chat.png';
import email from './img/mail.png';
import './css/contactUs.css';

const handleClick=() => {
    window.location.replace('http://localhost:3002/');
  };

class contactUs extends Component{

  render() {
    return(
        <div>
            <div className = 'contact-content'>

                <div className='logo'>
                    <a onClick ={handleClick}><img src = {logo}/></a>
                </div>
                <br/><br/><br/><br/><br/>
                <center>
                    <h2>Contact Us</h2>
                    <br/>
                    <h6>We are help for you</h6>
                </center>
                <br/><br/><br/><br/>
                <center>
                    <div className='c-row'>
                        <div className='call'>
                            <img src = {call} width="100"/>
                            <h5>Call Us</h5>
                            <p>071 - 2345678</p>
                        </div>
                        <div className='chat'>
                            <img src = {chat} width="100"/>
                            <h5>Chat Live</h5>
                            <button><a href = "/chat">chat now</a></button>
                        </div>
                        <div className='email'>
                            <img src = {email} width="100"/>
                            <h5>E-mail</h5>
                            <button><a href = "/sendEmail">E mail</a></button>
                        </div>
                    </div>
                    <br/><br/>

                    <center><button className='btn' style={{background:'rgb(177, 147, 206)',color:'white'}}><a href = "/" style={{color:'white'}}>FeedBacks</a></button>
            </center> <br/><br/>
                    <p>
                    Jacklup Solutions is a full-service IT company specializing in software development, event planning, graphic designing, and photography. With a team of 
                               experienced professionals, we deliver innovative and high-quality solutions to meet the needs of businesses and individuals
                    </p>
                </center>
                
            </div>
        </div>
    );
  }
}

export default contactUs;