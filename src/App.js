import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const ENDPOINT_Symbols = 'https://api.iextrading.com/1.0/ref-data/symbols'

const resp = {"logo":{"url":"https://storage.googleapis.com/iex/api/logos/AAPL.png"},"price":188.59}
const data = [{ name: 'a', value: 5 }, { name: 'b', value: 15 } , { name: 'c', value: 25 }]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      symbols: []
    };
  }

  componentDidMount() {
    fetch(ENDPOINT_Symbols)
      .then(response => response.json())
      .then(data => this.setState({ symbols: data.map(d => ({ symbol: d.symbol, name: d.name })) }))
      .catch(e => console.warn('Fetching error:', e));
  }

  render() {
    return (
      <div className="App">
        <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for company"></input>
        {/* dodac dzialajacy search bar */}
        <LineChart width={730} height={250} data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey="value" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </div>
    );
  }
}

export default App;
