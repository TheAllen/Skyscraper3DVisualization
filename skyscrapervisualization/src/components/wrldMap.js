import React, { Component } from 'react'
import L from 'wrld.js';

import { API_KEY } from './Constants'
const KEY = '7d4eb3b5f14128caba7e0a6cfd5bb443'

function MapComponent() {
    L.Wrld.map("map", KEY,
        {
            center: [40.7331,
                -73.9902],
            zoom: 16
        }
    )
}

export default class WMap extends Component {


    render() {
        return (
            <div id="map">
                <MapComponent></MapComponent>
            </div>
        );
    }
}

