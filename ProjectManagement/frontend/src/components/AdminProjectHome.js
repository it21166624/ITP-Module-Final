import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert2';
import jspdf from 'jspdf';
import "jspdf-autotable";

const handleClick=() => {
  window.location.replace('http://localhost:3002/Items/');
};

export default class AdminProjectHome extends Component {
  constructor(props){
    super(props);

    this.state={
      projects:[]
    };
  }

componentDidMount(){
  this.retrieveProjects();
}  

  retrieveProjects(){
    axios.get("/projects").then(res=>{
      if(res.data.success){
        this.setState({
          projects:res.data.existingProjects
        });

        console.log(this.state.projects);
      }
    });
  }

  onDelete = (id) =>{
    axios.delete(`/project/delete/${id}`).then((res)=>{
          swal.fire({ customername: 'Are you sure?', 
          text: "You won't be able to revert this!", 
          icon: 'warning', 
          showCancelButton: true, 
          confirmButtonColor: '#3085d6', 
          cancelButtonColor: '#d33', 
          confirmButtonText: 'Yes, delete it!' 
        }).then((result) => { 
          if (result.isConfirmed) { 
            swal.fire( 'Deleted!', 
            'Your file has been deleted.', 
            'success' 
            ) 
          } 
      })
        this.retrieveProjects();
    });
  }


/*Search Method*/
  filterData(projects,searchkey){
    const result = projects.filter((project) =>
      project.customername.toLowerCase().includes(searchkey) || 
      project.worktype.toLowerCase().includes(searchkey) || 
      project.employeename.toLowerCase().includes(searchkey)
    )

    this.setState({projects:result})
  }


  handleSearchArea = (e) =>{
    const searchkey = e.currentTarget.value;
    axios.get("/projects").then(res=>{
        if(res.data.success){
            this.filterData(res.data.existingProjects,searchkey)
        }
    });
  }



  generateReport = (tickets) => {
    const doc = new jspdf();
  
    const tableColumn = ["Customer Name", "Work Type", "Date", "Time", "Employee Name", "Emdate", "Emtime", "Contact Number", "Summary Chart" ];
  
    const tableRows = [];
  
    tickets.map(ticket => {
  
      const ticketData = [
  
          ticket.customername,
          ticket.worktype,  
          ticket.date,  
          ticket.time,
          ticket.employeename,  
          ticket.emdate,  
          ticket.emtime,  
          ticket.contactnumber,  
          ticket.summarychart   
      ];
      tableRows.push(ticketData);
    })
  
   
      doc.text("All Offers Report", 14, 15).setFontSize(12);
      const date = Date().split(" ");
      const dateStr = date[1] + "-" + date[2] + "-" + date[3];
  
      doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8, }, startY: 35 });
      doc.text(`Report Genarated Date - ${dateStr}`, 14, 23);
      doc.save(`alloffers_report_.pdf`);  
  }






  render() {
    return (
      <div>


        <button className="btn btn-success">        
                    <i class="fa fa-plus" aria-hidden="true"></i>&nbsp;&nbsp;
                    <a onClick = {handleClick} style={{cursor: "pointer"}}>Back</a>                
                </button>







        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <center><h1 className="h3 mb-3 font-weight-normal">ALL Projects</h1></center>

        
          {/*Search*/}
          
          <div class="d-flex justify-content-around">          
                <button className="btn btn-success">        
                    <i class="fa fa-plus" aria-hidden="true"></i>&nbsp;&nbsp;
                    <a href="/CreateProject" style={{textDecoration:'none', color:'white'}}>Add Project</a>                
                </button>
                

                
                  <div className="col-lg-3 mt-2 mb-2" >
                        <input
                        className="form-control"
                        type="search"
                        placeholder="search"
                        name="searchQuery"
                        onChange={this.handleSearchArea}/>
                </div>


                <button onClick={()=>this.generateReport(this.state.projects)} className="btn btn-success" >     
                  Generate Report                
                </button>

                            
          </div>


          

          <br/>
            <table className="table container bg-light" >
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Customer Name</th>
                  <th scope="col">Work Type</th>
                  <th scope="col">Date</th>
                  <th scope="col">Time</th>
                  <th scope="col">Employee Name</th>
                  <th scope="col">Emdate</th>
                  <th scope="col">Emtime</th>
                  <th scope="col">Contact Number</th>
                  <th scope="col">Summary Chart</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
              {this.state.projects.map((projects,index)=>(
                <tr>
                  <th scope="row">{index+1}</th> 

                  <td>
                    <a href={`/ProjectDetails/${projects._id}`}>
                      {projects.customername}
                    </a>
                  </td>

                  <td>{projects.worktype}</td>
                  <td>{projects.date}</td>
                  <td>{projects.time}</td>
                  <td>{projects.employeename}</td>
                  <td>{projects.emdate}</td>
                  <td>{projects.emtime}</td>
                  <td>{projects.contactnumber}</td>
                  <td>{projects.summarychart}</td>
                  <td>
                      <a className="btn btn-warning" href={`/EditProject/${projects._id}`}>
                        <i className="fas fa-edit"></i>&nbsp;Edit
                      </a>

                      &nbsp;

                      <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(projects._id)}>
                        <i className="fas fa-trash-alt"></i>&nbsp;Delete
                      </a>
                  </td>
                </tr>
                
              ))}
            </tbody>
            </table>
            <br/> 
            <center>
              
          </center>                    
            </div>      
    )
  }
}

