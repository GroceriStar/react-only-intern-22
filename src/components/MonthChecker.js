import React, { Component } from 'react';
import months from '../data/months';

class MonthChecker extends Component {
    render() {
        return <div>Month is { months[new Date().getMonth()] } !</div>;
    }
}

export default MonthChecker;
