import './app.css';
import Habits from './components/habits';
import Nav from './components/nav';
import React, { Component } from 'react';

class App extends Component {
  state = {
    habits :[
        {id: 1, name:'Reading', count: 0},
        {id: 2, name:'Running', count: 0},
        {id: 3, name:'Coding', count: 0},
    ],
};

handleIncrement = habit => {
  const habits = this.state.habits.map(item => {
    if(item.id === habit.id) {
      return {...habit, count: habit.count+1 };
    }
      return item;
    });
    this.setState({habits});
  };

handleDecrement = habit => {
  const habits = this.state.habits.map(item => {
    if(item.id ===habit.id){
      const count = habit.count -1;
      return {...habit, count : count < 0 ? 0 : count};
    }
      return item;
  });
   this.setState({habits});
};

handleDelete = habit => {
   const habits = this.state.habits.filter(item => item.id !== habit.id);
   const index = habits.indexOf(habit);
   this.setState({habits});
};

handleAdd = name => {
  const habits = [...this.state.habits,{id: Date.now(), name: name, count: 0}];
  this.setState({habits});
};

handleReset = () => {
  const habits = this.state.habits.map(habit => {
    if(habit.count !== 0){
      return {...habit, count : 0};
    }
      return habit;
    });
  this.setState({habits});
};

  render() {
    return <>
      <Nav
        totalCount={this.state.habits.filter(item => item.count > 0).length} /> 
      <Habits 
        habits = {this.state.habits} 
        onAdd={this.handleAdd}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onDelete={this.handleDelete}
        onReset={this.handleReset}
      />
    </>
  }
}

export default App;