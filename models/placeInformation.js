require('colors');

const { leerInput, showPlaces } = require('../helpers/inquirer');
const { getOpenWeather } = require('./getOpenWeather');
const { saveLog } = require('./log');

const placeInformation = async (search) =>{

    const place = await leerInput('Ciudad: ');
    const places = await search.searchCity(place);
    const id = await showPlaces(places);

    if (id === 0) return

    const selectPlace = places.find( p => p.id === id)
    search.addHistory(selectPlace.name)

    await saveLog(search);

    const openWeather = await getOpenWeather(selectPlace.latitud, selectPlace.longitud );

    console.log('----------------------'.blue);
    console.log('Información del lugar: '.bgBlue);
    console.log('----------------------'.blue);
    console.log(`${'-'.blue} Ciudad:         `, selectPlace.name.yellow);
    console.log(`${'-'.blue} Latitud:        `, selectPlace.latitud);
    console.log(`${'-'.blue} Longitud:       `, selectPlace.longitud);
    console.log(`${'-'.blue} Temperatura °C: `, openWeather.temp);
    console.log(`${'-'.blue} Temp Minima:    `, openWeather.temp_min);
    console.log(`${'-'.blue} Temp Máxima:    `, openWeather.temp_max);
    console.log(`${'-'.blue} Humedad:        `, `${openWeather.humidity.toString()}%`.yellow);
    console.log(`${'-'.blue} Estado de clima:`, openWeather.desc.toString().toUpperCase().yellow);
    console.log();
    
}

module.exports = { placeInformation };