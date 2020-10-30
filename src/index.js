import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles'
import FirebaseContextProvider from './contexts/Firebase'
import App from './App';

ReactDOM.render(
  <FirebaseContextProvider>
    <GlobalStyles />
    <App />
  </FirebaseContextProvider>,
  document.getElementById('root')
);


