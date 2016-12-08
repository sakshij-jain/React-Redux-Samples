import { dispatch } from 'redux-thunk';
import axios from 'axios';


export const changeTitle = (title) => {
  return {
    type: 'TODO_TITLE_CHANGED',
    payload: title
  }
}

export const createTodo = (title) =>  {
  return (dispatch) => {

    dispatch({
      type: 'TODO_CREATE'
    });

    axios({
      method: 'post',
      url: 'http://localhost:3000/api/Todos',
      data: {
        title,
        completed: false
      }
    }).then((response) => {
      dispatch({
        type: 'TODO_CREATE_SUCCESS',
        payload: response.data
      });
    }).catch((error) => {
      dispatch({
        type: 'TODO_CREATE_ERROR',
        payload: 'Failed to save todo'
      });
    });

  }
}
