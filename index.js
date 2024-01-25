require('dotenv').config();

const { leerInput, pausa, inquirerMenu } = require("./helpers/inquirer");
const { placeInformation } = require('./models/placeInformation');
const Searchs  = require('./models/searchs');

const main = async() =>{

    let option = 0;
    const search = new Searchs();

    do{

        option = await inquirerMenu();

        switch (option) {
            case 1: await placeInformation(search); break;
        
        }

        if (option !== 0) await pausa();

    }while (option !== 0)
}

main();