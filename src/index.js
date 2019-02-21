import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import galaxybun from './auto_galaxybun_small.jpg';
import galaxybun2 from './galaxybun1_small.jpg';
import { CSSTransition } from 'react-transition-group';

const duration = 1000;
const imageInterval = 5000;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 1,
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered:  { opacity: 1 },
  exiting: { opacity: 1 },
  exited:  { opacity: 0 }, 
};

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: [galaxybun, galaxybun2],
      currentIndex: 0,
      nextIndex: 1,
      time: 0,
      show: true,
      showNext: false,
      };
    //this.nextImage = this.nextImage.bind(this);
  }
  
   nextImage() {
    let next = (this.state.nextIndex + 1) % this.state.gallery.length;
    let transition = this.state.time % imageInterval;
    this.setState({
      currentIndex: transition != 0 ? this.state.currentIndex : this.state.nextIndex,
      nextIndex: transition != 0 ? this.state.nextIndex : next,
      show: this.state.show ? !this.state.show : this.state.show,
      showNext: this.state.showNext ? !this.state.showNext : this.state.showNext,
    });
   
    //return <img src={this.state.gallery[this.state.imageIndex]} alt="current slide in gallery" onAnimationEnd={()=> return ({this.nextImage()});}/>
    //this.forceUpdate();
  }
  
  timer(){
    this.setState({
      time: this.state.time + 1,
    });
  }
  
  componentDidMount() {
    this.interval = setInterval(() => this.nextImage(), imageInterval);
    this.interval = setInterval(() => this.timer(), 1000);
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  render() {
    return (     

      <div className="relative">
        <h1> Hello, and welcome to Elle&apos;s art page! </h1>
        <p>Bunny Image: {this.state.currentIndex + 1}</p>
        <p>Seconds elapsed: {this.state.time}</p>
            <CSSTransition 
              in = { this.state.show } 
              timeout = { duration }
              classNames="currentImage"
              appear
              unmountOnExit
              onExited={()=> {
                this.setState({
                  showNext: true,
                });
              }}
            >
              {(state) => (
                <div style={{
                 ...defaultStyle,
                 ...transitionStyles[state],
                }}>
                  <p> {state} </p>
                  <img src={this.state.gallery[this.state.currentIndex]} alt="current slide in gallery" />
                  
                </div> 
              )}
            </CSSTransition>
            
            <CSSTransition 
              in = { this.state.showNext } 
              timeout = { duration }
              classNames="currentImage"
              unmountOnExit
              onExited={()=> {
                this.setState({
                  show: true,
                });
              }}
            >
              {(state) => (
                <div style={{
                 ...defaultStyle,
                 ...transitionStyles[state]
                }}>
                  <p> {state} </p>
                  <img src={this.state.gallery[this.state.nextIndex]} alt="next slide in gallery" />
                </div> 
              )}
            </CSSTransition>
      </div>
      
    );
  }
}

ReactDOM.render(<Hello />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
