import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
    constructor() {
      super();

      this.state = {
        sportGear: [],
        boulderingGear: [],
        baseURL: '/api',
        moreGear: ''
      }

      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleAddTask = this.handleAddTask.bind(this);
    }

  componentDidMount() {
    axios.get(`${this.state.baseURL}/gear`).then(res => { 
      this.setState({ sportGear: res.data[0] }, console.log('Get Gear'));     
    });
  }

  // function for Input Value
  handleInputChange(value) {
    this.setState({ moreGear: value});
  }

  // function for button
  handleAddTask() {
    let body = {
      newItem : {text : this.state.moreGear}
    }
    this.createPost(body)

  }
  // function for Adding Item to Packed List
  handleAddPacked() {

  }

  // function for Removing Item from Original List
  handleRemove() {
    
  }

  createPost(body) {
    axios.post(`${this.state.baseURL}/gear`, body).then(res => { 
      console.log(res.data)
      this.setState({ sportGear: res.data })
    });
  }

  updatePost(id, text) {
    axios.put(`${this.state.baseURL}/gear?id=${id}`,).then(res => {
      this.setState({ sportGear: res.data }, console.log('Put Gear'))
    });
  }

  

  deletePost(id) {
    axios.delete(`${this.state.baseURL}/gear?id=${id}`,).then(res => {
      this.setState({ sportGear: res.data}, console.log('Delete Gear'))
    });
  }

  render() {
    let sportGearArray = this.state.sportGear.map((element, index) => {
      return (
        <div key={element.id} className="main-body">
        {/* checkbox goes here */}
        <button onClick={this.handleAddPacked}>Add to Packed</button>
          {/* This is where my Object Array List is shown on site */}
          <h1>{element.text}</h1>
        {/* delete button goes here */}
        <button onClick={this.handleRemove}>Remove from List</button>
        </div>
      )
    })



    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Sport Climbing Gear List</h1>
        </header> 

        <section >
          <div className="main-climbing">  
           
          </div>
        </section>

        <div>
          
          <div>{sportGearArray}</div> 
          <input value={this.state.moreGear} placeholder="Add new piece of gear" onChange={(e)=>this.handleInputChange(e.target.value)} type="text"/>
          <button onClick={this.handleAddTask}>Add to List</button>
        </div>  
      </div>
    );
  }
}

export default App;
