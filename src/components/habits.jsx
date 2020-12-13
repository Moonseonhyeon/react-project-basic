import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    handleIncrement = habit => {
        const habits = [...this.props.habits];
        const index = habits.indexOf(habit);
        console.log(this.props.habits[index]);
        this.props.onIncrement(this.props.habits[index]);
     }
 
     handleDecrement = habit => {
        const habits = [...this.props.habits];
        const index = habits.indexOf(habit);
         this.props.onDecrement(this.props.habits[index]);
     }
 
     handleDelete = habit => {
        const habits = [...this.props.habits];
        const index = habits.indexOf(habit);
         this.props.onDelete(this.props.habits[index]);
     }

    render() {
        return <ul>
            {this.props.habits.map(habit => (
                <Habit 
                    key = {habit.id} 
                    habit = {habit} 
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onDelete={this.handleDelete}
                />
            ))}
        </ul>
    }
}

export default Habits;