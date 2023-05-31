import React from 'react';

function MqttButton({ command, className }) {
    const handleButtonClick = () => {
        fetch(`http://localhost:3000/${command}`)
            .then(response => response.text())
            .then(data => {
                console.log(data); // Ispis odgovora servera u konzoli
            })
            .catch(error => {
                console.error('Greška prilikom slanja zahtjeva:', error);
            });
    };

    return (
        <button onClick={handleButtonClick} className={className}>
            {command}
        </button>
    );
}

export default MqttButton;
