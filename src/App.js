import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Banner from './Components/Banner.js';
import Footer from './Components/Footer.js';
import Gear from './Components/Gear.js';
import AddToList from './Components/AddToList';

class App extends Component {
    constructor() {
      super();

      this.state = {
        sportGear: [],
        packedGear: [],
        baseURL: '/api',
        moreGear: ''
      }
      this.handleAddPacked = this.handleAddPacked.bind(this);
    }

  
  // function for Adding Item to Packed List
  handleAddPacked() {

  }

  updatePost(id, text) {
    axios.put(`${this.state.baseURL}/gear?id=${id}`,).then(res => {
      this.setState({ sportGear: res.data }, console.log('Put Gear'))
    });
  }

  render() {

    return (
      <div className="App">
      <Banner /> 
        <section className="Container">
          <div className="gearListContainer">    
          <h1 className="gearlistHeader">Gear List</h1>   
            <Gear />
            <AddToList />
          </div>

          <div className="packedListContainer">
            <h1 className="packedListHeader">Packed Gear List</h1>
          </div> 
          <div className="packedList">Dummy content for Added List</div>
          </section>
          <Footer />
      </div>
    );
  }
}

export default App;
