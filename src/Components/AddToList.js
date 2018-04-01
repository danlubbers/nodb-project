// Stateful Component

import React, {Component} from 'react';
import axios from 'axios';

export default class AddToList extends Component {
    constructor() {
        super();

        this.state = {
            sportGear: [],
            baseUrl: '/api',
            moreGear: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAddTask = this.handleAddTask.bind(this);
}

  // function for Input Value
  handleInputChange(value) {
    this.setState({ moreGear: value});
  }

  // function for button
  handleAddTask() {
    let body = {
      newItem : {text: this.state.moreGear},
    }
    this.setState({moreGear: ''});
    this.createPost(body)
  }

  createPost(body) {
    console.log('TEST-1');
    axios.post(`${this.state.baseURL}/gear`, body).then(res => { 
      this.setState({ sportGear: res.data })
      console.log('TEST-2');
    });
  }

render() {
   

    return(
        <div className="gearInput">
        <input value={this.state.moreGear} placeholder="Add new piece of gear" onChange={(e)=>this.handleInputChange(e.target.value)} type="text"/>
        <button className="addListButton" onClick={this.handleAddTask}>Add to List</button>
        </div>

    )
}
}