import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GraphicBox from "./GraphicBox";

function ThingspeakChart () {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(
                `https://api.thingspeak.com/channels/2096202/feeds.json?api_key=QQVTBS808VU58DH2&results=10`
            )
            .then((response) => {
                setData(response.data.feeds);
                setLoading(false);
            });
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const chartDataField1 = data.map((feed) => ({
        name: feed.entry_id,
        value: feed.field1,
    }));

    const chartDataField2 = data.map((feed) => ({
        name: feed.entry_id,
        value: feed.field2,
    }));

    return (
        <div style={{ display: 'flex',backgroundColor: '#282c34', width:'100%', justifyContent:'center'}}>
            <div>
                <h1>Temperature</h1>
                <GraphicBox
                    dimension={500}
                    data={chartDataField1}
                    XAxis="name"
                    YAxis="value"
                    min={0}
                    max={40}
                />
            </div>
            <div>
                <h1>Humidity</h1>
                <GraphicBox
                    dimension={500}
                    data={chartDataField2}
                    XAxis="name"
                    YAxis="value"
                    min={0}
                    max={100}
                />
            </div>
        </div>
    );
}
export default ThingspeakChart;
