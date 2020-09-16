import * as actionTypes from 'store/actions/actionTypes';
import { auth, firestore } from 'firebase';


import {fetchUsers} from "store/actions/users";

export const signup = (email, password) => {
    return  async (dispatch) => {
        dispatch(signupStart());
        const db = firestore();

        auth()
        .createUserWithEmailAndPassword(email, password)
        .then(data => {
            console.log(data);
            const currentUser = auth().currentUser;
            const userName = email.substr(0, email.indexOf('@'));

            currentUser.updateProfile({
                displayName: userName
            })
            .then(() => {
                //if you are here means it is updated successfully
                db.collection('users')
                .doc(data.user.uid)
                .set({
                    userName: userName,
                    uid: data.user.uid,
                    createdAt: new Date(),
                    isOnline: true, 
                    email: email
                })
                .then(() => {
                    //succeful
                    dispatch(signupSuccess(data.user.refreshToken, data.user.uid));
                    dispatch(fetchUsers( data.user.uid, data.user.refreshToken));
                })
                .catch(error => {
                    console.log(error);
                    dispatch(signupFail(error.response.data.error));
                    
                });
            });
        })
        .catch(error => {
            console.log(error);
        })

    }
}

export const signupStart = ()=> {
    return {
        type: actionTypes.LOGIN_START
    };
}; 

export const signupSuccess = (token, userId)=> {
    return {
        type: actionTypes.SIGNUP_SUCCES,
        idToken: token,
        userId: userId

    };
}; 

export const signupFail = (error)=> {
    return {
        type: actionTypes.SIGNUP_FAIL,
        error: error
    };
}; 

export const signupPrepare = ()=> {
    return {
        type: actionTypes.SIGNUP_PREPARE,
        isSignInMode: false,
    };
}; 
