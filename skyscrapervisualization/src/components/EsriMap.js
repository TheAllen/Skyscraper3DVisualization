import React, { Component } from 'react'
import { Map, Scene, WebMap, WebScene, SceneView } from '@esri/react-arcgis'


import '../App.css';

class EsriMap extends Component {

    constructor () {
        super();

        this.switchView = this.switchView.bind(this);
    }

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

    switchView() {

    }

}

export default EsriMap;