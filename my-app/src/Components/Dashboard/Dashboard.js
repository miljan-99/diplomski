import React from 'react';
import './Dashboard.css';
import {Link} from "react-router-dom";

function Dashboard() {
    return (
        <div>
            <div className="Dashboard">
                <header className="Dashboard-header">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/graph">Graph</Link>
                            </li>
                            <li>
                                <Link to="/data">Data</Link>
                            </li>
                            <li>
                                <Link to="/table">Table</Link>
                            </li>
                            <li>
                                <Link to="/action">Action</Link>
                            </li>
                        </ul>
                    </nav>
                    <p>
                        Welcome to AIR CONDITION Managing
                    </p>
                </header>
            </div>
        </div>
    );
}

export default Dashboard;
