const INITIAL_STATE = {
  title: '',
  processing: false,
  error: false
}

const TodoReducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case 'TODO_TITLE_CHANGED':
      return Object.assign({}, state, { title : action.payload });
    case 'TODO_CREATE':
      return Object.assign({}, state, { processing : true });
    case 'TODO_CREATE_SUCCESS':
      return Object.assign({}, state, INITIAL_STATE);
    case 'TODO_CREATE_ERROR':
      return Object.assign({}, state, { processing: true, error: action.payload});
    default:
      return state;
  }
}

export default TodoReducer;
