import './Air_conditions.css';
import { Component } from 'react';
import Weather_api from '../../services/Weather_api'
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
            <div className='blocks_wrapper air_conditions_wrapper'>
                <p className='small_grey_text today_forecast_title'>Air conditions</p>
                <p className='small_grey_text today_forecast_title'>Real Feel</p>
                <p className='small_grey_text today_forecast_title'>{this.state.real_feel}°</p>
                <p className='small_grey_text today_forecast_title'>Wind</p>
                <p className='small_grey_text today_forecast_title'>{this.state.wind}km/h</p>
            </div>
        )
    }
}

export default Air_conditions;