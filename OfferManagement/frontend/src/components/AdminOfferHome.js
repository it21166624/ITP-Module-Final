import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert2';
import jspdf from 'jspdf';
import "jspdf-autotable";


const handleClick=() => {
  window.location.replace('http://localhost:3002/Items/');
};

export default class AdminOfferHome extends Component {
  constructor(props){
    super(props);

    this.state={
      offers:[]
    };
  }

componentDidMount(){
  this.retrieveOffers();
}  

  retrieveOffers(){
    axios.get("/offers").then(res=>{
      if(res.data.success){
        this.setState({
          offers:res.data.existingOffers
        });

        console.log(this.state.offers);
      }
    });
  }

  onDelete = (id) =>{
    axios.delete(`/offer/delete/${id}`).then((res)=>{
          swal.fire({ packagename: 'Are you sure?', 
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
        this.retrieveOffers();
    });
  }


/*Search Method*/
  filterData(offers,searchkey){
    const result = offers.filter((offer) =>
      offer.packagename.toLowerCase().includes(searchkey) || 
      offer.packagitem.toLowerCase().includes(searchkey) || 
      offer.packagnumber.toLowerCase().includes(searchkey)
    )

    this.setState({offers:result})
  }


  handleSearchArea = (e) =>{
    const searchkey = e.currentTarget.value;
    axios.get("/offers").then(res=>{
        if(res.data.success){
            this.filterData(res.data.existingOffers,searchkey)
        }
    });
  }



  generateReport = (tickets) => {
    const doc = new jspdf();
  
    const tableColumn = ["Package Name", "Package Discount", "Package Items", "Package Number" ];
  
    const tableRows = [];
  
    tickets.map(ticket => {
  
      const ticketData = [
  
          ticket.packagename,
          ticket.packagdiscount,  
          ticket.packagitem,  
          ticket.packagnumber  
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
        <center><h1 className="h3 mb-3 font-weight-normal">ALL offers</h1></center>

        
          {/*Search*/}
          
          <div class="d-flex justify-content-around">          
                <button className="btn btn-success">        
                    <i class="fa fa-plus" aria-hidden="true"></i>&nbsp;&nbsp;
                    <a href="/CreateOffer" style={{textDecoration:'none', color:'white'}}>Add Offer</a>                
                </button>
                

                
                  <div className="col-lg-3 mt-2 mb-2" >
                        <input
                        className="form-control"
                        type="search"
                        placeholder="search"
                        name="searchQuery"
                        onChange={this.handleSearchArea}/>
                </div>


                <button onClick={()=>this.generateReport(this.state.offers)} className="btn btn-success" >     
                  Generate Report                
                </button>

                            
          </div>


          

          <br/>
            <table className="table container bg-light" >
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Package Name</th>
                  <th scope="col">Package Discount</th>
                  <th scope="col">Package Items</th>
                  <th scope="col">Package Number</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
              {this.state.offers.map((offers,index)=>(
                <tr>
                  <th scope="row">{index+1}</th> 

                  <td>{offers.packagename}</td>
                  <td>{offers.packagdiscount}</td>
                  <td>{offers.packagitem}</td>
                  <td>{offers.packagnumber}</td>
                  <td>
                      <a className="btn btn-warning" href={`/EditOffer/${offers._id}`}>
                        <i className="fas fa-edit"></i>&nbsp;Edit
                      </a>

                      &nbsp;

                      <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(offers._id)}>
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

