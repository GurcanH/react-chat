import * as actionTypes from 'store/actions/actionTypes';
import { auth, firestore } from 'firebase';

import {fetchUsers} from "store/actions/users";


export const login = (email, password) => {
    return  async dispatch => {
        dispatch(loginStart());
        auth()
        .signInWithEmailAndPassword(email, password)
        .then((data) => {
            console.log(data);

            const db = firestore();
            db.collection('users')
            .doc(data.user.uid)
            .update({
                isOnline: true
            })
            .then(() => {
                const name = data.user.displayName.split(" ");
                const firstName = name[0];
                const lastName = name[1];

                const loggedInUser = {
                    firstName,
                    lastName,
                    uid: data.user.uid,
                    email: data.user.email
                }

                localStorage.setItem('user', JSON.stringify(loggedInUser));

                dispatch(fetchUsers( data.user.uid, data.user.refreshToken));

                
            })
            .catch(error => {
                console.log(error)
            })

        })
        .catch(error => {
            console.log(error);
            dispatch(loginFail(error.response.data.error));
        })        
        
    }
}


export const loginStart = ()=> {
    return {
        type: actionTypes.LOGIN_START
    };
}; 

export const loginSuccess = (token, userId)=> {
    return {
        type: actionTypes.LOGIN_SUCCES,
        idToken: token,
        userId: userId

    };
}; 

export const loginFail = (error)=> {
    return {
        type: actionTypes.LOGIN_FAIL,
        error: error
    };
}; 

