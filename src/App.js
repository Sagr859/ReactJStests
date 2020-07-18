import React from 'react';
import './App.css';
import NavBar from './components/CustomNavBar.js';
import TopNews from './components/TopNews';
import LatestNews from './components/LatestNews';
//import FeaturedNews from './components/FeaturedNews';

//import {Navbar, Container, Row} from 'react-bootstrap';

function  App(){
  return (
    <div>
      <div id="head" className="row">
        STORI.10
        </div>
        <hr className="navTeal" style={{color: + 'teal'},{height:+'100px'}} />
      <div className="row">
      
      <NavBar /> 
      
      <hr className="navGray" style={{color: + 'gray'},{height:+'100px'}} /> 

      <TopNews />
      
      <LatestNews />
     
      <hr  className="navGray"  style={{color: + 'gray'},{height:+'100px'}} />

      <h1>FeaturedNewsouzfhgufhounfdunggdunb9ngundfbn9dfbgufnfubnfbnufbozfdbdfbuzn</h1>
      </div>
    </div>
  
  )
}

export default App;
