import Get from "../../../api_Call/Get";
import Post from "../../../api_Call/Post";
import { ShowToast } from "../../../utils/CommonUtils";
import ActionType from "./ActionType";

export const User_Login = (data) => {
    return dispatch => {

    }
}

export const get_Banner = (token) => {
    return dispatch => {
        return Get('api/settings', token)
            .then(response => {
                if (response.success) {
                    dispatch({ type: ActionType.BANNER, payload: response.data.first_banner })
                }
            }).catch(error => {
                console.log(error)
                return error.response.data
            })
    }
}

