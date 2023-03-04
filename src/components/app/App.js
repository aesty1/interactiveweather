import './App.css';
import Header from '../header/Header';
import Field from '../field/Field';
import Weather_block from '../weather_block/Weather_block';
import Choose_day from '../choose_day/Choose_day';
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
          <Header />
          <Field updateData={this.updateData} />
          <Choose_day />
          <Weather_block data={this.state.data} updateColor={this.updateColor} />
        </div>
        
      </div>
      
    );
  };
  
};

export default App;
