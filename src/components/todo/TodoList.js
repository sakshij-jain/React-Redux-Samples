import React from 'react';
import TodoListItem from './TodoListItem';

class TodoList extends React.Component{

  render() {

    var todoItem = () => this.props.todos.map((todo, index) => {
      return <TodoListItem  key={index} todo={todo} />;
    });

    return (
      <div>
        <ul style={styles.listStyle}>
          { todoItem() }
        </ul>
      </div>
    );
  }
}

const styles = {
  listStyle: {
    listStyleType: 'none'
  }
}

export default TodoList;
