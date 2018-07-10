import React, { Component } from 'react';
import _ from 'lodash';
import update from 'immutability-helper';

class Meal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            meal: {
                name: '',
                description: '',
                steps: '',
                url: ''
            },
            meals: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        const meals = [
            {
                name: 'Avocado',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                steps: 'Just cook!',
                image: 'http://via.placeholder.com/350x150',
                recipe_url: '',
                ingredients: [
                    'Ingredient 1', 'Ingredient 2', 'Ingredient 3'
                ],
                directions: []
            },
            {
                name: 'Pizza',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                steps: `It's magic!`,
                image: 'http://via.placeholder.com/350x150',
                recipe_url: '',
                ingredients: [
                    'Ingredient 4', 'Ingredient 5', 'Ingredient 6'
                ],
                directions: []
            },
        ];
        this.setState({
            meals: meals
        });
    }

    renderIngredients(meal) {
        return _.map(meal.ingredients, (ingredient) => 
            <li className="list-group-item">{ingredient}</li>
        );
    }

    renderMeals() {
        return _.map(this.state.meals, (meal, index) => 
            <div className="col-3" key={index}>
                <div className="card">
                    <img className="card-img-top" src={meal.image} alt={meal.name}/>
                    <div className="card-body">
                        <h5 className="card-title">{meal.name}</h5>
                        <p className="card-text">{meal.description}</p>
                    </div>
                    <div>
                        <p className="text-center">Ingredients</p>
                        <ul class="list-group list-group-flush">
                            {this.renderIngredients(meal)}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

    handleChange (event) {
        // [React: A (very brief) talk about immutability.](https://medium.com/pro-react/a-brief-talk-about-immutability-and-react-s-helpers-70919ab8ae7c)
        const target = event.target;
        const name = target.name;
        const value = event.target.value;
        const meal = Object.assign({}, this.state.meal);
        const updateMeal = update(meal, {
            [name]: {$set: value}
        });
        this.setState({
            meal: updateMeal
        });
    }

    handleSubmit(event) {
        const meal = Object.assign({}, this.state.meal);
        this.setState({meals: [...this.state.meals, meal]});
        event.preventDefault();
        this.resetForm();
    }

    resetForm() {
        this.setState({
            meal: {
                name: '',
                description: '',
                steps: '',
                image: ''
            }
        });
    }

    render() {
        return(
            <div className="container">
                <div className="justify-content-center">
                    <h1>Super Meal</h1>
                    <form onSubmit={this.handleSubmit} className="">
                        <div className="col-4">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" onChange={this.handleChange} value={this.state.meal.name} required name="name" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <textarea onChange={this.handleChange} value={this.state.meal.description} required name="description" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Steps</label>
                                <textarea onChange={this.handleChange} value={this.state.meal.steps} name="steps" required className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>URL</label>
                                <input onChange={this.handleChange} value={this.state.meal.url} name="url" required type="url" className="form-control"/>
                            </div>
                            
                            <button type="submit" className="btn btn-outline-primary btn-block">Add</button>
                        </div>
                    </form>
                </div>
                <br/><hr/> <br/>
                <div className="row">
                    {this.renderMeals()}
                </div>
            </div>
        );
    }
}

export default Meal;