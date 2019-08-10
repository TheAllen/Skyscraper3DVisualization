import React, { Component } from 'react'
import ReactMapGL from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
import '../App.css';

const TOKEN = 'pk.eyJ1IjoibGlsaTYwNTMiLCJhIjoiY2p6M3Fvbjl6MDUxeTNjbnF2Y280cWo0MCJ9.VJiRG8Mfg1Ccqo4SdI6nNg'

class BoxMap extends Component {

    constructor() {
        super();
        this.state = {
            viewport: {
                width: 400,
                height: 400,
                latitude: 37.7577,
                longitude: -122.4376,
                zoom: 8
            }
        }
    }

    render() {
        return (
            <div className="map">
                <ReactMapGL mapboxApiAccessToken={TOKEN}
                    {...this.state.viewport}
                    onViewportChange={(viewport) => this.setState({ viewport })}
                />
            </div>
        )
    }
}

export default BoxMap;