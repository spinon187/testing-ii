import React, { Component } from 'react';
import './App.css';

class App extends Component {
    state = {
      balls: 0,
      strikes: 0,
      outs: 0,
      atBat: 'away',
      inning: 1
    }
    
    ball = () => {
      if(this.state.balls < 3){
        this.setState({
          ...this.state,
          balls: this.state.balls + 1
        })
      }
      else {
        this.setState({
          ...this.state,
          balls: 0
        })
      }
    }

    strike = () => {
      if(this.state.strikes < 2){
        this.setState({
          ...this.state,
          strikes: this.state.strikes + 1
        })
      }
      else {
        this.setState({
          ...this.state,
          strikes: 0
        })
      }
    }

    out = () => {
      if(this.state.outs < 2){
        this.setState({
          ...this.state,
          strikes: this.state.outs + 1
        })
      }
      else {
        this.setState({
          ...this.state,
          outs: 0
        })
        if(this.state.atBat === 'away'){
          this.setState({
            ...this.state,
            atBat: 'home'
          })
        }
        else {
          this.setState({
            ...this.state,
            atBat: 'away',
            inning: this.state.inning + 1
          })
        }
      }
    }

    hit = () => {
      this.setState({
        ...this.state,
        balls: 0,
        strikes: 0
      })
    }

    foul = () => {
      if(this.state.strikes < 2){
        this.setState({
          ...this.state,
          strikes: this.state.strikes + 1
        })
      }
    }


  render() {
    return (
      <div className="App">
       <div className='scoreboard'>
       </div>
       <div className='atBat'>
       <div className='balls'>
          <h2>Balls: {this.state.balls}</h2>
        </div>
        <div className='strikes'>
          <h2>Strikes: {this.state.strikes}</h2>
        </div>
        <div className='outs'>
          <h2>Outs: {this.state.outs}</h2>
        </div>
       </div>
       <div className='button-row'>
        <button onClick={this.ball}>Ball</button>
        <button onClick={this.strike}>Strike</button>
        <button onClick={this.foul}>Foul</button>
        <button onClick={this.hit}>Hit</button>
       </div>
      </div>
    );
  }
}

export default App;
