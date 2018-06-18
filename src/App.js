import React, { Component } from 'react';
import Header from './components/Header';
import MonthChecker from './components/MonthChecker';
import months from './data/months';

class App extends Component {
    showCalendar() {
        const calendar = [];
        for (const month of months) {
            calendar.push(<MonthChecker month={month} />);
        }
        return calendar;
    }
    render() {
        return (
            <div>
                <Header />
                { this.showCalendar() }
            </div>
        );
    }
}

export default App;
