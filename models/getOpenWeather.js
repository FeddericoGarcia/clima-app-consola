const axios = require('axios');

const getOpenWeather = async (lat, lon) =>{
    
    try {
        const instance = axios.create({
            baseURL: 'https://api.openweathermap.org/data/2.5/weather',
            params:{
                'lat': lat,
                'lon': lon,
                'appid': process.env.OPENWEATHER_KEY,
                'units': 'metric',
                'lang': 'es'
            }
        });

        const resp = await instance.get();
        console.log(resp.data)
        const {weather, main} = resp.data;
        console.log(weather, main);
        return {
            desc: weather[0].description,
            temp: main.temp,
            temp_min: main.temp_min,
            temp_max: main.temp_max,
            humidity: main.humidity
        };


    } catch (error) {
        console.error('Se detecto un error en la API OpenWeather');
        return [];
    }
};

module.exports = {
    getOpenWeather
};