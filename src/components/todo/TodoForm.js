import React from 'react';
import TextBox from './TextBox';
import { changeTitle, createTodo } from '../../actions';
import { connect } from 'react-redux';

class TodoForm extends React.Component{
  constructor(props) {
    super(props);
  }

  handleChange(event){
    this.props.changeTitle(event.target.value);
  }

  handleSubmit(evt){
    evt.preventDefault();
    this.setState({
      title: ''
    });
    this.props.createTodo(this.props.title);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <br />
        <TextBox name="title" title={this.props.title} handleChange={this.handleChange.bind(this)}/>
        <br />
        <input type="submit" value="Create ToDo "/>
      </form>
    );
  }
}

const mapStateToProps = ({todo}) => {
  console.log(todo);
  const { title } = todo
  return {
    title
  }
}

export default connect(mapStateToProps, {
  changeTitle,
  createTodo
})(TodoForm);
