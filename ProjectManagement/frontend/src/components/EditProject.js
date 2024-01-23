import React, { Component } from 'react'
import axios from 'axios';
import swal from 'sweetalert';

export default class EditProject extends Component {

      constructor(props){
        super(props);

        this.state={
            customername:"",
            worktype:"",
            date:"",
            time:"",
            employeename:"",
            emdate:"",
            emtime:"",
            contactnumber:"",
            summarychart:"",

            customernameError:"",
            worktypeError:"",
            dateError:"",
            timeError:"",
            employeenameError:"",
            emdateError:"",
            emtimeError:"",
            contactnumberError:"",
            summarychartError:""
        };
      }


      handleInputChange = (e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })

      }


      onSubmit = (e) =>{   
        
        e.preventDefault(); 
        this.validation(); 

        if (this.state.customername && this.state.worktype && this.state.date && this.state.time && this.state.employeename && this.state.emdate && this.state.emtime && this.state.contactnumber && this.state.summarychart ){

        const id = this.props.match.params.id;

        const{customername,worktype,date,time,employeename,emdate,emtime,contactnumber,summarychart} = this.state;

          const data ={
            customername:customername,
            worktype:worktype,
            date:date,
            time:time,
            employeename:employeename,
            emdate:emdate,
            emtime:emtime,
            contactnumber:contactnumber,
            summarychart:summarychart
          }  
          console.log(data)

          axios.put(`/project/update/${id}`,data).then((res)=>{
                    if(res.data.success){
                      swal({
                        icon: 'success',
                        title: "project Successfully Updated !",
                        type: "success"
                      }).then(function() {
                        window.location = "/AdminProjectHome";
                      });
                        
                        this.setState({
                          customername:"",
                          worktype:"",
                          date:"",
                          time:"",
                          employeename:"",
                          emdate:"",
                          emtime:"",
                          contactnumber:"",
                          summarychart:""
                        });
                        
                    }
                });
              }
            }


            componentDidMount(){
              const id = this.props.match.params.id;
              
              axios.get(`/project/${id}`).then((res)=>{
                  if(res.data.success){
                      this.setState({
                        customername:res.data.project.customername,
                        worktype:res.data.project.worktype,
                        date:res.data.project.date,
                        time:res.data.project.time,
                        employeename:res.data.project.employeename,
                        emdate:res.data.project.emdate,
                        emtime:res.data.project.emtime,
                        contactnumber:res.data.project.contactnumber,
                        summarychart:res.data.project.summarychart
                      });
                      console.log(this.state.project);
                      
                  }
              });
            }


         


          validation = () => {
            let customernameError="";
      let worktypeError="";
      let dateError="";
      let timeError="";
      let employeenameError="";
      let emdateError="";
      let emtimeError="";
      let contactnumberError="";
      let summarychartError="";
 
      if(!this.state.customername){
        customernameError="(Customer Name Required!)"
      }
      
      if(!this.state.worktype){
        worktypeError="(Work Type Required!)"
      }

      if(!this.state.date){
        dateError="(Date Required!)"
      }

      if(!this.state.time){
        timeError="(Time Required!)"
      }
      if(!this.state.employeename){
        employeenameError="(Employee Name Required!)"
      }
      
      if(!this.state.emdate){
        emdateError="(Emdate Required!)"
      }

      if(!this.state.emtime){
        emtimeError="(Emtime Required!)"
      }

      if(!this.state.contactnumber){
        contactnumberError="(Contact Number Required!)"
      }

      if(!this.state.summarychart){
        summarychartError="(Summary Chart Required!)"
      }

      


      if ( customernameError | worktypeError | dateError | timeError | employeenameError | emdateError | emtimeError | contactnumberError | summarychartError) {

        this.setState({customernameError , worktypeError , dateError , timeError , employeenameError , emdateError , emtimeError , contactnumberError ,summarychartError});

        return false;

      } else {

        this.setState({customernameError , worktypeError , dateError , timeError , employeenameError , emdateError , emtimeError , contactnumberError , summarychartError});

      }

      return true;

    }   


  render() {
    return (
      <div className="col-md-8 mt-4 mx-auto"> <h1 className="h3 mb-3 font-weight-normal"><center>Edit offer</center></h1>
        <form className='form-group'>
        <div className='row'>
            <div className="col-lg-6" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Customer Name</label>&nbsp;
              <span style={{color : "red"}}>{this.state.customernameError}</span>
              <input type="text"
              className="form-control"
              name="customername"
              placeholder="Enter customername"
              value={this.state.customername}
              onChange={this.handleInputChange}/>
            </div>

            <div className="col-lg-6" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Work Type</label>&nbsp;
              <span style={{color : "red"}}>{this.state.worktypeError}</span>
              <input type="text"
              className="form-control"
              name="worktype"
              placeholder="Enter worktype"
              value={this.state.worktype}
              onChange={this.handleInputChange}/>
            </div>
          </div>

          <div className='row'>
            <div className="col-lg-6" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Date</label>&nbsp;
              <span style={{color : "red"}}>{this.state.dateError}</span>
              <input type="date"
              className="form-control"
              name="date"
              placeholder="Enter date"
              value={this.state.date}
              onChange={this.handleInputChange}/>
            </div>

            <div className="col-lg-6" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Time</label>&nbsp;
              <span style={{color : "red"}}>{this.state.timeError}</span>
              <input type="time"
              className="form-control"
              name="time"
              placeholder="Enter time"
              value={this.state.time}
              onChange={this.handleInputChange}/>
            </div>
          </div>

          <div className='row'>
            <div className="col-lg-6" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Employee Name</label>&nbsp;
              <span style={{color : "red"}}>{this.state.employeenameError}</span>
              <input type="text"
              className="form-control"
              name="employeename"
              placeholder="Enter employeename"
              value={this.state.employeename}
              onChange={this.handleInputChange}/>
            </div>

            <div className="col-lg-6" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Emdate</label>&nbsp;
              <span style={{color : "red"}}>{this.state.emdateError}</span>
              <input type="date"
              className="form-control"
              name="emdate"
              placeholder="Enter emdate"
              value={this.state.emdate}
              onChange={this.handleInputChange}/>
            </div>
          </div>

          <div className='row'>
            <div className="col-lg-6" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Emtime</label>&nbsp;
              <span style={{color : "red"}}>{this.state.emtimeError}</span>
              <input type="time"
              className="form-control"
              name="emtime"
              placeholder="Enter emtime"
              value={this.state.emtime}
              onChange={this.handleInputChange}/>
            </div>

            <div className="col-lg-6" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Contact Number</label>&nbsp;
              <span style={{color : "red"}}>{this.state.contactnumberError}</span>
              <input type="number"
              className="form-control"
              name="contactnumber"
              placeholder="Enter contactnumber"
              value={this.state.contactnumber}
              onChange={this.handleInputChange}/>
            </div>
          </div>

          <div className='row'>
            <div className="col-lg-6" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Summary Chart</label>&nbsp;
              <span style={{color : "red"}}>{this.state.summarychartError}</span>
              <input type="number"
              className="form-control"
              name="summarychart"
              placeholder="Enter summarychart"
              value={this.state.summarychart}
              onChange={this.handleInputChange}/>
            </div>

          </div>      

            
            
            <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
              <i className="fa fa-upload"></i>
              &nbsp; Update project Details
            </button>

        </form>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
    )
  }
}
