import React, { Component } from 'react';
import MonthChecker from './components/MonthChecker';
import months from './data/months';
import MealPlan from './components/MealPlan';

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
                <MealPlan />
            </div>
        );
    }
}

export default App;
