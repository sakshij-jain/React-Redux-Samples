import React from 'react';

import Counter from './Counter';

class CounterContainer extends React.Component{

  constructor() {
    super();
    this.state = {
      count : 0
    }
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrement(){
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <div>
        <Counter count={this.state.count} increment={this.increment.bind(this)} decrement={this.decrement.bind(this)} />
      </div>
    );
  }
}

export default CounterContainer;
