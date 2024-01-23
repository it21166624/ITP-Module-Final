import  React, {Component} from 'react';
import axios from 'axios'
import UserTableRow from './allUsersTableRow';
import jsPDF from "jspdf";
import 'jspdf-autotable';

import './css/profile.css';
import Footer from './footer';


const handleClick1=() => {
    window.location.replace('http://localhost:3002/');
  };

  
const handleClick=() => {
    window.location.replace('http://localhost:3000/AdminOfferHome/');
  };
 
  const handleClick2=() => {
    window.location.replace('http://localhost:3003/AdminProjectHome/');
  };
 
  
  const handleClick3=() => {
   window.location.replace('http://localhost:3001/adminViewFeedback/');
 };
 
 const handleClick4=() => {
   window.location.replace('http://localhost:3002/Items/');
 };
 
 const handleClick5=() => {
   window.location.replace('http://localhost:3005/employeeview/');
 };
 

export default  class AdminHome extends  Component{


    constructor(props) {
        super(props);
        this.state = {users : [], search:''};

        this.onChangeSearch = this.onChangeSearch.bind(this);
    }

    onChangeSearch(e){
        this.setState( {
           search: e.target.value
        });

    }

    componentDidMount() {
        // alert('email is ' +this.props.match.params.id);
        axios.get('http://localhost:4005/user/')
            .then(response => {
                // alert('Pass una')
                // alert('Data Tika :'+response.data)
                this.setState({users : response.data});

            })
            .catch(function (error){
                console.log(error);
            })
    }

    tabRow(){
        return this.state.users.map(function (object, i){
            return <UserTableRow obj = {object} key = {i}/>;
        });
    }

    exportPDF = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape
    
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);
    
        doc.setFontSize(15);
    
        const title = "All Users Details";
        const headers = [["Full Name","Address", "NIc","Phone", "eMail"]];
    
        const data = this.state.users.map(elt=> [elt.name, elt.address, elt.nic, elt.phone,elt.email]);
    
        let content = {
          startY: 50,
          head: headers,
          body: data
        };
    
        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("UserReport.pdf")
      }

    render() {
        return(
                <div>
                    <div class="sidebar">
                        <br/>
                        <br/>
                        <a onClick={handleClick4} style={{ cursor: "pointer", color: "white" }}> Service Management</a>
                        <a onClick={handleClick} style={{ cursor: "pointer", color: "white" }}> Offer Management </a>
                        <a onClick={handleClick2} style={{ cursor: "pointer", color: "white" }}> Project Management </a>
                        <a onClick={handleClick3} style={{ cursor: "pointer", color: "white" }}> Customer Support </a>
                        <a onClick={handleClick5} style={{ cursor: "pointer", color: "white" }}> Employee Management </a>
                    <a href="">User Management</a>
                    <a href="/">SignOut</a>

                    <div className='inner-menu'>
                        <a onClick = {handleClick1} style={{cursor: "pointer"}} >Home</a>
                        {/* <a href="/adminHome">Setting</a> */}
                        {/* <a href="/adminHome">More</a> */}
                    </div>
                </div>

                    <div class="content">
                        <div className = "top-tittle-bar">
                            <h2 className= 'tittle'>User Management System</h2>
                            <from style ={{float:'right',display:'flex',gap:5}} onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type ="text" required value={this.state.search} onChange = {this.onChangeSearch} className="form-control"/>
                                </div>
                                <div className="form-group" style ={{float:'right'}}>
                                    <a href ={"/adminSearchUser/"+this.state.search} style ={{float:'right',background:'#313332',padding:7,borderRadius:5,color:'white',textDecoration:'none'}}>Search</a>
                                </div>
                            </from>
                        </div>
                        <br/><br/><br/>
                        <h3 align="center">Customers Details</h3>
                       

                        <table className="table table-striped" style = {{marginTop :20}}>
                            <thead>
                                <tr>
                                    {/* <th>id</th> */}
                                    <th>User Name</th>
                                    <th>Address</th>
                                    <th>NIC</th>
                                    <th>Contact Number</th>
                                    <th>e-Mail</th>
                                    <th colSpan="3">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.tabRow()}
                            </tbody>
                        </table>

                        <center>
                            <button className='btn btn-warning' onClick={() => this.exportPDF()}>Export Users</button>
                        </center>
                        <br/>      
                        <hr/>     
                        <br/>
                        <hr/>
                        <Footer/>
                        <hr/>
                        <br/>
                        </div>
                </div>
        );
    }
}