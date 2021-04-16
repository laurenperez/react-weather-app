import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Widget from './Widget';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      weatherData: {}
    }
  }

  componentDidMount(){
    //API call
    let weatherApi = "http://api.openweathermap.org/data/2.5/weather?zip=98102,us&appid=052f26926ae9784c2d677ca7bc5dec98&units=imperial"
    fetch(weatherApi)
    .then( response => response.json())
    .then( json => {
      console.log(json)
      this.setState({
        weatherData: json
      })
    })
    .catch(ex => console.log("We got an error!"))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Yet Another Weather App</h1>
        </header>
        <Widget data={this.state.weatherData} />
      </div>
    );
  }

}

export default App;
