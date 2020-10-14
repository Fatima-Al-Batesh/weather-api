import React, { Component } from "react";
import mostlycloudy from "./../img/weather-icons/mostlycloudy.svg";
import { render } from "react-dom";
import "./../App.css";

export default class WeatherNow extends Component {
  render() {
    return (
      <main className="content">
            <div> 
            <img src={mostlycloudy} alt="mostlycloudy icon" />
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
    );
  }
}
