import React, { Component } from 'react';
class Color extends Component {
    constructor() {
        super();
        this.state = {
          color: 'green'
        };
        this.handleChange = this.handleChange.bind(this); 
    }
    //handle change on input
    handleChange(event) {
        //metod setstate is the metod what change state and render again
        this.setState({color: event.target.value});
      }
    render() {
        return (
            <div style={{background: this.state.color,padding:30}}>
                {this.state.color}
                <br />
                <form>
                    <label>
                    Please enter color name or #"number":
                <br/>
            <input type="text" onChange={this.handleChange}  />
                    </label>
                    </form>
            <br />
          </div>
        );
      }
}
export default Color;
