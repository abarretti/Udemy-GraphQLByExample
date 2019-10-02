import React, { Component } from 'react';
import './App.css';

async function loadGreeting() {
  const response = await fetch('http://localhost:9000/graphql', {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({query: '{ greeting }'})
  });
  const responseBody = await response.json();
  return responseBody.data.greeting;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {greeting: ''};
    loadGreeting().then((greeting) => this.setState({greeting}));
  }

  render() {
    const {greeting} = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <h2>{greeting}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
