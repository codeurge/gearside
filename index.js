import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export const App = () => {
  return (
    <div className="app container">
      <h1>Gearside News</h1>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#render'));
