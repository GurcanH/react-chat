import * as actionTypes from 'store/actions/actionTypes';
import {firestore } from 'firebase';

import {signupSuccess} from "store/actions/signup";

export const fetchUsers = (uid, token) => {
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
            dispatch(signupSuccess(token, uid));
            dispatch({ 
                type: actionTypes.UPDATE_USERS,
                users: { users }
            });

        });

        return unsubscribe;

    }

}
