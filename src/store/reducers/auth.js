import * as actionTypes from 'store/actions/actionTypes';
import {updateObject} from 'shared/utility' ;

const initialState =  {
    token: null,
    userId: null,
    error: null,
    loading: false,
    isSignInMode: true,
    users: []
}


const loginStart  = (state, action) => {
    return updateObject(state, {error: null, loading: true});
};

const loginSuccess = (state, action) => {
    return updateObject(state, {
        token:action.idToken,
        userId: action.userId,
        error: null, 
        loading: false,
        isSignInMode: false        
    });
};

const loginFail = (state, action) => {
    return updateObject(state, {
        error: action.error, 
        loading: false
    });
}

const logout = (state, action) => {
    return updateObject(state, {token:null, userId:null})
};

const signupPrepare = (state, action) => {
    return updateObject(state, {isSignInMode:false})
};

const updateUsers = (state, action) => {
    return updateObject(state, {users:action.users})
};



const reducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.LOGIN_START: return loginStart(state, action);
        case actionTypes.LOGIN_SUCCES: return loginSuccess(state, action);  
        case actionTypes.SIGNUP_SUCCES: return loginSuccess(state, action);  
        case actionTypes.LOGIN_FAIL: return loginFail(state, action);  
        case actionTypes.LOGOUT: return logout(state, action); 
        case actionTypes.SIGNUP_PREPARE: return signupPrepare(state, action); 
        case actionTypes.UPDATE_USERS: return updateUsers(state, action);           
        default: return state;
    }
}

export default reducer;
