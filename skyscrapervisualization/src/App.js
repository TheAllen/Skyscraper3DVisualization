import React, { Component } from 'react';
import { render } from 'react-dom'
import L from 'leaflet'
import {Map} from '@esri/react-arcgis'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Card, Button, CardTitle, CardText } from 'reactstrap';

import './App.css';
import MainMap from './components/MainMap'
import Visualization from "./Visualization"
import EsriMap from './components/EsriMap'
import WrldMap from './components/wrldMap'


class App extends Component {

    render() {
      return(
        <Router>
          <Route exact path = "/" component = {MainMap} ></Route>
          <Route exact path = "/map" component = {MainMap}></Route>
          <Route exact path="/visual" component = {EsriMap} ></Route>
          <Route exact path="/wrldmap" component = {WrldMap}></Route>
        </Router>
        
          
        
        
      )
    }
}

export default App;
