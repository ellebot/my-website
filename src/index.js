import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import galaxybun from './auto_galaxybun_small.jpg';
import galaxybun2 from './galaxybun1_small.jpg';
import { CSSTransitionGroup } from 'react-transition-group';
/*
function ImageCarousel(props) {
  return (
    <div>
      <CSSTransitionGroup
        transitionName="carousel"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}>
        <img src={props.imageSrc} key={props.imageSrc} />
      </CSSTransitionGroup>
    </div>
  );
}*/

function RenderImage(props){
  return (
    <img src={props.nextImage} alt="current slide in gallery" />
  );
}

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: [galaxybun, galaxybun2],
      imageIndex: 0,
      timer: 0,
      };
    this.nextImage = this.nextImage.bind(this);
  }
  
   nextImage() {
    let current = this.state.imageIndex + 1;
    if (current >= this.state.gallery.length) {
      current = 0;
    }
    this.setState({
      gallery: this.state.gallery,
      imageIndex: current,
      timer: this.state.timer,
    });
    //return <img src={this.state.gallery[this.state.imageIndex]} alt="current slide in gallery" onAnimationEnd={()=> return ({this.nextImage()});}/>
    //this.forceUpdate();
  }
  
  timer(){
    let nextSecond = this.state.timer + 1;
    this.setState({
      gallery: this.state.gallery,
      imageIndex: this.state.imageIndex,
      timer: nextSecond,
    });
  }
  
  componentDidMount() {
    this.interval = setInterval(() => this.nextImage(), 3000);
    this.interval = setInterval(() => this.timer(), 1000);
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  render() {
    return (     
      <div className="App">
      <h1> Hello, and welcome to Elle's art page! </h1>
      <div>Bunny Image: {this.state.imageIndex + 1}</div>
      <div>Seconds elapsed: {this.state.timer}</div>
      //  {this.nextImage()}
      <RenderImage nextImage={this.state.gallery[this.state.imageIndex]} />
      </div>
    );
  }
}

ReactDOM.render(<Hello />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
