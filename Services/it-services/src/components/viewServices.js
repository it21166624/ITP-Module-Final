import React, {Component} from 'react';
import axios from 'axios';

import logo from './img/logo.png';
import maintittle from './img/maintittle.png';
import './css/viewServices.css';
import serviceTableRow from './serviceTableRow';



class viewServices extends Component{

    constructor(props) {
        super(props);
        this.state = {item : []};
    }

    componentDidMount() {
        // alert('email is ' +this.props.match.params.id);
        axios.get('http://localhost:4000/jacklup/item')
            .then(response => {
                this.setState({item : response.data});

            })
            .catch(function (error){
                console.log(error);
            })
    }

    tabRow(){
        return this.state.item.map(function (object, i){
            return <serviceTableRow obj = {object} key = {i}/>;
        });
    }

  render() {
    return(
        <div>
                
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

            <div className='main-tittle'>
                <img src ={maintittle} />
            </div>

            
            <div style={{paddingLeft:200,paddingRight:200,display:'flex',maxWidth:50}}>
                {this.tabRow()}
            </div>
            <br/><br/>
            <center>
                <button className='btn' style={{background:'rgb(177, 147, 206)',color:'white'}}><a href = "/add" style={{color:'white'}}>Add </a></button>&nbsp;&nbsp;
                <button className='btn' style={{background:'rgb(177, 147, 206)',color:'white'}}><a href = "/adminviewServices" style={{color:'white'}}>View More</a></button>
            </center>
        </div>
    );
  }
}

export default viewServices;