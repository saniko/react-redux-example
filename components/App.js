import React, { Component } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'


class App extends Component {

  render() {
      return (
        <div>
          <h1>Todo List:</h1>
          <TodoInput addTodo={this.props.actions.addTodo}/>
          <TodoList actions={this.props.actions} todos={this.props.todos}/>
        </div>
      )
    }
}

/*
We use this method to define how we are going to map the state from the Redux store to the props being sent to the
components connected to listen to the store. Whenever new changes happen in the store, the components get notified and
are passed to the object payload from this method.
*/
function mapStateToProps(state) {
  return state;
}

/*
This method is used to map the Actions and pass them on the props so that they can be used
from within the component.
*/
function mapDispatchToProps(dispatch){
  return {
    /*
    bindActionCreators - this is used to wrap our Actions creator (actions) into dispatch calls to support
    calling the actions directly. This helps to call the actions and notify
    the store for updates, which are done due to the dispatch.
    */
   actions: bindActionCreators(actions, dispatch)
  }
}

/*
connects the React component to the store. It does not change the original component,
but enhances and creates a new one. We can then start using the Actions from our component.
connect gives us access to dispatch function.
*/
export default connect(mapStateToProps, mapDispatchToProps)(App);
