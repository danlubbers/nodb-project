import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
class App extends Component {
    constructor() {
      super();

      this.state = {
        sportGear: [],
        boulderingGear: [],
        baseURL: '/api/'
      }


    }

  componentDidMount() {
    axios.get(`${this.state.baseURL}/gear`).then(res => { 
      this.setState({ sportGear: res.data[0] }, console.log('Get Gear'));     
    });
  }

  updatePost(id, text) {
    axios.put(`${this.state.baseURL}/gear?id=${id},`).then(res => {
      this.setState({ sportGear: res.data[0]}, console.log('Put Gear'))
    });
  }

  createPost(text) {
    axios.post(`${this.state.baseURL}/gear`, ).then(res => { 
      this.setState({ sportGear: res.data[0] }, console.log('Post Gear'))
    });
  }

  deletePost(id) {
    axios.delete(`${this.state.baseURL}/gear?id=${id},`).then(res => {
      this.setState({ sportGear: res.data[0]}, console.log('Delete Gear'))
    });
  }

  render() {
    let sportGearArray = this.state.sportGear.map((element, index) => {
      console.log(element)
      return (
        <div key={index}>
          <h1 >{element.text}</h1>
        </div>
      )
    })



    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Climbing Gear TEST</h1>
        </header>   
          {sportGearArray}        
      </div>
    );
  }
}

export default App;
