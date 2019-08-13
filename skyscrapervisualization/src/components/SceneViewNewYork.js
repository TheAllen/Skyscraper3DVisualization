import React, { Component } from 'react';
import { SceneView, Scene } from 'react-sceneview';

const ID = '9a542f6755274436985617a462ffdf44'
const IDNY ='d869fa255fd44726ae6e40264e290df1'
const IDNY1 = '4ea1f7566623413d8ada3b4a6b87c896' //New York
const ID_PARIS = '0614ea1f9dd043e9ba157b9c20d3c538' //Paris
const ID_GENEVA = 'c6f90b19164c4283884361005faea852' 
const ID_LUCERNE = '6043821c854345e4b6d56c9b0765079d'

class SceneViewNewYork extends Component {

    render() {
        return (
            <SceneView id = "newyork">
                <Scene portalItem={{id: ID}}></Scene>
            </SceneView>
            
        )
    }
}

export class SceneViewParis extends Component {

    render() {
        return ( 
            <SceneView id = "paris">
                <Scene portalItem={{id: ID_PARIS}}></Scene>
            </SceneView>
        )
    }
}

export class SceneViewGeneva extends Component {
    render() {
        return ( 
            <SceneView id = "paris">
                <Scene portalItem={{id: ID_GENEVA}}></Scene>
            </SceneView>
        )
    }
}

export class SceneViewLucerne extends Component {
    render() {
        return ( 
            <SceneView id = "paris">
                <Scene portalItem={{id: ID_LUCERNE}}></Scene>
            </SceneView>
        )
    }
}

export default SceneViewNewYork;

