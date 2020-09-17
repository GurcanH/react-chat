import * as actionTypes from 'store/actions/actionTypes';
import {updateObject} from 'shared/utility' ;

const initialState =  {
    userSendUID: null,
    userReceiveUID: null,
    message: null,
    messageDate:null,
    messages: []

}

const sendMessage  = (state, action) => {
    return updateObject(state, {message: action.message, messageDate: new Date()});
};

const changeReceiveUID  = (state, action) => {
    return updateObject(state, {userReceiveUID: action.userReceiveUID, userSendUID: action.userSendUID});
};



const reducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.SEND_MESSAGE: return sendMessage(state, action);
        case actionTypes.CHANGE_ACTIVE_USER: return changeReceiveUID(state, action);                              
        default: return state;
    }
}

export default reducer;
