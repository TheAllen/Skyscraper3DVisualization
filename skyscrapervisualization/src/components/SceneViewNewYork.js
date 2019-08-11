import React, { Component } from 'react';
import { SceneView, Scene } from 'react-sceneview';

const ID = '34859cee6739438d93262a5aa91bf834'
const ID1 = '0614ea1f9dd043e9ba157b9c20d3c538'

class SceneViewNewYork extends Component {

    render() {
        return (
            <SceneView id = "sceneview">
                <Scene portalItem={{id: ID1}}></Scene>
            </SceneView>
            // <SceneView id="sceneview">
            //     <Scene>
            //         <Layer id="buildings" layerType="scene" url={SCENE_LAYER_URL} />
            //         <Layer id="districts" layerType="feature" url={FEATURE_LAYER_URL} />
            //     </Scene>
            // </SceneView>
        )
    }
}

export default SceneViewNewYork;

