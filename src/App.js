import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Banner from './Components/Banner.js';
import Footer from './Components/Footer.js';
import Gear from './Components/Gear.js';
import AddToList from './Components/AddToList.js';
import Packed from './Components/Packed.js';
// Tried Weather API - did not work
// import Weather from './Components/Weather.js';

class App extends Component {
    constructor() {
      super();

      this.state = {
        sportGear: [],
        packedGear: [],
        baseURL: '/api',
        moreGear: ''
      }
      
      this.transferState = this.transferState.bind(this)
    }

  componentDidMount() {
    axios.get(`${this.state.baseURL}/gear`).then(res => { 
    console.log(res.data[0])
    this.setState({ sportGear: res.data[0] });     
    });
}

  updatePost(id, text) {
    axios.put(`${this.state.baseURL}/gear?id=${id}`,).then(res => {
      this.setState({ sportGear: res.data }, console.log('Put Gear'))
    });
  }

  transferState(info){
    this.setState({
      sportGear: info
    })
  }

  render() {

    return (
      <div className="App">
      <Banner /> 
        <section className="Container">
          <div className="gearListContainer">    
            <h1 className="gearlistHeader">Gear List</h1> 

            <Gear sportGear={this.state.sportGear} transfer=    {this.transferState}/>

            <AddToList transfer={this.transferState}/>
          </div>

          <div className="packedListContainer">
            <h1 className="packedListHeader">Packed Gear List</h1>
          </div> 
          <Packed />
          {/* For Weather API */}
          {/* <Weather /> */}
          </section>
          <Footer />
      </div>
    );
  }
}

export default App;
