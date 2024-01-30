require('dotenv').config();

const { pausa, inquirerMenu } = require("./helpers/inquirer");
const { placeInformation } = require('./models/placeInformation');
const { searchLog, showLog } = require('./models/log');
const Searchs  = require('./models/searchs');

const main = async() =>{

    let option = 0;
    const search = new Searchs();

    do{

        option = await inquirerMenu();

        switch (option) {
            case 1: await placeInformation(search); break;
            case 2: await searchLog(search); break;
        }

        if (option !== 0) await pausa();

    }while (option !== 0)

}

main();