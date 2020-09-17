import * as actionTypes from 'store/actions/actionTypes';
import {updateState} from 'shared/utility' ;

const initialState =  {
    token: null,
    userId: null,
    error: null,
    loading: false,
    isSignInMode: true,
    userFullName: '',
    users: []
}

const updateUserFullNameState  = (state, action) => {
    return updateState(state, {userFullName: action.userFullName});
};

const updateLoginStartState  = (state, action) => {
    return updateState(state, {error: null, loading: true});
};

const updateLoginSuccessState = (state, action) => {
    return updateState(state, {
        token:action.idToken,
        userId: action.userId,
        error: null, 
        loading: false,
        isSignInMode: false        
    });
};

const updateLoginFailState = (state, action) => {
    return updateState(state, {
        error: action.error, 
        loading: false
    });
}

const updateLogoutState = (state, action) => {
    return updateState(state, {token:null, userId:null, isSignInMode: true})
};

const updatteSigninStateAsFalse = (state, action) => {
    return updateState(state, {isSignInMode:false})
};

const updatteSigninStateAsTrue = (state, action) => {
    return updateState(state, {isSignInMode:true})
};

const updateUsersState = (state, action) => {
    return updateState(state, {users:action.users})
};



const reducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.LOGIN_START: return updateLoginStartState(state, action);
        case actionTypes.LOGIN_SUCCES: return updateLoginSuccessState(state, action);  
        case actionTypes.SIGNUP_SUCCES: return updateLoginSuccessState(state, action);  
        case actionTypes.LOGIN_FAIL: return updateLoginFailState(state, action);  
        case actionTypes.LOGOUT: return updateLogoutState(state, action); 
        case actionTypes.SIGNUP_PREPARE: return updatteSigninStateAsFalse(state, action); 
        case actionTypes.SIGNIN_PREPARE: return updatteSigninStateAsTrue(state, action); 
        case actionTypes.UPDATE_USERS: return updateUsersState(state, action);
        case actionTypes.UPDATE_USER_FULL_NAME: return updateUserFullNameState(state, action);                        
        default: return state;
    }
}

export default reducer;
