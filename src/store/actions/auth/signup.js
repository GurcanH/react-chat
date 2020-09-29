import * as actionTypes from 'store/actions/actionTypes';
// import { auth, firestore } from 'firebase/app';
import { auth, firestore } from 'firebase/app';
import 'firebase/auth';        // for authentication
import 'firebase/firestore';   // for cloud firestore


import {fetchUsers} from "store/actions/auth/users";

export const signup = (name, surname, email, password) => {
    return  async (dispatch) => {
        dispatch(signupStartDispatch());
        const db = firestore();

        auth()
        .createUserWithEmailAndPassword(email, password)
        .then(data => {
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
                    name: name,
                    surname: surname,
                    uid: data.user.uid,
                    createdAt: new Date(),
                    isOnline: true, 
                    email: email, 
                    userName: userName
                })
                .then(() => {
                    //succeful
                    dispatch(signupSuccessDispatch(data.user.refreshToken, data.user.uid));
                    dispatch(fetchUsers( data.user.uid, data.user.refreshToken));
                    dispatch(returnUserFullNameDispatch( name + ' ' + surname));
                })
                .catch(error => {
                    console.log(error);
                    dispatch(signupFailDispatch(error.response.data.error));
                    
                });
            });
        })
        .catch(error => {
            console.log(error);
        })

    }
}
export const returnUserFullNameDispatch = (userFullName)=> {
    return {
        type: actionTypes.UPDATE_USER_FULL_NAME,
        userFullName: userFullName
    };
}; 

export const signupStartDispatch = ()=> {
    return {
        type: actionTypes.LOGIN_START
    };
}; 

export const signupSuccessDispatch = (token, userId)=> {
    return {
        type: actionTypes.SIGNUP_SUCCES,
        idToken: token,
        userId: userId

    };
}; 

export const signupFailDispatch = (error)=> {
    return {
        type: actionTypes.SIGNUP_FAIL,
        error: error
    };
}; 

export const signupPrepareDispatch = ()=> {
    return {
        type: actionTypes.SIGNUP_PREPARE,
    };
}; 
