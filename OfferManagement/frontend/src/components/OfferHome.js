import React, { Component } from 'react'
import axios from 'axios';

export default class OfferHome extends Component {
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
            console.log(this.state.offers)   
        }
    });
  }
  


  // /*Search Method*/
  // filterData(offers,searchkey){
  //   const result = offers.filter((offer) =>
  //     offer.title.toLowerCase().includes(searchkey) || 
  //     offer.language.toLowerCase().includes(searchkey) || 
  //     offer.isbn.toLowerCase().includes(searchkey)
  //   )

  //   this.setState({offer:result})
  // }


  // handleSearchArea = (e) =>{
  //   const searchkey = e.currentTarget.value;
  //   axios.get("/offers").then(res=>{
  //       if(res.data.success){
  //           this.filterData(res.data.existingOffers,searchkey)
  //       }
  //   });
  // }


  render() {
    return (
      <div>
              {/* <center>
                <div className="col-lg-3 mt-2 mb-2" >
                        <input
                        className="form-control"
                        type="search"
                        placeholder="search"
                        name="searchQuery"
                        onChange={this.handleSearchArea}/>
                </div>
              </center>    */}



        
        <div className="row">
                            <main>
                                <div className="row center" >                                    
                                      {this.state.offers.map((offers,index)=>(
                                        <div className="card" >
                                          <br/><br/>
                                              <center><h2 className="card-price">{offers.packagename}</h2></center><br/>                                           
                                              <h6 className="card-price"><b>Discount : </b>{offers.packagdiscount}</h6>
                                              <h6 className="card-price"><b>Item : </b>{offers.packagitem}</h6>
                                              <h6 className="card-price"><b>Number : </b>{offers.packagnumber}</h6>
                                        </div>                                            
                                    ))
                                }                           
                            </div>
                        </main>               
                    </div>                    
      </div>
    )
  }
}