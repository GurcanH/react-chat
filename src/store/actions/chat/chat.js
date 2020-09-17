import * as actionTypes from 'store/actions/actionTypes';
import {firestore } from 'firebase';

export const fetchMessages = (userSendUID, userReceiveUID) => {
    return async (dispatch) => {

        // const db = firestore();
        // const unsubscribe = db.collection("users")
        // .onSnapshot((querySnapshot) => {
        //     const users = [];
        //     querySnapshot.forEach(function(doc) {
        //         if(doc.data().uid !== uid){
        //             users.push(doc.data());
        //         }
        //     });
        //     dispatch(signupSuccess(token, uid));
        //     dispatch({ 
        //         type: actionTypes.UPDATE_USERS,
        //         users: users ,
        //         userName: userName
        //     });

        // });

        // return unsubscribe;

    }

}
export const changeReceiveUID = (userReceiveUID,userSendUID) => {
    return {
        type: actionTypes.CHANGE_ACTIVE_USER,
        userReceiveUID: userReceiveUID,
        userSendUID:userSendUID
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
        console.log(msgObj)
        const db = firestore();
        db.collection('messages')
        .add({
            ...msgObj,
            isView: false
        })
        .then((data) => {
            console.log(data)
            //success
            // dispatch({
            //     type: userConstants.GET_REALTIME_MESSAGES,
            // })


        })
        .catch(error => {
            console.log(error)
        });
       

    }

}
