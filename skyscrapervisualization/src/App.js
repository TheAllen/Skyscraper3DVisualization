import React, { Component } from 'react';
import { render } from 'react-dom'
import {Map} from '@esri/react-arcgis'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import 'mapbox-gl/dist/mapbox-gl.css';
import './App.css';
import MainMap from './components/MainMap'
import Visualization from "./Visualization"
import EsriMap from './components/EsriMap'
import {SceneViewNewYork, SceneViewParis, SceneViewLucerne, SceneViewGeneva, SceneViewLyon, SceneViewBoston, SceneViewMontreal } from './components/SceneViewNewYork'



class App extends Component {

    render() {
      return(
        <Router>
          <Route exact path = "/" component = {MainMap} ></Route>
          <Route exact path = "/map" component = {MainMap}></Route>
          <Route exact path="/visual" component = {EsriMap} ></Route>
          <Route exact path="/newyork" component = {SceneViewNewYork}></Route>
          <Route exact path="/paris" component = {SceneViewParis}></Route>
          <Route exact path="/lucerne" component = {SceneViewLucerne}></Route>
          <Route exact path="/geneva" component = {SceneViewGeneva}></Route>
          <Route exact path="/lyon" component = {SceneViewLyon}></Route>
          <Route exact path="/boston" component = {SceneViewBoston}></Route>
          <Route exact path="/montreal" component = {SceneViewMontreal}></Route>
        </Router>
        
          
        
        
      )
    }
}

export default App;
