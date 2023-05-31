import React, {useState, useEffect} from 'react';
import axios from 'axios';
import MqttButton from './MqttButton';
import './Action.css';
import MeasureBox from "../Value/MeasureBox";

function Action() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(`https://api.thingspeak.com/channels/2096202/feeds.json?api_key=QQVTBS808VU58DH2&results=1`)
            .then((response) => {
                setData(response.data.feeds);
                setLoading(false);
            });
    }, []);

    if (isLoading) {
        return <div className="App">Loading...</div>;
    }

    return (
        <div style={{display: 'flex'}}>
            <div style={{flex: 1}}>
                <h2 className="crno">Current Value</h2>
                <div>
                    {data.map((feed) => (
                        <MeasureBox key={feed.entry_id} {...feed} />
                    ))}
                </div>
            </div>
            <div style={{flex: 1}}>
                <h2 className='crno'> Choose an Action</h2>
                <div style={{justifyContent: 'center', marginTop:'125px'}}>
                    <MqttButton command={'on'} className="green-button"/>
                    <MqttButton command={'off'} className="red-button"/>
                </div>
            </div>
        </div>
    );
}

export default Action;
