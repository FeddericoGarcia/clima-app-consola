const axios = require('axios');

class Searchs {

    history = [];

    constructor(){

    }

    async city(place = ''){

        try {             
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json`,
                params: {
                    'access_token': process.env.MAPBOX_KEY,
                    'limit': 5,
                    'lenguage': 'es'
                }
            });

            const resp = await instance.get();

            console.log(resp.data);
            return resp.data.features.map( place => ({
                id: place.id,
                name: place.place_name,
                longitud: place.center[0],
                latitud: place.center[1], 


            }))

        } catch (error) {
            console.error('ERROR en la busqueda de la ciudad');
            return [];
        }
    }
}

module.exports = Searchs;