import React, { Component } from 'react';

class Band extends Component {
  handleOnClick = () => {
    this.props.deleteBand(this.props.id)
  }
  render() {
    console.log('Band', this.props)
    return(
      <div>
        Band Component
        <li>{this.props.name}</li>
        <button onClick={this.handleOnClick}>
          Delete
        </button>
      </div>
    );
  }
};

export default Band;
