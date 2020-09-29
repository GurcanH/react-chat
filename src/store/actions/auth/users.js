import * as actionTypes from 'store/actions/actionTypes';
// import {firestore } from 'firebase';

import {  firestore } from 'firebase/app';
import 'firebase/firestore';   // for cloud firestore

import {signupSuccessDispatch} from "store/actions/auth/signup";

export const fetchUsers = (uid, token, userName) => {
    return async (dispatch) => {

        const db = firestore();
        const unsubscribe = db.collection("users")
        .onSnapshot((querySnapshot) => {
            const users = [];
            querySnapshot.forEach(function(doc) {
                if(doc.data().uid !== uid){
                    users.push(doc.data());
                }
            });
            dispatch(signupSuccessDispatch(token, uid));
            dispatch({ 
                type: actionTypes.UPDATE_USERS,
                users: users ,
                userName: userName
            });

        });

        return unsubscribe;

    }

}

export const logoutDispatch = ()=> {
    return {
        type: actionTypes.LOGOUT,
    };
}; 