import React, { Component } from 'react';
import { SceneView, Scene } from 'react-sceneview';

const ID = '34859cee6739438d93262a5aa91bf834'
const IDNY ='d869fa255fd44726ae6e40264e290df1'
const IDNY1 = '4ea1f7566623413d8ada3b4a6b87c896' //New York
const ID1 = '0614ea1f9dd043e9ba157b9c20d3c538' //Paris
const ID2 = 'affa021c51944b5694132b2d61fe1057'

class SceneViewNewYork extends Component {

    render() {
        return (
            <SceneView id = "sceneview">
                <Scene portalItem={{id: IDNY1}}></Scene>
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

