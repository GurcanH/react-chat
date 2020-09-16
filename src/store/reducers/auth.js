import * as actionTypes from 'store/actions/actionTypes';
import {updateObject} from 'shared/utility' ;

const initialState =  {
    token: null,
    userId: null,
    error: null,
    loading: false
}


const loginStart  = (state, action) => {
    return updateObject(state, {error: null, loading: true});
};

const loginSuccess = (state, action) => {
    return updateObject(state, {
        token:action.idToken,
        userId: action.userId,
        error: null, 
        loading: false});
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

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.LOGIN_START: return loginStart(state, action);
        case actionTypes.LOGIN_SUCCES: return loginSuccess(state, action);  
        case actionTypes.LOGIN_FAIL: return loginFail(state, action);  
        case actionTypes.LOGOUT: return logout(state, action); 
        default: return state;
    }
}

export default reducer;
