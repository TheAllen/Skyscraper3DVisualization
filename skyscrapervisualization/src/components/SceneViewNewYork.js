import React, {Component} from 'react';
import {SceneView, Scene} from 'react-sceneview';

const ID = '34859cee6739438d93262a5aa91bf834'
const ID1 = 'ae53cf192181425ab999e8a19e41a6dc'

class SceneViewNewYork extends Component {

    render() {
        return(
            <SceneView id = "sceneview">
                <Scene portalItem={{id: ID}}></Scene>
            </SceneView>
        )
    }
}

export default SceneViewNewYork;

