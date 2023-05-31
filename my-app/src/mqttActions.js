const mqtt = require('mqtt');

// Konfiguracija MQTT klijenta
const options = {
    port: 1883,
    clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
    username: 'bastwan3244@ttn',
    password: 'NNSXS.VIV4C36QQIVPR7X5GCLNVYMFYIQI3VT5PKXEGDQ.ZRV2ESAGX2I7H52XKODCLQNF3CQQBHA4MY7SNK3JGZ4WSFZAFMZA',
    keepalive: 60,
    reconnectPeriod: 1000,
    protocolId: 'MQIsdp',
    protocolVersion: 3,
    clean: true,
    encoding: 'utf8'
};

// Kreiranje MQTT klijenta
const client = mqtt.connect('https://eu1.cloud.thethings.network', options);

// Funkcija za slanje komande
function sendCommand(command) {
    // Generisanje payload-a na osnovu primljenog teksta komande
    const payload = {
        downlinks: [
            {
                f_port: 15,
                frm_payload: Buffer.from(command).toString('base64'),
                priority: 'NORMAL'
            }
        ]
    };

    // Objavljivanje poruke na MQTT temu
    client.publish('v3/bastwan3244@ttn/devices/eui-60c5a8fffe78a255/down/push', JSON.stringify(payload));
}

// Definisanje rute za akciju "upali"
function handleTurnOn(req, res) {
    sendCommand('on'); // Slanje komande "upali"
    res.send('Komanda "on" poslata.');
}

// Definisanje rute za akciju "ugasi"
function handleTurnOff(req, res) {
    sendCommand('off'); // Slanje komande "ugasi"
    res.send('Komanda "off" poslata.');
}

// Izvoz funkcija koje će biti dostupne izvan modula
module.exports = {
    handleTurnOn,
    handleTurnOff
};
