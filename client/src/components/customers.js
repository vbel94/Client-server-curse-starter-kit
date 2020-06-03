import React, { Component } from 'react';
import './customers.css';

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      customers: []
    };

  }
  
  //get array of customers 
  componentDidMount() {

    fetch('/api/customers')
      .then(res => res.json())
      .then(customers => this.setState({ customers })); 
  }
  handleClick = (iddel) => { 
   //post del from array customer by id
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id:iddel
      })
  };  
    fetch('/api/Delcustomers', requestOptions)
    .then(response => response.json())
      .then(data => this.setState({ postId: data.id }));
      window.location.reload(false);
  }
  render() {
    return (
      <div>
        <h2>Customers</h2>
        <ul>
        {this.state.customers.map(customer => 
          <li key={customer.id}>{customer.firstName} {customer.lastName} <button  name="id"
            value={customer.id} onClick={()=>this.handleClick(customer.id)}>🗑️</button></li>
          )}
          
        </ul>
      </div>
    );
  }
}

export default Customers;
