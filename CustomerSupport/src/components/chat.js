import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import logo from './img/logo.png';
import './css/chat.css';
import ChatTable from './chatTableRow';



class chat extends Component{
    constructor(props){
        super(props);

        this.onChangeMessage = this.onChangeMessage.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            message:'',
            chat : []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:4000/jacklup/chat/')
            .then(response => {
                this.setState({chat : response.data});

            })
            .catch(function (error){
                console.log(error);
            })
    }

    tabRow(){
        return this.state.chat.map(function (object, i){
            return <ChatTable obj = {object} key = {i}/>;
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
            message : this.state.message
        };

                        axios.post('http://localhost:4000/jacklup/addchat',obj)
                        .then(res => {
                            // alert("Feedback Send Successfully");
                            this.setState({
                                message:''
                    
                            })
                            console.log(res.data)});
                        window.location.replace('/chat');
                    
    }

  render() {
    return(
        <div>
            <div className='content'>

                <div className='logo'>
                    <a href = "/"><img src = {logo}/></a>
                </div>
                <br/><br/><br/><br/>
                <div className='row'>
                    <div className='col-lg-4 left-side'>
                         <h4>Chat With <br/> Us</h4>
                         <br/><br/>
                         <p>We are available in 24/7 Hours.</p>
                         <h6>My Chat(1)</h6>

                         <div className='left-side-chat'>
                            <div className='left-side-chat-outer'>
                               <div className='left-side-chat-inner'>
                                  <img src = "https://thumbs.dreamstime.com/b/man-profile-cartoon-smiling-round-icon-vector-illustration-graphic-design-135443422.jpg"/>
                                  <h6>Unknown <br/>
                                      New message
                                  </h6>
                               </div>
                            </div>
                         </div>
                    </div>
                    
                    <div className='col-lg-8'>
                        <br/><br/><br/><br/>
                        <div className='right-side-top'>
                            <img src = "https://thumbs.dreamstime.com/b/man-profile-cartoon-smiling-round-icon-vector-illustration-graphic-design-135443422.jpg"/>
                            <h5>Unknown</h5>
                        </div>
                        <br/>
                        <div className='outer'>
                            <div className='right-side-chat'>
                                {this.tabRow()}
                            </div>
                            <br/>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                   <textarea required  className="form-control" value={this.state.message} onChange = {this.onChangeMessage}></textarea>
                                </div>
                                <div className="form-group">
                                    <input type = "submit" value = "Send" className = "btn" style={{background:'purple',color:'white'}} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default chat;