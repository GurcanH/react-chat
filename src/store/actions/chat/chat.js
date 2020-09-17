import * as actionTypes from 'store/actions/actionTypes';
import {firestore } from 'firebase';

export const fetchMessages = (userSendUID, userReceiveUID) => {
    return async (dispatch) => {
        const db = firestore();
        db.collection('messages')
        .orderBy('messageDate', 'asc')
        .onSnapshot((querySnapshot) => {

            const messages = [];
            querySnapshot.forEach(doc => {
                // console.log(doc.data());

                if (doc.data().userSendUID === userSendUID && doc.data().userReceiveUID === userReceiveUID) {
                    const obj = {type:'my', data:doc.data() }
                    messages.push(obj);
                }
                if (doc.data().userSendUID === userReceiveUID && doc.data().userReceiveUID === userSendUID) {
                    const obj = {type:'he', data:doc.data() }
                    messages.push(obj);
                }                
            });

            dispatch({
                type: actionTypes.FETCH_MESSAGES,
                messages: messages
            })

        })
    }

}
export const changeReceiveInfo = (obj) => {
    return {
        type: actionTypes.CHANGE_ACTIVE_USER,
        userReceiveUID: obj.userReceiveUID,
        userSendUID:obj.userSendUID,
        receiverFullName: obj.receiverFullName
    };
}
export const clearChatBox = () => {
    return {
        type: actionTypes.CLEAR_CHAT_BOX,        
    };
}
export const sendMessageDispatch = (message) => {
    return {
        type: actionTypes.SEND_MESSAGE,
        message: message,
    };
};
export const sendMessage = (msgObj) => {
    return async (dispatch) => {
        dispatch(sendMessageDispatch(msgObj.message));
        // console.log(msgObj)
        const db = firestore();
        db.collection('messages')
        .add({
            ...msgObj,
            isView: false
        })
        .then((data) => {
            dispatch(clearChatBox());
            // console.log(data)
        })
        .catch(error => {
            console.log(error)
        });       
    }

}
