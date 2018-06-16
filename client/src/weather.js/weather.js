import React, { Component } from "react";

class Weather extends Component {
  componentDidMount() {
    fetch(
      "http://api.openweathermap.org/data/2.5/forecast?id=5781004&APPID=7b2c11c46cde556259c4322b44161c02"
    )
      .then(results => {
        return results.json();
      })
      .then(results => {
        let temp = Object.keys(results.list).map(key => results.list);
      });
  }

  render() {
    return <div />;
  }
}

export default Weather;
