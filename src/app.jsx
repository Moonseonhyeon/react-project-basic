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
  console.log(`handleIncrement ${habit.name} ${habit.count}`);
  const habits = [...this.state.habits];
  const index = habits.indexOf(habit);
  habits[index].count++;
  this.setState({habits: habits}); //키와 벨류(로컬 변수, 배열)가 동일한 이름을 가지면 하나로 생략가능

};

handleDecrement = habit => {
   const habits = [...this.state.habits];
   const index = habits.indexOf(habit);
   const count = habits[index].count -1;
   habits[index].count = count < 0 ? 0 : count;
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
    habit.count = 0;
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