import React, {Component} from 'react'
import {Map, Scene} from '@esri/react-arcgis'

import '../App.css';

class EsriMap extends Component {

    render() {

        let position = {
            lat: 40.7331,
            lng: -73.9902
        }
        return (
            // <div className="App">
            //     <Map />
            // </div>
            <Scene
        style={{ width: '100vw', height: '100vh' }}
        mapProperties={{ basemap: 'satellite' }}
        viewProperties={{
            center: [position.lng, position.lat],
            zoom: 13
        }}
    />
        )
    }
}

export default EsriMap;