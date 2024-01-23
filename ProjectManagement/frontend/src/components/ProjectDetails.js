import React, { Component } from 'react'
import axios from 'axios';

export default class ProjectDetails extends Component {
  constructor(props){
    super(props);

    this.state={
      project:{}
    };
}


componentDidMount(){
  const id = this.props.match.params.id;
  axios.get(`/project/${id}`).then((res)=>{
      if(res.data.success){
          this.setState({
            project:res.data.project
          });
          console.log(this.state.project);
      }
  });
}


  render() {
    const {customername,worktype,date,time,employeename,emdate,emtime,contactnumber,summarychart}=this.state.project;

    return (

      <div>

<center>
      <table className="table-medium">
        
        <th>
        <dl>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <h2>Customer Name : {customername}</h2>
        <hr/>
          <dd>Work Type : {worktype}</dd>            
            <hr/>         
            <dd>Date : {date}</dd>
          <dd>Time : {time}</dd>
          <hr/>
          <dd>Employee Name : {employeename}</dd>
          <dd>Contact Number : {contactnumber}</dd>
          <hr/>
          <dd>Emdate : {emdate}</dd>
          
          <dd>Emtime : {emtime}</dd>
          <hr/>
         
         
          <dd>Summary Chart : {summarychart}</dd>             
        </dl>
        </th>        
      </table>

      </center>     
        
      </div>
    )
  }
}
