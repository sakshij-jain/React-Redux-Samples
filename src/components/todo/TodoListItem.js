import React from 'react';

class TodoListItem extends React.Component {
  render() {
    const { itemStyle } = styles;
    const { title, error, id } = this.props.todo;

    const renderActions = () => {
      if(error) {
        return <button>Resend</button>
      }
    }

    return (
      <li>
        <input type="checkbox"></input> &nbsp;
        <span className="title">{title}</span>
        {renderActions()}
      </li>
    );
  }
}

var styles = {
  itemStyle: {
    padding: '5px',
    borderBottom: '1px solid #A9A9A9'
  }
}

export default TodoListItem;
