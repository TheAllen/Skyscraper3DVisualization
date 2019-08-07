import React, { Component } from 'react'
import { Map, Scene } from '@esri/react-arcgis'

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

    switchView = () => {
        var is3D = appConfig.activeView.type === "3d";

        // remove the reference to the container for the previous view
        appConfig.activeView.container = null;

        if (is3D) {
            // if the input view is a SceneView, set the viewpoint on the
            // mapView instance. Set the container on the mapView and flag
            // it as the active view
            appConfig.mapView.viewpoint = appConfig.activeView.viewpoint.clone();
            appConfig.mapView.container = appConfig.container;
            appConfig.activeView = appConfig.mapView;
            switchButton.value = "3D";
        } else {
            appConfig.sceneView.viewpoint = appConfig.activeView.viewpoint.clone();
            appConfig.sceneView.container = appConfig.container;
            appConfig.activeView = appConfig.sceneView;
            switchButton.value = "2D";
        }
    }
}

export default EsriMap;