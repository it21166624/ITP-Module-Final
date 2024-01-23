
import React, { Component } from 'react'; 
import {BrowserRouter,Route} from 'react-router-dom';



import NavBar from './components/NavBar';
import OfferHome from './components/OfferHome';
import CreateOffer from './components/CreateOffer';
import EditOffer from './components/EditOffer';
import AdminOfferHome from './components/AdminOfferHome';
// import Footer from './components/footer';






import "./index.css"

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      
        

      <NavBar/>
      <Route path="/" exact component={OfferHome}></Route>
      <Route path="/CreateOffer" exact component={CreateOffer}></Route>
      <Route path="/EditOffer/:id" exact component={EditOffer}></Route>
      <Route path="/AdminOfferHome" exact component={AdminOfferHome}></Route>

     
      {/* <Footer/> */}
      
      

      </BrowserRouter>
    )
  }
}
