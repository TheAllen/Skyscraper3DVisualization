import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import L from 'leaflet';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Map, Marker, Popup, TileLayer, Circle, CircleMarker, Polygon, Polyline, Rectangle } from 'react-leaflet'
import { Card, Button, CardTitle, CardText } from 'reactstrap';


import '../App.css'

var myIcon = L.icon({
    iconUrl: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSIyNCIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTEwMjguNCkiPjxwYXRoIGQ9Im0xMi4wMzEgMTAzMC40Yy0zLjg2NTcgMC02Ljk5OTggMy4xLTYuOTk5OCA3IDAgMS4zIDAuNDAxNyAyLjYgMS4wOTM4IDMuNyAwLjAzMzQgMC4xIDAuMDU5IDAuMSAwLjA5MzggMC4ybDQuMzQzMiA4YzAuMjA0IDAuNiAwLjc4MiAxLjEgMS40MzggMS4xczEuMjAyLTAuNSAxLjQwNi0xLjFsNC44NDQtOC43YzAuNDk5LTEgMC43ODEtMi4xIDAuNzgxLTMuMiAwLTMuOS0zLjEzNC03LTctN3ptLTAuMDMxIDMuOWMxLjkzMyAwIDMuNSAxLjYgMy41IDMuNSAwIDItMS41NjcgMy41LTMuNSAzLjVzLTMuNS0xLjUtMy41LTMuNWMwLTEuOSAxLjU2Ny0zLjUgMy41LTMuNXoiIGZpbGw9IiNjMDM5MmIiLz48cGF0aCBkPSJtMTIuMDMxIDEuMDMxMmMtMy44NjU3IDAtNi45OTk4IDMuMTM0LTYuOTk5OCA3IDAgMS4zODMgMC40MDE3IDIuNjY0OCAxLjA5MzggMy43NDk4IDAuMDMzNCAwLjA1MyAwLjA1OSAwLjEwNSAwLjA5MzggMC4xNTdsNC4zNDMyIDguMDYyYzAuMjA0IDAuNTg2IDAuNzgyIDEuMDMxIDEuNDM4IDEuMDMxczEuMjAyLTAuNDQ1IDEuNDA2LTEuMDMxbDQuODQ0LTguNzVjMC40OTktMC45NjMgMC43ODEtMi4wNiAwLjc4MS0zLjIxODggMC0zLjg2Ni0zLjEzNC03LTctN3ptLTAuMDMxIDMuOTY4OGMxLjkzMyAwIDMuNSAxLjU2NyAzLjUgMy41cy0xLjU2NyAzLjUtMy41IDMuNS0zLjUtMS41NjctMy41LTMuNSAxLjU2Ny0zLjUgMy41LTMuNXoiIGZpbGw9IiNlNzRjM2MiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMTAyOC40KSIvPjwvZz48L3N2Zz4=',
    iconSize: [64, 64],
    iconAnchor: [32, 60],
    popupAnchor: [-10, -90],

});

class MainMap extends Component {

    constructor() {
        super();

        this.state = {
            location: {
                lat: 40.7331,
                lng: -73.9902
            },
            userLocation: {
                lat: '',
                lng: ''
            },
            haveUserLocation: false,
            zoom: 1,
            city: ""

        }
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
                userLocation: {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                },
                haveUsersLocation: true,
                zoom: 13
            })
        })

        console.log(this.state.location);
    }

    onClickVisualization = () => {
        const path = '/visual';
        this.props.history.push(path);
    }

    render() {

        const position = [this.state.location.lat, this.state.location.lng]
        const userPosition = [this.state.userLocation.lat, this.state.userLocation.lng]

        return (
            <div className="App">
                <Map className='map' center={position} zoom={this.state.zoom}>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {(this.state.haveUserLocation) ?
                        <Marker icon={myIcon} position={userPosition}>
                            <Popup onClick={this.clickPopup}>Current Position</Popup>
                        </Marker> : ''
                    }


                    <Marker icon={myIcon} position={position} onClick={this.onClickVisualization}>
                        <Popup onClick={this.clickPopup}>Manhattan, New York!</Popup>
                    </Marker>


                    <Circle center={position} fillColor="blue" radius={3500} onClick={this.onClickMarker}>
                        <Popup center={position}>
                            Click to see a <br /> 3D visualization of Manhattan
            </Popup>
                    </Circle>


                </Map>
            </div>



        )
    }
}

export default MainMap;