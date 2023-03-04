class Weather_api {
    _key = "key=4d31e6331eba4a4ea32190422231401";
    _city_name = "Ufa"
    _state_code = "Bashkortostan"
    _country_code = "RU"
    _limit = "1"
    _base_url = "http://api.weatherapi.com/v1/";
    // city_name_to_coordinates = (city_name)  => {
    //     return fetch(`${this._base_url}current.json?${city_name}${this._key}`)
    //             .then(response => response.json());
                
    // }
    get_weather = async (city_name) => {
        const firstDayWeather = await fetch(`${this._base_url}current.json?${this._key}&q=${city_name}&days=${1}`)
                .then(response => response.json())
        const secondDayWeather = await fetch(`${this._base_url}current.json?${this._key}&q=${city_name}&days=${2}`)
                .then(response => response.json());
        const thirdDayWeather = await fetch(`${this._base_url}current.json?${this._key}&q=${city_name}&days=${3}`)
                .then(response => response.json());
        const allWeather = {
            firstDayWeather,
            secondDayWeather,
            thirdDayWeather
        }
        
        return allWeather
    }
}

export default Weather_api;