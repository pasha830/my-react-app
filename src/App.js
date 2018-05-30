import React, { Component } from 'react';
import './App.css';
import ContactCard from './components/ContactCard'
import Decrement from './components/Decrement'
import Addition from './components/Addition'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactCard name="John Smith" email="john@test.com" mobile="123-456-7890" work="212-345-6789" />

        <Decrement num={5} />

        <Addition num1={4} num2={3} /> 




      </div>
    );
  }
}

export default App;
