import React, { Component } from 'react';
import DayChecker from './DayChecker';
import Header from './Header';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <DayChecker />
            </div>
        );
    }
}

export default App;
