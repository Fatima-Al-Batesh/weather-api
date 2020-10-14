import React, { Component } from "react";
import Search from "./components/Search";


//import SayHi, { SayHello } from "./components/WeatherItem";
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
           <main className="content">
            <div> 
              <img src="http://placekitten.com/100/100" alt="cat"/>
            </div>
            <div>
             <span><strong>Temperature</strong></span> 10 &#176;C to 11 &#176;C
            </div>
           
            <ul>
              <li><strong>Humidity</strong></li>
              <li> 76%</li>
              <li><strong>Pressure</strong></li>
              <li> 1008.48</li>
            </ul>
           
           </main>
         

        <section className="hour-weather">
            <ul className="hour-weather-t">
              <li className="threeAM">
                <time>03:30</time>
                <img src="http://placekitten.com/40/40" alt="cat"/>
                <p>8&#176;C</p>
              </li>
              <li className="sixAM">
                <time>06:00</time>
                <img src="http://placekitten.com/40/40"   alt="cat"/>
                <p>9&#176;C</p>
              </li>
              <li className="nineAM">
                <time>09:00</time>
                <img src="http://placekitten.com/40/40"   alt="cat"/>
                <p>14&#176;C</p>
              </li>
              <li className="twelvePM">
                <time>09:00</time>
                <img src="http://placekitten.com/40/40"  alt="cat"/>
                <p>17&#176;C</p>
              </li>
              <li className="threePM">
                <time>15:00</time>
                <img src="http://placekitten.com/40/40"   alt="cat"/>
                <p>18&#176;C</p>
              </li>
              <li className="sixPM">
                <time>18:00</time>
                <img src="http://placekitten.com/40/40"   alt="cat"/>
                <p>16&#176;C</p>
              </li>
              <li className="ninePM">
                <time>21:00</time>
                <img src="http://placekitten.com/40/40"  alt="cat"/>
                <p>13&#176;C</p>
              </li>
                
            </ul>
        </section>
      </div>
    );
  }
}

export default App;
