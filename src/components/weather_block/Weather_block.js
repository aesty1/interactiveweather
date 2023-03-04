import './Weather_block.css';
import { Component } from 'react';
import Weather_api from '../../services/Weather_api';
class Weather_block extends Component {
    Api = new Weather_api();
    
    constructor() {
        super()
        this.state = {
            city: 'Ufa',
            firstDayWeather: {},
            secondDayWeather: {},
            thirdDayWeather: {}
        }

    }
    componentDidMount() {
        this.createWeatherData();
    }
    
    createWeatherData = () => {
        
        this.Api.get_weather(this.state.city)
            
            .then((result) => {
                
                if(result.firstDayWeather.current && result.secondDayWeather.current && result.thirdDayWeather.current !== undefined) {
                    this.setState({ firstDayWeather: result.firstDayWeather.current,
                                    secondDayWeather: result.secondDayWeather.current,
                                    thirdDayWeather: result.thirdDayWeather.current}); 
                }
                
            
          })
    };
    checkCondition = () => {
        if (this.state.firstDayWeather.condition) {
            this.firstConditionText = this.state.firstDayWeather.condition.text;
        }
        if (this.state.firstDayWeather.condition) {
            this.firstConditionIcon = this.state.firstDayWeather.condition.icon;
        }
        if (this.state.secondDayWeather.condition) {
            this.secondConditionText = this.state.secondDayWeather.condition.text;
        }
        if (this.state.secondDayWeather.condition) {
            this.secondConditionIcon = this.state.secondDayWeather.condition.icon;
        }
        if (this.state.thirdDayWeather.condition) {
            this.thirdConditionText = this.state.thirdDayWeather.condition.text;
        }
        if (this.state.thirdDayWeather.condition) {
            this.thirdConditionIcon = this.state.thirdDayWeather.condition.icon;
        }
        
    }
    
    render() {
        this.checkCondition()
        if(this.props.data !== this.state.city) {
            this.setState({city: this.props.data})
            this.createWeatherData();
            
        }
        return (
            <div className='blocks_wrapper'>
                <div className='firstDayWeather__container'>
                    <div className='weather_block' onClick={() => this.props.updateColor("blue")}>
                        <h1>{this.state.firstDayWeather.temp_c}</h1>
                        <img alt="weather_image" src={this.firstConditionIcon}/>
                        <p className='weather_discription'>{this.firstConditionText}</p>
                        
                    </div>
                </div>
                <div className='secondDayWeather__container'>
                    <div className='weather_block' onClick={() => this.props.updateColor("red")}>
                        <h1>{this.state.secondDayWeather.temp_c}</h1>
                        <img alt="weather_image" src={this.secondConditionIcon}/>
                        <p>{this.secondConditionText}</p>
                    </div>
                </div>
                <div className='thirdDayWeather__container'>
                    <div className='weather_block' onClick={() => this.props.updateColor("green")}>
                        <h1>{this.state.thirdDayWeather.temp_c}</h1>
                        <img alt="weather_image" src={this.thirdConditionIcon}/>
                        <p>{this.thirdConditionText}</p>   
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Weather_block;