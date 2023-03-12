import './Week_weather.css';
import { Component } from 'react';

class Week_weather extends Component {
    render() {
        return (
            <div className='blocks_wrapper grey_block_wrapper week_weather_wrapper'>
                <p className='very_small_grey_text block_title'>Week weather</p>
                <div className='week_weather_items__container'>
                    <div className='week_weather_item_wrapper'>
                        <p className='very_small_grey_text week_weather_item_text'>Today</p>
                        <img className='week_weather_item_icon'/>
                        <p className='very_small_black_text week_weather_item_text'>Windy</p>
                        <p className='very_small_black_text week_weather_item_text'>36<span className='very_small_grey_text'>/22</span></p>
                    </div>
                    <div className='week_weather_item_wrapper'>
                        <p className='very_small_grey_text week_weather_item_text'>Week weather</p>
                        <img className='week_weather_item_icon'/>
                        <p className='very_small_black_text week_weather_item_text'>Windy</p>
                        <p className='very_small_black_text week_weather_item_text'>36<span className='very_small_grey_text'>/22</span></p>
                    </div>
                    <div className='week_weather_item_wrapper'>
                        <p className='very_small_grey_text week_weather_item_text'>Week weather</p>
                        <img className='week_weather_item_icon'/>
                        <p className='very_small_black_text week_weather_item_text'>Windy</p>
                        <p className='very_small_black_text week_weather_item_text'>36<span className='very_small_grey_text'>/22</span></p>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Week_weather;