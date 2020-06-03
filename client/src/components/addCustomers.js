import React, { Component, state } from 'react';

class addCustomers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  //handle changes from text inputs
  handleChange(event) {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    }
    );
  }
  //post after click add customer
  handleClick = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
      })
    };
    fetch('/api/customers')
      .then(res => res.json())
      .then(customers => this.setState({ customers }, () => console.log('Customers fetched...', customers)));
    fetch('/api/Addcustomers', requestOptions)
      .then(response => response.json())
      .then(data => this.setState({ postId: data.id }));
    window.location.reload(false);//reload page "refresh"
  }

  render() {
    return (
      <div>
        <form>
          <label>
            First name
        <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
  />
          </label>
          <label>
            Last name
        <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </label>
        </form>
        <br />
        <button onClick={this.handleClick}>
          Add customer
      </button>
      </div>
    );
  }
}
export default addCustomers;
