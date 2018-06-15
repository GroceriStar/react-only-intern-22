import React, { Component } from 'react';
import days from '../data/days';

class DayChecker extends Component {

    getDayName(number) {
        return days[number];
    }

    render() {
        let today = new Date().getDay();
        if (today === 6 || today === 0)
            return <div>Today is { this.getDayName(today) } - You should go to work today</div>;
        return <div>Today is { this.getDayName(today) } - You can watch TV all day today</div>;
    }
}

export default DayChecker;
