import React, {Component} from 'react';
import axios from 'axios';

class GetGear extends Component {
    constructor() {
        super();

        this.state = {
            sportGear: [],
            baseURL: '/api',
            moreGear: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);

    }

    componentDidMount() {
        axios.get(`${this.state.baseURL}/gear`).then(res => { 
          console.log(res)
          this.setState({ sportGear: res.data[0] });     
        });
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
        axios.post(`${this.state.baseURL}/gear`, body).then(res => { 
          console.log(res.data)
          this.setState({ sportGear: res.data })
        });  
      }

      deletePost(id) {
        axios.delete(`${this.state.baseURL}/gear/${id}`).then(res => {
          console.log(res)
          this.setState({ sportGear: res.data }, console.log('Delete Gear'))
        });
      }

    render() {
        let sportGearArray = this.state.sportGear.map((element, index) => {
            return (
              <div key={index} className="main-body">
              {/* Add Packed Button goes here */}
              <button className="addPackedButton"onClick={this.handleAddPacked}>Add to Packed</button>
                {/* This is where my Object Array List is shown on site */}
                <h1>{element.text}</h1>
              {/* delete button goes here */}
              <button className="removeButton"onClick={() => this.deletePost(index)}>Remove from List</button>
              </div>
            )
        })

        return(
            <div>
            <input value={this.state.moreGear} placeholder="Add new piece of gear" onChange={(e)=>this.handleInputChange(e.target.value)} type="text"/>
              <button className="addListButton" onClick={this.handleAddTask}>Add to List</button>
              </div>
        )
    }
}

export default GetGear;