const fs = require('fs');
require('colors');
const dbPath = './database/database.json';

const searchLog = async(search) =>{

    if(!fs.existsSync(dbPath)) return;

    const info = fs.readFileSync(dbPath, { encoding: 'utf-8' });
    const data = JSON.parse(info);

    search.history = data.historial;
    showLog(search.history); 
    
};

const showLog = (history) => {

    history.forEach((place, i) => {
        const indx = `${i + 1}`.blue;
        console.log(`${indx} - ${place}`);
    });
    
};

const saveLog = async (search) => {
    
    const payload = {
        historial: search.history
    }
    
    fs.writeFileSync(dbPath, JSON.stringify(payload));
};

module.exports = { 
    searchLog,
    saveLog,
 };