import React from 'react';

class Counter extends React.Component{

  render() {
    return (
      <div>
        <br />
        <span>{this.props.count}</span>
        <br />
        <input type="submit" value=" + " onClick={this.props.increment}/>
        <input type="submit" value=" - " onClick={this.props.decrement} />
      </div>
    );
  }
}

export default Counter;
