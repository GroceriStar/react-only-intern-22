import React, { Component } from 'react';

class WeekChecker extends Component {
   render() {
        let day = new Date().getDay();
        if (day === 0 || day === 6) {
            return <div> Weekend Hourray! </div>;
        }
        return <div> Work day !</div>
    }
}

export default WeekChecker;
