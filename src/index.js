import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyAnM5az8MSNZtVyRVdLlN6Wi-rmK0gsph0',
  authDomain: 'jwc11-countdown.firebaseapp.com',
  databaseURL: 'https://jwc11-countdown.firebaseio.com',
  projectId: 'jwc11-countdown',
  storageBucket: 'jwc11-countdown.appspot.com',
  messagingSenderId: '718100085398'
}

firebase.initializeApp(config)

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
