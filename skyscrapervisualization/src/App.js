import React, { Component } from 'react';
// import { render } from 'react-dom'
import { Map, Marker, Popup, TileLayer, Circle, CircleMarker, Polygon, Polyline, Rectangle } from 'react-leaflet'
import './App.css';

class App extends Component {

  state = {
    lat: 40.7531,
    lng: -73.9712,
    zoom: 13,
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    const center = [this.state.lat, this.state.lng]

    // const polyline = [[51.505, -0.09], [51.51, -0.1], [51.51, -0.12]]

    // const multiPolyline = [
    //   [[51.5, -0.1], [51.5, -0.12], [51.52, -0.12]],
    //   [[51.5, -0.05], [51.5, -0.06], [51.52, -0.06]],
    // ]

    // const polygon = [[51.515, -0.09], [51.52, -0.1], [51.52, -0.12]]

    // const multiPolygon = [
    //   [[51.51, -0.12], [51.51, -0.13], [51.53, -0.13]],
    //   [[51.51, -0.05], [51.51, -0.07], [51.53, -0.07]],
    // ]

    const rectangle = [[51.49, -0.08], [51.5, -0.06]]
    return (
      <Map className='map' center={center} zoom={13}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <Circle center={center} fillColor="blue" radius={200} />
        <CircleMarker center={[51.51, -0.12]} color="red" radius={20}>
          <Popup>Popup in CircleMarker</Popup>
        </CircleMarker>
        <Polyline color="lime" positions={polyline} />
        <Polyline color="lime" positions={multiPolyline} />
        <Polygon color="purple" positions={polygon} />
        <Polygon color="purple" positions={multiPolygon} /> */}
        <Rectangle bounds={rectangle} color="black" />
      </Map>
    )
  }
}

export default App;
