
// es6 syntax, same as:
// var rect = require('react')
import React from 'react'

// es6 syntax, same as:
// var render = require('react-dom').render
import { render } from 'react-dom'
import App from '../components/App'
import configureStore from '../redux/store'
import { Provider } from 'react-redux'

//let is a block scope local variable
let initialState = {
  todos: [{
    id: 1,
    completed: false,
    text: "text"
  }]
}

// create redux store with default state
let initStore = configureStore(initialState);

// render takes a component and a dom mounting point.
render(
  // jsx syntax
  <Provider store={ initStore }>
    <App />
  </Provider>,
  document.getElementById('appa')
)
