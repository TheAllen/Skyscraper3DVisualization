import React, {Component} from 'react'
import * as L from 'wrld.js';
import {API_KEY} from './Constants'

const m = L.WrldMap.map("map", API_KEY,
    {
        center: [40.7331,
            -73.9902],
        zoom: 16    
    }
);

class WrldMap extends Component {


    render() {
        return (
            <div id="map">
                <WrldMap className="wrldmap">

                </WrldMap>
            </div>
        );
    }
}

export default WrldMap;