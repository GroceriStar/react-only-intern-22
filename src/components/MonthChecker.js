import React, { Component } from 'react';
import months from '../data/months';
import WeekChecker from './WeekChecker';

class MonthChecker extends Component {
    render() {
        const currentMonth = months[new Date().getMonth()];
        let active;

        if(currentMonth === this.props.month) {
            active = '*'
        }

        return (
            <div>
                { this.props.month } <span> { active } </span>
                <WeekChecker />
            </div>
        );
    }
}

export default MonthChecker;
