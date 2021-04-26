import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Portafolio from './Pages/Portafolio';
import Courses from './Pages/Courses';
import Contact from './Pages/Contact';
import Navigation from './Components/Navigation';
import Typography from '@material-ui/core/Typography';
import Header from "./Components/Header";
import Particles from 'react-particles-js';

function App() {
  return (
    <>
      <Particles 
      params={{
        particles: {
          number:{
            value: 40,
            density:{ enable: true, value_area: 900}
          }
        }
      }}
      />
      <Router> 
        <div className="App">
          <Navigation />
            <div className="content">
              <Switch> 
                <Route exact path ="/"> <Home /> </Route>
                <Route path ="/about"> <About /> </Route>
                <Route path ="/services"> <Services /> </Route>
                <Route path ="/portafolio"> <Portafolio /> </Route>
                <Route path ="/courses" > <Courses /> </Route>
                <Route path ="/contact" > <Contact /> </Route>
              </Switch>
            </div>
          <Header />
        </div>
      </Router>
    </>
  );
}

export default App;
