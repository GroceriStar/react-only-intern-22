import React, { Component } from 'react';
import MonthChecker from './components/MonthChecker';
import months from './data/months';
import Meal from './components/Meal';

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
                <Meal />
            </div>
        );
    }
}

export default App;
