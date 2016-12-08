import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

import TodoContainer from './components/todo/TodoContainer';


class App extends React.Component{

  render() {

    const { containerStyle } = styles;
    const store = createStore(reducers, applyMiddleware(thunk));

    return (
      <Provider store={store}>
        <div style={containerStyle}>
          <TodoContainer />
        </div>
      </Provider>
    );
  }
}

var styles = {
  containerStyle: {
    padding: '20px',
    backgroundColor: '#F6F9FA'
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
