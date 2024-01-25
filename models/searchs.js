const axios = require('axios');

class Searchs {

    history = [];

    constructor(){


    }

    async city(place = ''){

        // console.log('City: ', place)
        try {             
            const intance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json`,
                params: {
                    'access_token': process.env.MAPBOX_KEY,
                    'limit': 5,
                    'lenguage': 'es'
                }
            });

            const resp = await intance.get();

            console.log(resp.data);
        } catch (error) {
            console.log('ERROR en la busqueda de la ciudad'.red);
            return [];
        }

        return [];
        
    }

}

module.exports = Searchs;