import React, {Component} from 'react';
import {SceneView, Scene} from 'react-sceneview';

class SceneViewNewYork extends Component {

    render() {
        return(
            <SceneView id = "sceneview">
                <Scene portalItem={{id: '34859cee6739438d93262a5aa91bf834'}}></Scene>
            </SceneView>
        )
    }
}

export default SceneViewNewYork;

