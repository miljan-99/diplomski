const express = require('express');
const mqttActions = require('./mqttActions');

const app = express();

// Definisanje ruta za akcije
app.get('/on', mqttActions.handleTurnOn);
app.get('/off', mqttActions.handleTurnOff);

// Pokretanje servera
app.listen(3000, () => {
    console.log('Server je pokrenut na portu 3000.');
});
