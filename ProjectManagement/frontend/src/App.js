
import React, { Component } from 'react'; 
import {BrowserRouter,Route} from 'react-router-dom';



import NavBar from './components/NavBar';
import CreateProject from './components/CreateProject';
import EditProject from './components/EditProject';
import ProjectDetails from './components/ProjectDetails';
import AdminProjectHome from './components/AdminProjectHome';
// import Footer from './components/footer';






import "./index.css"

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      
        

      <NavBar/>
      <Route path="/CreateProject" exact component={CreateProject}></Route>
      <Route path="/EditProject/:id" exact component={EditProject}></Route>
      <Route path="/ProjectDetails/:id" exact component={ProjectDetails}></Route>
      <Route path="/AdminProjectHome" exact component={AdminProjectHome}></Route>

     
      {/* <Footer/> */}
      
      

      </BrowserRouter>
    )
  }
}
