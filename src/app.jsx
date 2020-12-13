import './app.css';
import Habits from './components/habits';

import React, { Component } from 'react';
import Nav from './components/nav';
import Add from './components/add';

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

/* sumOfCount = () => {
  const habits = [...this.state.habits];
  let sum = this.state.sum;
    for(var i = 0; i < habits.length; i++){
      const count = habits[i].count;
      sum = sum + count;
    }
    this.setState({sum});
    console.log(sum);
}; */

/* addList = name => {
  const habits = [...this.state.habits];
  console.log({id: 4, name: name, count: 0});
  habits.concat({id: 4, name: name, count: 0}); 
  this.setState({habits});

};

handleChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
}; */


  render() {
    return <>
      <Nav
        totalCount={this.state.habits.filter(item => item.count > 0).length} />
      {/* <Add 
        habits = {this.state.habits}
        onAddList={this.addList}
        onChange={this.handleChange}/>  */}   
      <Habits 
        habits = {this.state.habits} 
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onDelete={this.handleDelete}
      />
    </>
  }
}

export default App;