import './App.css';
import Header from '../header/Header';
import Search from '../search/Search';
import Weather_block from '../weather_block/Weather_block';
import Choose_day from '../choose_day/Choose_day';
import Week_weather from '../week_weather/Week_weather';
import Today_forecast from '../today_forecast/Today_forecast';
import Air_conditions from '../air_conditions/Air_conditions';
import { Component } from 'react';
class App extends Component {
  state = {
    data: "Ufa",
    bg_color: 'red'
  }
  updateData = (value) => {
    this.setState({data: value})
  }
  updateColor = (color) => {
    this.setState({bg_color: color})
  }
  
  render() {
    return (
      <div className='wrapper' id={this.state.bg_color}>
        <div className='container'>
          <div className='first_container'>
            <Search updateData={this.updateData} />
            <Weather_block data={this.state.data} updateColor={this.updateColor} />
            <Today_forecast />
            <Air_conditions />
          </div>
          <div className='second_container'>
            <Week_weather />
          </div>
        </div>  
      </div>     
    );
  };
  
};

export default App;
