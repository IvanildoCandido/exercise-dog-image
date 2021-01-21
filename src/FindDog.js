import React, { Component } from 'react';
import './FindDog.css';
class FindDog extends Component {
  render() {
    const { url, findNextDog } = this.props;
    return (
      <div>
        <img src={url}></img>
        <button className="btn" type="button" onClick={findNextDog}>
          Next Dog
        </button>
      </div>
    );
  }
}

export default FindDog;
