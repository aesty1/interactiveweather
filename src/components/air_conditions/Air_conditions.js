import './Air_conditions.css';
import { Component } from 'react';

class Air_conditions extends Component {
    render() {
        return (
            <div className='blocks_wrapper air_conditions_wrapper'>
                <p className='small_grey_text today_forecast_title'>Air conditions</p>
            </div>
        )
    }
}

export default Air_conditions;