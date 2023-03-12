import './Air_conditions.css';
import { Component } from 'react';
import Weather_api from '../../services/Weather_api';
import thermometer from '../../icons/thermometer.png';
import wind from '../../icons/wind.png';
class Air_conditions extends Component {
    Api = new Weather_api();
    constructor(props) {
        super(props);
        this.state = {
            real_feel: 0,
            wind: 0
        };
    }
    componentDidMount() {
        this.createWeatherData();
    }
    createWeatherData = () => {   
        this.Api.get_weather(this.props.data)    
            .then((result) => {
                this.setState({
                    real_feel: result.firstDayWeather.current.feelslike_c,
                    wind: result.firstDayWeather.current.wind_kph
                })
          });
    };

    render() {
        return (
            <div className='blocks_wrapper grey_block_wrapper air_conditions_wrapper'>
                <p className='very_small_grey_text block_title'>Air conditions</p>
                <div className='air_conditions__container'>
                    <div className='air_conditions_item__container real_feel__container'>
                        <div className='air_conditions_item__wrapper'>
                            <img className='air_conditions_item__img' src={thermometer}/>
                            <p className='very_small_grey_text today_forecast_text'>Real Feel</p>
                        </div>                       
                        <p className='big_black_text air_conditions__text'>{this.state.real_feel}°</p>
                        
                        
                    </div>
                    <div className='air_conditions_item__container wind__container'>
                        <div className='air_conditions_item__wrapper'>
                            <img className='air_conditions_item__img wind_img' src={wind}/>
                            <p className='very_small_grey_text today_forecast_text'>Wind</p>
                        </div>
                        <p className='big_black_text air_conditions__text'>{this.state.wind}km/h</p>
                        
                        
                    </div>
                    
                </div>
                
            </div>
        )
    }
}

export default Air_conditions;