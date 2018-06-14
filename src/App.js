import React, { Component } from 'react';
import moment from 'moment';

class App extends Component {

    getDayName(number) {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = moment.months();
        return `${days[number]}, ${months[new Date().getMonth()]}`;
    }

    render() {
        let today = new Date().getDay();
        if (today === 6 || today === 0)
            return <div>Today is { this.getDayName(today) } - You should go to work today</div>;
        return <div>Today is { this.getDayName(today) } - You can watch TV all day today</div>;
    }
}

export default App;
