import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import galaxybun from './auto_galaxybun_small.jpg';

class Hello extends React.Component {
  render() {
    return (     
      <div className="App">
      <h1> Hello, and welcome to my Elle's art page! </h1>
        <img src={galaxybun} className="w3-animate-fading" alt="galaxybun" />
      </div>
    );
  }
}

ReactDOM.render(<Hello />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
