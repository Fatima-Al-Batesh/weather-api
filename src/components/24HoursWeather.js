import React, { Component } from "react";
import mostlycloudy from "./../img/weather-icons/mostlycloudy.svg";
import clear from "./../img/weather-icons/clear.svg";
import { render } from "react-dom";
import "./../App.css";

export default class HoursWeather extends Component {
  render() {
    return (
        <section className="hour-weather">
        <ul className="hour-weather-t">
          <li className="threeAM">
            <time>03:30</time>
            <img src={mostlycloudy} alt="mostlycloudy icon" />
            <p>8&#176;C</p>
          </li>
          <li className="sixAM">
            <time>06:00</time>
            <img src={mostlycloudy} alt="mostlycloudy icon" />
            <p>9&#176;C</p>
          </li>
          <li className="nineAM">
            <time>09:00</time>
            <img src={clear} alt="clear icon" />
            <p>14&#176;C</p>
          </li>
          <li className="twelvePM">
            <time>09:00</time>
            <img src={clear} alt="clear icon" />
            <p>17&#176;C</p>
          </li>
          <li className="threePM">
            <time>15:00</time>
            <img src={clear} alt="clear icon" />
            <p>18&#176;C</p>
          </li>
          <li className="sixPM">
            <time>18:00</time>
            <img src={clear} alt="clear icon" />
            <p>16&#176;C</p>
          </li>
          <li className="ninePM">
            <time>21:00</time>
            <img src={mostlycloudy} alt="mostlycloudy icon" />
            <p>13&#176;C</p>
          </li>
            
        </ul>
    </section>
    );
  }
}
