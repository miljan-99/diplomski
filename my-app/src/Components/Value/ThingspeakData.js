import React, { useState, useEffect } from "react";
import axios from "axios";
import MeasureBox from "./MeasureBox";
import './Data.css';

function ThingspeakData() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState();

    useEffect(() => {
        axios
            .get(`https://api.thingspeak.com/channels/2096202/feeds.json?api_key=QQVTBS808VU58DH2&results=6`)
            .then((response) => {
                setData(response.data.feeds);
                setLoading(false);
            });
    }, []);

    if (isLoading) {
        return <div className="App">Loading...</div>;
    }
    return (
        <div className="data-container">
            <h1 className="crno"> Values</h1>
            <div className="loading">
                {isLoading ? (
                    "Loading..."
                ) : (
                    <div className="measure-boxes">
                        {data.map((feed) => (
                            <MeasureBox key={feed.entry_id} {...feed} />
                        ))}
                    </div>

                )}
            </div>
        </div>
    );

}

export default ThingspeakData;
