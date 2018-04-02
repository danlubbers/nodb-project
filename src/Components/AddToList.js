// Stateful Component

import React, {Component} from 'react';
import axios from 'axios';

export default class AddToList extends Component {
    constructor() {
        super();

        this.state = {
            sportGear: [],
            baseURL: '/api',
            moreGear: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAddTask = this.handleAddTask.bind(this);
        this.createPost = this.createPost.bind(this);
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
    this.createPost(body);
  }

  createPost(body) {
    axios.post(`${this.state.baseURL}/gear`, body).then(res => { 
      // this.setState({ sportGear: res.data })
      this.props.transfer(res.data);
    });
  }

render() {
  //  console.log(this.state.sportGear, 'on add')

    return(
        <div className="gearInput">
        <input value={this.state.moreGear} placeholder="Add new piece of gear" onChange={(e)=>this.handleInputChange(e.target.value)} type="text"/>
        <button className="addListButton" onClick={this.handleAddTask}>Add to List</button>
        </div>

    )
}
}