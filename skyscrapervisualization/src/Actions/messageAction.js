import Axios from "axios";

export const createMessage = (buildingInfo, history) => async dispatch => {
    try{
        let res = await Axios.post("http://localhost:8080/api/skyscraper", buildingInfo);
        history.push("/");

    }catch(exception) {
        dispatch({
        })
    }
}
