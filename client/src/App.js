import React, { Component ,state} from 'react';
import logo from './logo.svg';
import './App.css';  //load css
import Customers from './components/customers'; //component customers
import AddCustomers from './components/addCustomers';//component from add customers
import Color from './components/color'; //component Color
class App extends Component {
  render() {
    return (
      <div className="App"> 
        <header className="App-header ">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Express Starter</h1>
        </header>
        <Color/>
        <Customers />
        <AddCustomers />
      </div>
    );
  }
}

export default App;
