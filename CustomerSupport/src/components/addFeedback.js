import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import logo from './img/logo.png';
import back from './img/back1.png';
import './css/addFeedback.css';
import { AcroFormCheckBox, AcroFormRadioButton } from 'jspdf';

const handleClick=() => {
    window.location.replace('http://localhost:3002/');
  };

class addFeedback extends Component{
    constructor(props){
        super(props);

        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            type: '',
            email: '',
            message:''
        }
    }
    onChangeType(e){
        this.setState( {
            type: e.target.value
        });
    }
    onChangeEmail(e){
        this.setState( {
            email: e.target.value
        });
    }
    onChangeMessage(e){
        this.setState( {
            message: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
       
        const obj = {
            type : this.state.type,
            email : this.state.email,
            message : this.state.message
        };

                        axios.post('http://localhost:4000/jacklup/addfeedback',obj)
                        .then(res => {
                            alert("Feedback Send Successfully");
                            this.setState({
                                type: '',
                                email: '',
                                message:''
                    
                            })
                            console.log(res.data)});
                        window.location.replace('/');
                    
    }

  render() {
    return(
        <div>
            <div className='content'>

                <div className='logo'>
                    <a onClick = {handleClick}><img src = {logo}/></a>
                </div>
                <br/><br/><br/><br/><br/><br/><br/>
                <div className='row'>
                    <div className='col-lg-8'>
                        <div className='outer'>
                            <h5>How Can we Help You?</h5>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <select required  className="form-control" value={this.state.type} onChange = {this.onChangeType} >
                                        <option>- Please Choose -</option>
                                        <option value = "Problems">Problems</option>
                                        <option value = "Suggestions">Suggestions</option>
                                        <option value = "Complimets">Complimets</option>
                                        <option value = "Others">Others</option>
                                    
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>E-mail :</label>
                                    <input type ="email" required  className="form-control" value={this.state.email} onChange = {this.onChangeEmail} />
                                </div>
                                <div className="form-group">
                                    <label>Describe Your Feedback</label>
                                   <textarea required  className="form-control" value={this.state.message} onChange = {this.onChangeMessage}></textarea>
                                </div>
                                <div className="form-group">
                                    <input type = "submit" value = "Submit FeedBack" className = "btn" style={{background:'purple',color:'white'}} />

                                   
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                          <img src = {back} width="200"/>
                    </div>

                    <p style={{marginLeft:500,marginTop:50,fontWeight:'bold'}}>You Can Rate Our System <a href = "/addRating">Rating</a></p>
                </div>
            </div>
        </div>
    );
  }
}

export default addFeedback;