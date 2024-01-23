import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddItems from "./components/AddItems";
import Items from "./components/Item/Items";
import UItem from "./components/Item/UItem";
import About from "./components/About";
import ItemDetail from "./components/Item/ItemDetail";
import Graph from "./components/Graph";
import viewServices from './components/viewServices';
import adminViewService from './components/adminViewService';
import adminServiceTableRow from './components/adminServiceTableRow';
function App() {
  return (
  <React.Fragment> 
   
    <main>
      <Routes>
        <Route path="/adminViweService" element= {<adminViweService/>} exact/>
        <Route path="/adminServiceTableRow" element= {<adminServiceTableRow/>} exact/>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/add" element= {<AddItems />} exact/>
        <Route path="/items" element= {<Items />} exact/>
        <Route path="/about" element= {<About />} exact/>
        <Route path="/UItem" element= {<UItem />} exact/>
        <Route path="/items/:id" element= {<ItemDetail/>} exact/>
        <Route path="/graph" element= {<Graph />} exact/>
        <Route path="/viewServices" element= {<viewServices />} exact/>
      </Routes>
    </main>
    
  </React.Fragment>
  );
}

export default App;
