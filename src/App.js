import React from 'react';
import NavBar from './components/CustomNavBar';
import TopNews from './components/TopNews';
import LatestNews from './components/LatestNews';
import FeaturedNews from './components/FeaturedNews';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import {Navbar, Container, Row} from 'react-bootstrap';

function  App(){
  return (
    <div className="App">
      <Navbar bg="dark"  variant="dark">
        <Navbar.Brand  className="d-inline-block align-top"  expand="lg">STORI.10</Navbar.Brand>
      </Navbar>
      <NavBar />
      <Container>
        <Row sm={4}>
          <Container >
              <Row>
              <TopNews />
              </Row>
              
          </Container>
          <Container>
            <LatestNews />
          </Container>
        </Row>
        <Row sm={2}>
         <FeaturedNews />
        </Row>
      </Container>
    </div>
  )
}

export default App;
