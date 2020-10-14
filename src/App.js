import React, { Component } from "react";
import Search from "./components/Search";
import HoursWeather from "./components/24HoursWeather";
import WeatherNow from "./components/WeatherItem";
//import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Nardine"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
        <Search className="header" handleInput={this.handleInputChange} />
            <WeatherNow/>
            <HoursWeather/>
      </div>
    );
  }
}

export default App;
