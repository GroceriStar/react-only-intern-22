import React, { Component } from 'react';
import DayChecker from './components/DayChecker';
import Header from './components/Header';
import MonthChecker from './components/MonthChecker';
import WeekChecker from './components/WeekChecker';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <DayChecker />
                <WeekChecker />
                <MonthChecker />
            </div>
        );
    }
}

export default App;
