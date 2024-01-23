import React, {Component} from 'react';
import axios from 'axios';

import logo from './img/whitelogo.png';
import FeedbackTableRow from './adminFeedbackTableRow';
import './css/adminViewFeedback.css';
import jsPDF from "jspdf";
import 'jspdf-autotable';



class adminViewFeedback extends Component{

    constructor(props) {
        super(props);
        this.state = {feedback : [],search:''};

        this.onChangeSearch = this.onChangeSearch.bind(this);
    }

    onChangeSearch(e){
        this.setState( {
           search: e.target.value
        });

    }

    componentDidMount() {
        // alert('email is ' +this.props.match.params.id);
        axios.get('http://localhost:4000/jacklup/searchfeedback/'+this.props.match.params.id)
            .then(response => {
                this.setState({feedback : response.data});

            })
            .catch(function (error){
                console.log(error);
            })
    }

    tabRow(){
        return <FeedbackTableRow obj={this.state.feedback}/>
    }

  render() {
    return(
        <div>
            <div className='top-tittle'>
                <a href = "/"><img src = {logo}/></a>
                <p style={{color:'white',marginLeft:50}}>
                    Admin Panel
                </p>
            </div>
            <div class="sidebar">
                <a href="">Service Management</a>
                <a href="">Shedule</a>
                <a href="">Homework</a>
                <a href="" className='active'>Customer Support</a>
                <a href="">Employee Management</a>
                <a href="">User Management</a>
                <a href="">Setting</a>
            </div> 

            <br/>
            <div>
            <from style ={{marginLeft:1350,display:'flex',gap:5}} onSubmit={this.onSubmit}>
                <div className="form-group" style ={{float:'right'}}>
                    <a href ={"/adminViewFeedback"} style ={{float:'right',background:'#313332',padding:7,borderRadius:5,color:'white',textDecoration:'none'}}>Go Back</a>
                </div>
            </from>
            <table className="table table-striped" style = {{marginTop :20,width:'75%',marginLeft:300}}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Type</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th colSpan="2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.tabRow()}
                </tbody>
            </table>
            <br/>
            <hr/>
            <br/>
            </div>
            
        </div>
    );
  }
}

export default adminViewFeedback;