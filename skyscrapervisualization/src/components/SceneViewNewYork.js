import React, { Component } from 'react';
import { SceneView, Scene, Layer, S } from 'react-sceneview';


const ID = 'a0f52995be7d42c1ba9a2b570570feb5' //Original NY
const IDNY ='9a542f6755274436985617a462ffdf44'
const NY_EXAMPLE = 'd50983f1314141bfb6d57c6f83f2690e'
const IDNY1 = '6da5b4a4f0214f83963bd3620bea376d' //New York
const ID_PARIS = '0614ea1f9dd043e9ba157b9c20d3c538' //Paris
const ID_GENEVA = 'c6f90b19164c4283884361005faea852' 
const ID_LUCERNE = '6043821c854345e4b6d56c9b0765079d'
const ID_LYON = 'ba138a72546a46faa94983a4f0eceb95'

class SceneViewNewYork extends Component {

    render() {
        return (
            <SceneView id = "newyork">
                <Scene portalItem={{id: IDNY1}}>   
                    <Layer id="building" layerType="scene" url={"8be4db26e0784d919923fd91f6cc9882"}></Layer>

                </Scene>
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

export class SceneViewLyon extends Component {
    render() {
        return ( 
            <SceneView id = "lyon">
                <Scene portalItem={{id: ID_LYON}}></Scene>
            </SceneView>
        )
    }
}

export default SceneViewNewYork;

