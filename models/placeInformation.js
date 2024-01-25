require('colors');

const { leerInput } = require('../helpers/inquirer');


const placeInformation = async (search) =>{

    const place = await leerInput('Ciudad: ');
    // console.log({place});
    await search.city(place);

    console.log('----------------------'.blue);
    console.log('Información del lugar: '.bgBlue);
    console.log('----------------------'.blue);
    console.log('- Ciudad: ', );
    console.log('- Latitud: ', );
    console.log('- Longitud: ', );
    console.log('- Temperatura actual (°C): ', );
    console.log('- Temp Minima: ', );
    console.log('- Temp Máxima: ', );

}

module.exports = { placeInformation } ;