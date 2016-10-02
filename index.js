import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Immutable from 'immutable';
import newsReducer from './src/redux/reducers/news';

const store = createStore(newsReducer, undefined, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

import NewsList from './src/containers/NewsList.jsx';

export const App = () => {
  return (
    <div className="app container">
      <Provider store={store}>
        <NewsList />
      </Provider>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#render'));
