// Stateful Component

import React, {Component} from 'react';
import axios from 'axios';

export default class Gear extends Component {
    constructor() {
        super();

        this.state = {
            sportGear: [],
            baseURL: '/api'
        };
        this.handleAddPacked = this.handleAddPacked.bind(this);
        this.deletePost = this.deletePost.bind(this);
}

// function for Adding Item to Packed List
handleAddPacked(id) { 
        axios.put(`${this.state.baseURL}/gear/${id}`).then(res => { 
            this.props.newPackedList(res.data)
        });
}

    deletePost(id) {
        axios.delete(`${this.state.baseURL}/gear/${id}`).then(res => {
          this.props.transfer(res.data)
        });
      }


    render() {
        let sportGearArray = this.props.sportGear.map((element, index) => {
            return (
              <div key={index} className="main-body">
              {/* Add Packed Button goes here */}
              <button className="addPackedButton" onClick={()=> this.handleAddPacked(element.id)}>Add to Packed</button>
                {/* This is where my Object Array List is shown on site */}
                <h1>{element.text}</h1>
              {/* delete button goes here */}
              <button className="removeButton"onClick={() => this.deletePost(element.id)}>Remove from List</button>
              </div>
            )
          })
      
        return(
            <div>
                {sportGearArray}
            </div>
        );

    }
}