import React, { Component } from 'react';
import Dashboard from './At-Bat/Dashboard';
import Display from './At-Bat/Display';

import './App.css';
import { exists } from 'fs';
import { endianness } from 'os';


class App extends Component {
  state = {
    ball:0,
    strike:0,
    
  };
  
  hit = () =>{
    this.setState({ball:0,strike:0});
  }
  
  miss = () => {
    if(this.state.strike >= 2){
      this.setState({ball:0,strike:0});
    }else{
    this.setState({strike: this.state.strike +1})
    }
  }

  foulBall = () => {
    if(this.state.strike < 2){
      this.setState({strike:this.state.strike +1})
    }else{
      return;
    }
  }
  Ball = () => {
    if(this.state.ball >= 3){
      this.setState({ball:0,strike:0})
    }else{
      this.setState({ball:this.state.ball+1})
    }
  }

  render() {
    return (
      <div className="App">
        <Display ball={this.state.ball} strike={this.state.strike}/>
        <Dashboard ball={this.state.ball} strike={this.state.strike} hit={this.hit} miss={this.miss} foulBall={this.foulBall} Ball={this.Ball}/>
      </div>
    );
  }

}

export default App;
