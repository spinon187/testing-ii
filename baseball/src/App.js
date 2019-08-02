import React, { Component } from 'react';
import Display from './components/Display.js';
import './App.css';
import Dashboard from './components/Dashboard.js';
import Scoreboard from './components/Scoreboard.js';

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
          balls: 0,
          strikes: 0
        })
      }
    }

    out = () => {
      if(this.state.outs < 2){
        this.setState({
          ...this.state,
          balls: 0,
          strikes: 0,
          outs: this.state.outs + 1
        })
      }
      else {
        if(this.state.atBat === 'away'){
          this.setState({
            ...this.state,
            balls: 0,
            strikes: 0,
            outs: 0,
            atBat: 'home'
          })
        }
        else {
          this.setState({
            ...this.state,
            balls: 0,
            strikes: 0,
            outs: 0,
            atBat: 'away',
            inning: this.state.inning + 1
          })
        }
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
        this.out();
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
        <Scoreboard 
          inning={this.state.inning}
          atBat={this.state.atBat}        
        />
        <Display
          balls={this.state.balls}
          strikes={this.state.strikes}
          outs={this.state.outs}
        />
        <Dashboard 
          ball={this.ball}
          strike={this.strike}
          foul={this.foul}
          hit={this.hit}
          out={this.out}
        />
      </div>
    );
  }
}

export default App;
