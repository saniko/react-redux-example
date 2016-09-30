/*
This is an action creator file, a component can import this file
and fire an actions
*/

let actions = {

  addTodo: function(text){
    return {
      type: "ADD_TODO",
      text: text
    }
  },
  deleteTodo: function(id){
    return {
      type: "DELETE_TODO",
      id: id
    }
  },
  completeTodo: function(id){
    return {
      type: "COMPLETE_TODO",
      id: id
    }
  }
}

export default actions
