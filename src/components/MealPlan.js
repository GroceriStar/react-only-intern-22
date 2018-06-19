import React, { Component } from 'react';
import _ from 'lodash';

class MealPlan extends Component {
    state = {
        meal: '',
        meals: []
    };

    renderMeals() {
        return _.map(this.state.meals, meal => <li>{meal}</li>);
    }

    render() {
        return(
            <div>
                <h2>Today, you should eat this:</h2>
                <input type="text" value={this.state.meal} onChange={e => this.setState({meal: e.target.value})} />
                <button onClick={() => this.setState({meals: [...this.state.meals, this.state.meal]})} >Add Meal</button>
                <ul>
                    { this.renderMeals() }
                </ul>
            </div>
        );
    }
}

export default MealPlan;