import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware,compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';


import App from 'App';
import "index.css";  
import authReducer from 'store/reducers/auth';
import firebase from 'firebase';

const composeEnhancers = process.env.NODE_ENV === 'development' ?  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : null;



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxiHDPgUHDzwOcGzkcPOKUQ8Z3q0OzJWE",
  authDomain: "react-chat-641ad.firebaseapp.com",
  databaseURL: "https://react-chat-641ad.firebaseio.com",
  projectId: "react-chat-641ad",
  storageBucket: "react-chat-641ad.appspot.com",
  messagingSenderId: "536538522756",
  appId: "1:536538522756:web:b382af5f7c3f4315f94ed1",
  measurementId: "G-DTKL3QY5HL"
};


firebase.initializeApp(firebaseConfig);


const rootReducer = combineReducers({
  auth: authReducer
})

const store = createStore(rootReducer,  composeEnhancers  (
  applyMiddleware(thunk)
));
const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);


ReactDOM.render(
  app,
  document.getElementById('root')
);

