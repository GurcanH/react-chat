import * as actionTypes from 'store/actions/actionTypes';
import {updateState} from 'shared/utility' ;

const initialState =  {
    userSendUID: null,
    userReceiveUID: null,
    message: null,
    messageDate:null,
    receiverFullName: null,
    messages: []

}

const updateMessageState  = (state, action) => {
    return updateState(state, {message: action.message, messageDate: new Date()});
};

const ClearMessageState  = (state, action) => {
    return updateState(state, {message: ''});
};

const updateReceiveInfoState  = (state, action) => {
    return updateState(state, {
            userReceiveUID: action.userReceiveUID, 
            userSendUID: action.userSendUID,
            receiverFullName: action.receiverFullName
        });
};

const updateFullMessageState  = (state, action) => {
    return updateState(state, {messages: action.messages});
};



const reducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.SEND_MESSAGE: return updateMessageState(state, action);
        case actionTypes.CHANGE_ACTIVE_USER: return updateReceiveInfoState(state, action); 
        case actionTypes.CLEAR_CHAT_BOX: return ClearMessageState(state, action);
        case actionTypes.FETCH_MESSAGES: return updateFullMessageState(state, action);
        
        
        default: return state;
    }
}

export default reducer;
