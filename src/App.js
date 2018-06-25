import React, { Component } from 'react';
import MonthChecker from './components/MonthChecker';
import months from './data/months';
import Template from './layouts/index';

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
                <Template />
            </div>
        );
    }
}

export default App;
