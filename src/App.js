import React, { Component } from 'react';

class App extends Component {

    getDayName(number) {
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[number];
    }

    render() {
        let today = new Date().getDay();
        if (today === 6 || today === 0)
            return <div>Today is { this.getDayName(today) } - You should go to work today</div>;
        return <div>Today is { this.getDayName(today) } - You can watch TV all day today</div>;
    }
}

export default App;
