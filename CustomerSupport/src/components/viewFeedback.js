import React, {Component} from 'react';
import axios from 'axios';

import logo from './img/logo.png';
import maintittle from './img/maintittle.png';
import './css/viewFeedback.css';
import FeedbackTableRow from './feedbackTableRow';

const handleClick=() => {
    window.location.replace('http://localhost:3002/');
  };

class viewFeedback extends Component{

    constructor(props) {
        super(props);
        this.state = {feedback : []};
    }

    componentDidMount() {
        // alert('email is ' +this.props.match.params.id);
        axios.get('http://localhost:4000/jacklup/feedback/')
            .then(response => {
                this.setState({feedback : response.data});

            })
            .catch(function (error){
                console.log(error);
            })
    }

    tabRow(){
        return this.state.feedback.map(function (object, i){
            return <FeedbackTableRow obj = {object} key = {i}/>;
        });
    }

  render() {
    return(
        <div>
                
            <div className='top-nav'>
                <div className='logo'>
                    <a onClick ={handleClick}><img src = {logo}/></a>
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
                            <a href = "/addFeedback">About Us</a>
                        </li>
                        <li>
                            <a href = "/contactUs">Contact Us</a>
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
                <button className='btn' style={{background:'rgb(177, 147, 206)',color:'white'}}><a href = "/addFeedback" style={{color:'white'}}>Add Feedback</a></button>&nbsp;&nbsp;
                <button className='btn' style={{background:'rgb(177, 147, 206)',color:'white'}}><a href = "/adminViewFeedback" style={{color:'white'}}>View More</a></button>
            </center>
        </div>
    );
  }
}

export default viewFeedback;