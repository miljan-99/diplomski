import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import ThingspeakChart from './Components/Charts/ThingspeakChart';
import ThingspeakData from './Components/Value/ThingspeakData';
import Dashboard from './Components/Dashboard/Dashboard';
import Table from './Components/Table/Table';
import Action from "./Components/Action/Action";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/graph" element={<ThingspeakChart />} />
                    <Route path="/data" element={<ThingspeakData />} />
                    <Route path="/table" element={<Table />} />
                    <Route path='/action' element={<Action/>}/>
                </Routes>
            </header>
        </div>
    );
}

export default App;
