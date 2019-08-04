import React, {Component} from 'react'
import {Map} from '@esri/react-arcgis'

import '../App.css';

class EsriMap extends Component {

    render() {
        return (
            <div className="App">
                <Map />
            </div>
        )
    }
}

export default EsriMap;