import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Table.css";
import ThingspeakTable from "./ThingspeakTable";
import ThingspeakTableHum from "./ThingspeakTableHum";

function Table() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState();

    useEffect(() => {
        axios
            .get(`https://api.thingspeak.com/channels/2096202/feeds.json?api_key=QQVTBS808VU58DH2&results=10`)
            .then((response) => {
                setData(response.data.feeds);
                setLoading(false);
            });
    }, []);

    if (isLoading) {
        return <div className="App">Loading...</div>;
    }

    return (
        <div className="table-container">
            <div className="table-wrapper">
                <ThingspeakTable feeds={data} />
            </div>
            <div className="table-wrapper">
                <ThingspeakTableHum feeds={data} />
            </div>
        </div>
    );

}

export default Table;
