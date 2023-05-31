import React from "react";
import "./MeasureBox.css";

function MeasureBox(props) {
    // Convert the created_at string to a Date object
    const createdDate = new Date(props.created_at);

    // Format the createdDate using Intl.DateTimeFormat
    const createdDateFormatted = new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    }).format(createdDate);

    return (
        <div className="measure-box">
            <div className="measure-box-title">{props.title}</div>
            <table className="measure-box-values">
                <tbody>
                <tr>
                    <td>Temperature</td>
                    <td>{props.field1}°C</td>
                    <td>{createdDateFormatted}</td>
                </tr>
                <tr>
                    <td>Humidity</td>
                    <td>{props.field2}%</td>
                    <td>{createdDateFormatted}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default MeasureBox;
