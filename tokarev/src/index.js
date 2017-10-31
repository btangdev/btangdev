import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { AppContainer } from 'react-hot-loader';

import * as firebase from 'firebase';

var auth;
var config = {
    apiKey: "AIzaSyAKHlAjymNEnScE3tq5bkrkDjn1wQxACSk",
    authDomain: "gy-1003.firebaseapp.com",
    databaseURL: "https://gy-1003.firebaseio.com",
    projectId: "gy-1003",
    storageBucket: "gy-1003.appspot.com",
    messagingSenderId: "1040764564678"
};
firebase.initializeApp(config);
auth = firebase.auth();

var authProvider = new firebase.auth.GoogleAuthProvider();

auth.onAuthStateChanged(function(user) {
    user = firebase.auth().currentUser;
    if (user) {
      // User is signed in.
      console.log(user.displayName);
      console.log('uid: ' + user.uid);
    } else {
      // No user is signed in.
      auth.signInWithPopup(authProvider);
    }
  });

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>
    , document.getElementById('root')
);

// if (module.hot) {
//     module.hot.accept('./App', () => {
//         const NextApp = require('./App').default;
//         ReactDOM.render(
//             <AppContainer>
//                 <NextApp />
//             </AppContainer>,
//             document.getElementById('root')
//         );
//     });
// }
