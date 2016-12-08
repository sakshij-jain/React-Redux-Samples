import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

class TodoContainer extends React.Component{

  constructor() {
    super();
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/Todos')
    .then(response => {
      this.setState({todos: response.data})
    })
    .catch(
      error => console.log(error)
    );
  }

  submitHandler(data){

    var tempId = new Date().getTime();
    var state = Object.assign({}, this.state, { id: tempId });
    state.todos.push(state);
    this.setState(state);

    axios({
      method: 'post',
      url: 'http://localhost:3000/api/Todos2',
      data: data
    }).then((response) => {
      var newState = Object.assign({}, this.state);
      newState.todos.forEach((todo) => {
        if(todo.id === tempId) {
          todo.id = response.data.id;
        }
      });
      this.setState(newState);
    }).catch((error) => {
      console.log(error);
      var newState = Object.assign({}, this.state);
      newState.todos.forEach((todo) => {
        if(todo.id === tempId) {
          todo.error = true;
        }
      });
      this.setState(newState);
    });

  }

  render() {

    return (
      <div>
        <h1>TO-DOs</h1>
        <TodoList todos={this.state.todos}/>
        <TodoForm submitHandler={this.submitHandler.bind(this)} />
      </div>
    );
  }

}

export default TodoContainer;
