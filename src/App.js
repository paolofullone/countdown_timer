import React, { Component } from 'react';
import './App.css';
import logo from './logo-xpi.svg';
import Header from '../src/Components/header'


const ONE_SECOND = 1000;
const TIME_LIMIT = 0;
const TIME_START = 5 * 60;

export default class Timer extends Component {
  state = {
    seconds: TIME_START,
    isDecreasing: false,
    stopped: false,
  };

  // if reaches 0, stop timer.
  componentDidUpdate() {
    const { seconds } = this.state;
    if (seconds === TIME_LIMIT) {
      this.stop();
    }
  }

  // function to start countdown timer
  countdown = () => {
    this.timerId = setInterval(() => {
      this.setState((prevState) => ({
        seconds: prevState.seconds - 1,
      }));
    }, ONE_SECOND);
    this.setState({
      isDecreasing: true,
      stopped: false,
    })
  }

  // function to stop countdown
  stop = () => {
    clearInterval(this.timerId);
    const { isDecreasing, stopped } = this.state;
    this.setState({
      isDecreasing: !isDecreasing,
      stopped: !stopped,
    })
  }

  reset = () => {
    this.setState({
      seconds: TIME_START,
      stopped: false,
    })
  }

  secs = () => {
    const { seconds } = this.state;
    return seconds % 60
  }
  mins = () => {
    const { seconds } = this.state;
    return Math.floor(seconds/60)
    }

  hours = () => {

  }
  
  increase = () => {
    this.setState((prevState) => ({
      seconds: prevState.seconds + 60,
    }))
  }

  decrease = () => {
  this.setState((prevState) => ({
    seconds: prevState.seconds - 60,
  }))
}

  render() {
    const { isDecreasing, stopped } = this.state;
      return (
        <div>
          <Header />
          <h2 className='container title'>Estamos só começando.</h2>
          <section className="timer container">
            <igm src={logo}/>
            <span>{String(this.mins()).padStart(2, '0')}</span>
            <span>:</span>
            <span>{String(this.secs()).padStart(2, '0')}</span>
          </section>
          <div className="container">
            <div>
              <button className="btn" type="button" onClick={this.countdown} disabled={isDecreasing}>{!stopped ? 'Start' : 'Resume'}</button>
              <button className="btn" type="button" onClick={ this.increase } disabled={isDecreasing}>+</button>
              <button className="btn" type="button" onClick={this.decrease} disabled={isDecreasing}>-</button>
            </div>
          </div>
          <div className='container'>
            <div>
              <button className="btn" type="button" onClick={this.stop} disabled={stopped}>Stop</button>
              <button className="btn" type="button" onClick={ this.reset } disabled={isDecreasing}>Reset</button>
          </div>
          </div>

        </div>
      );
    }
}
