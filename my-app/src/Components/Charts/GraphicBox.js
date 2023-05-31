import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip,Legend } from "recharts";

function GraphicBox(props) {
    return (
        <div>
            <LineChart
                width={props.dimension}
                height={props.dimension}
                data={props.data}
                margin={{ top: 10, right: 15, left: 10, bottom: 10 }}
            >
                <Line type="monotone" dataKey={props.YAxis} stroke="#82ca9d" />
                <XAxis dataKey={props.XAxis} />
                <YAxis domain ={[props.min,props.max]}/>
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Tooltip />
                <Legend />
            </LineChart>
        </div>
    );
}

export default GraphicBox;
