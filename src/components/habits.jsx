import React, { Component } from 'react';
import Add from './add';
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

    handleAdd = name => {
        this.props.onAdd(name);
    }

    render() {
        return <>
                <Add onAdd={this.handleAdd}></Add>
                <ul>
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
                <button className="habits-reset" onClick = {this.props.onReset}>Reset All</button>
            </>
    }
}

export default Habits;