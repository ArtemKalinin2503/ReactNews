import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import _ from 'lodash';
import News from './components/News';

//Основной компонент 
class App extends Component {
  render() {
    return (
      <div className="App">
        <header></header>
          <div className="main">
            Основноной компонет
          </div>
          <div className="component-news">
            <News />
          </div>
        <footer></footer>
      </div>
    );
  }
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

