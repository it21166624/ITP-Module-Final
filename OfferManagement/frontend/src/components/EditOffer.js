import React, { Component } from 'react'
import axios from 'axios';
import swal from 'sweetalert';

export default class EditOffer extends Component {

      constructor(props){
        super(props);

        this.state={
          packagename:"",
          packagdiscount:"",
          packagitem:"",
          packagnumber:"",

            packagenameError:"",
            packagdiscountError:"",
            packagitemError:"",
            packagnumberError:""
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

        if (this.state.packagename && this.state.packagdiscount && this.state.packagitem && this.state.packagnumber ){

        const id = this.props.match.params.id;

        const{packagename,packagdiscount,packagitem,packagnumber} = this.state;

          const data ={
            packagename:packagename,
            packagdiscount:packagdiscount,
            packagitem:packagitem,
            packagnumber:packagnumber
          }  
          console.log(data)

          axios.put(`/offer/update/${id}`,data).then((res)=>{
                    if(res.data.success){
                      swal({
                        icon: 'success',
                        title: "Offer Successfully Updated !",
                        type: "success"
                      }).then(function() {
                        window.location = "/AdminOfferHome";
                      });
                        
                        this.setState({
                          packagename:"",
                          packagdiscount:"",
                          packagitem:"",
                          packagnumber:""
                        });
                        
                    }
                });
              }
            }


            componentDidMount(){
              const id = this.props.match.params.id;
              
              axios.get(`/offer/${id}`).then((res)=>{
                  if(res.data.success){
                      this.setState({
                        packagename:res.data.offer.packagename,
                        packagdiscount:res.data.offer.packagdiscount,
                        packagitem:res.data.offer.packagitem,
                        packagnumber:res.data.offer.packagnumber
                      });
                      console.log(this.state.offer);
                      
                  }
              });
            }


         


          validation = () => {
            let packagenameError="";
            let packagdiscountError="";
            let packagitemError="";
            let packagnumberError="";
       
            if(!this.state.packagename){
              packagenameError="(Package Name Required!)"
            }
            
            if(!this.state.packagdiscount){
              packagdiscountError="(Packag Discount Required!)"
            }
      
            if(!this.state.packagitem){
              packagitemError="(Packag Item Required!)"
            }
      
            if(!this.state.packagnumber){
              packagnumberError="(Packag Number Required!)"
            }
      
                
            
      
      
            if ( packagenameError | packagdiscountError | packagitemError | packagnumberError ) {
      
              this.setState({packagenameError , packagdiscountError , packagitemError , packagnumberError });
      
              return false;
      
            } else {
      
              this.setState({packagenameError , packagdiscountError , packagitemError , packagnumberError });
      
            }
      
            return true;
      
          }  


  render() {
    return (
      <div className="col-md-8 mt-4 mx-auto"> <h1 className="h3 mb-3 font-weight-normal"><center>Edit offer</center></h1>
        <form className='form-group'>
        <div className='row'>
            <div className="col-lg-6" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>packagename</label>&nbsp;
              <span style={{color : "red"}}>{this.state.packagenameError}</span>
              <input type="text"
              className="form-control"
              name="packagename"
              placeholder="Enter packagename"
              value={this.state.packagename}
              onChange={this.handleInputChange}/>
            </div>

            <div className="col-lg-6" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>packagdiscount</label>&nbsp;
              <span style={{color : "red"}}>{this.state.packagdiscountError}</span>
              <input type="text"
              className="form-control"
              name="packagdiscount"
              placeholder="Enter packagdiscount"
              value={this.state.packagdiscount}
              onChange={this.handleInputChange}/>
            </div>
            </div>

            <div className='row'>
            <div className="col-lg-6" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>packagitem</label>&nbsp;
              <span style={{color : "red"}}>{this.state.packagitemError}</span>
              <input type="number"
              className="form-control"
              name="packagitem"
              placeholder="Enter packagitem"
              value={this.state.packagitem}
              onChange={this.handleInputChange}/>
            </div>

            <div className="col-lg-6" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>packagnumber</label>&nbsp;
              <span style={{color : "red"}}>{this.state.packagnumberError}</span>
              <input type="number"
              className="form-control"
              name="packagnumber"
              placeholder="Enter packagnumber"
              value={this.state.packagnumber}
              onChange={this.handleInputChange}/>
            </div>
            </div>           

            
            
            <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
              <i className="fa fa-upload"></i>
              &nbsp; Update offer Details
            </button>

        </form>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
    )
  }
}
