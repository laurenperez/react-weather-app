import React from 'react';

const Widget = props => {
  if(Object.keys(props.data).length > 0){
    return (
      <div>
        <h1>{props.data.name} Weather</h1>
        <p> Latitude {props.data.coord.lat} | Longitude {props.data.coord.lon} </p>
        <h3> Todays weather conditions include:</h3>
        <h4>{props.data.weather[0].main}</h4>
        <h3>Current Temperature is {props.data.main.temp} degrees F</h3>
        <p>Expected high is {props.data.main.temp_max} with a low of {props.data.main.temp_min}</p>
        <p>Wind speeds are at {props.data.wind.speed} mph</p>
        <h4>Humidity is at {props.data.main.humidity}% | Pressure is {props.data.main.pressure} hPa</h4>
      </div>
    )
  } else {
    return (
      <div>
        <p>Async Issues</p>
      </div>
    )
  }

}


export default Widget
