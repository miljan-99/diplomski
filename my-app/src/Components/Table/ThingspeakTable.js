function ThingspeakTable(props) {
    const { feeds } = props;

    return (
        <div className="table-container">
            <table>
                <thead>
                <tr>
                    <th colSpan="2" style={{ backgroundColor: "lightgray", textAlign: "center", color: "black" }}>Temperature</th>
                </tr>
                <tr>
                    <th>Date</th>
                    <th>Value</th>
                </tr>
                </thead>
                <tbody>
                {feeds.map((feed) => (
                    <tr key={feed.entry_id}>
                        <td>{new Date(feed.created_at).toLocaleString('en-GB', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                            second: '2-digit'
                        })}</td>
                        <td>{feed.field1}°C</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default ThingspeakTable;
