import React, { Component } from 'react'
import axios from 'axios';
import swal from 'sweetalert';

export default class CreateOffer extends Component {
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

        const{packagename,packagdiscount,packagitem,packagnumber} = this.state;

        const data ={
          packagename:packagename,
          packagdiscount:packagdiscount,
          packagitem:packagitem,
          packagnumber:packagnumber
        }  
        console.log(data);

        axios.post("/offer/save",data).then((res)=>{
                  if(res.data.success){
                    swal({
                      icon: 'success',
                      title: "Offer Successfully added !",
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

        this.setState({packagenameError , packagdiscountError , packagitemError , packagnumberError  });

        return false;

      } else {

        this.setState({packagenameError , packagdiscountError , packagitemError , packagnumberError });

      }

      return true;

    }  




  render() {
    return (
      <div className="col-md-8 mt-4 mx-auto"> <h1 className="h3 mb-3 font-weight-normal"><center>Create Offer</center></h1>
        <form className='form-group'>
          <div className='row'>
            <div className="col-lg-6" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Package Name</label>&nbsp;
              <span style={{color : "red"}}>{this.state.packagenameError}</span>
              <input type="text"
              className="form-control"
              name="packagename"
              placeholder="Enter packagename"
              value={this.state.packagename}
              onChange={this.handleInputChange}/>
            </div>

            <div className="col-lg-6" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Package Discount</label>&nbsp;
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
              <label style={{marginBottom:'5px'}}>Package Items</label>&nbsp;
              <span style={{color : "red"}}>{this.state.packagitemError}</span>
              <input type="number"
              className="form-control"
              name="packagitem"
              placeholder="Enter packagitem"
              value={this.state.packagitem}
              onChange={this.handleInputChange}/>
            </div>

            <div className="col-lg-6" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Package Number</label>&nbsp;
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
              &nbsp; Upload Offer Details
            </button>           

        </form>
      </div>
    )
  }
}

