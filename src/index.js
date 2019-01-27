import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import galaxybun from './auto_galaxybun_small.jpg';
import galaxybun2 from './galaxybun1_small.jpg';

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: [galaxybun, galaxybun2],
      imageIndex: 0,
      };
  }
  
   nextImage() {
    let current = this.state.imageIndex + 1;
    if (current >= this.state.gallery.length) {
      current = 0;
    }
    this.setState({
      gallery: this.state.gallery,
      imageIndex: current,
    });
  }
  
  componentDidMount() {
    this.interval = setInterval(() => this.nextImage(), 10000);
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  render() {
    return (     
      <div className="App">
      <h1> Hello, and welcome to Elle's art page! </h1>
      <div>{this.state.imageIndex}</div>
      <img src={this.state.gallery[this.state.imageIndex]} className="w3-animate-fading" alt="image" />
      </div>
    );
  }
}

ReactDOM.render(<Hello />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
