import * as actionTypes from 'store/actions/actionTypes';
import * as constants from 'shared/constants';
import axios from 'axios';

export const login = (email, password) => {
    return  dispatch =>{
        dispatch(loginStart());
        // debugger
        const authData = {
            email:email,
            password:password,
            returnSecureToken: true
        }
        let url = constants.FIREBASE_SIGNIN_URL + constants.FIREBASE_WEB_API_KEY;
        // 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyChnJy-U_GSguuDPtUWT0PPKaHfM_rsqCs';
        axios.post(url,authData)
        .then(response =>{
            console.log(response);
            // const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
            // localStorage.setItem('token', response.data.idToken);
            // localStorage.setItem('expirationDate', expirationDate);
            // localStorage.setItem('userId', response.data.localId);
            dispatch(loginSuccess(response.data.idToken, response.data.localId));
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

