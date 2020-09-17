import * as actionTypes from 'store/actions/actionTypes';
import { auth, firestore } from 'firebase';

import {fetchUsers} from "store/actions/auth/users";


export const login = (email, password) => {
    return  async dispatch => {
        dispatch(loginStartDispatch());
        auth()
        .signInWithEmailAndPassword(email, password)
        .then((data) => {
            const db = firestore();
            db.collection('users')                   
            .doc(data.user.uid)
            .update({
                isOnline: true
            })

            .then(() => {
                db.collection('users').onSnapshot((querySnapshot) => {
                    querySnapshot.forEach(function(doc) {
                        if(doc.data().uid === data.user.uid){
                            const userFullName = doc.data().name + ' ' + doc.data().surname;
                            dispatch(returnUserFullNameDispatch( userFullName));
                        }                                       
                    })   
                })  


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

                
                // Call fetchUsers function from user action
                dispatch(fetchUsers( data.user.uid, data.user.refreshToken));

                
            })
            .catch(error => {
                console.log(error)
            })

        })
        .catch(error => {
            console.log(error);
            dispatch(loginFailDispatch(error.message));
        })        
        
    }
}
export const returnUserFullNameDispatch = (userFullName)=> {
    return {
        type: actionTypes.UPDATE_USER_FULL_NAME,
        userFullName: userFullName
    };
}; 

export const loginStartDispatch = ()=> {
    return {
        type: actionTypes.LOGIN_START
    };
}; 

export const loginSuccessDispatch = (token, userId)=> {
    return {
        type: actionTypes.LOGIN_SUCCES,
        idToken: token,
        userId: userId

    };
}; 

export const loginFailDispatch = (error)=> {
    return {
        type: actionTypes.LOGIN_FAIL,
        error: error
    };
}; 

export const signinPrepareDispatch = ()=> {
    return {
        type: actionTypes.SIGNIN_PREPARE,
    };
}; 