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
    exportPDF = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape
    
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);
    
        doc.setFontSize(15);
    
        const title = "Feedback Report";
        const headers = [["Id","Type", "Email","Message"]];
    
        const data = this.state.feedback.map(elt=> [elt._id, elt.type, elt.email, elt.message]);
    
        let content = {
          startY: 50,
          head: headers,
          body: data
        };
    
        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("FeedbackReport.pdf")
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
            <from style ={{marginLeft:1200,display:'flex',gap:5}} onSubmit={this.onSubmit}>
                <div className="form-group">
                    <input type ="text" required value={this.state.search} onChange = {this.onChangeSearch} className="form-control"/>
                </div>
                <div className="form-group" style ={{float:'right'}}>
                    <a href ={"/adminSearchFeedback/"+this.state.search} style ={{float:'right',background:'#313332',padding:7,borderRadius:5,color:'white',textDecoration:'none'}}>Search</a>
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
                <button className='btn btn-primary' onClick={() => this.exportPDF()} style={{marginLeft:800}}>Export Result</button>
            <hr/>
            <br/>
            </div>
            
        </div>
    );
  }
}

export default adminViewFeedback;