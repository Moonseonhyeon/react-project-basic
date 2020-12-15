import React, { PureComponent } from 'react';

class Habit extends PureComponent {
    //컴포넌트가 ui상에 등록이 되었을 때(화면에 보여질 때) 이 함수를 이렇게 해놓으면 리액트가 알아서 생면주기에 맞게 호출해줍니다.
    componentDidMount () {
        console.log(`${this.props.habit.name} mounted.`);
        //데이터를 가져오는 작업 등
    }

    //컴포넌트가 언마운트 될 때(우리가 지우기 전) 이 함수를 이렇게 해놓으면 리액트가 알아서 생면주기에 맞게 호출해줍니다.
    componentWillUnmount () {
        console.log(`${this.props.habit.name} will unmount.`);
        //소켓이라면 마치기전에 resource를 다 지우거나 하는 작업 등..
    }

    handleIncrement = () => {
        this.props.onIncrement(this.props.habit);
     }
 
    handleDecrement = () => {
        this.props.onDecrement(this.props.habit);
    }

    handleDelete = () => {
        this.props.onDelete(this.props.habit);
    }


    render() {        
        const {name, count} = this.props.habit;
        return <li className="habit">
            <span className="habit-name">{name}</span>
            <span className="habit-count">{count}</span>
            <button className="habit-button habit-increase" onClick={this.handleIncrement}>
                <i className="fas fa-plus-square"></i>
            </button>
            <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
                <i className="fas fa-minus-square"></i>
            </button>
            <button className="habit-button habit-delete" onClick={this.handleDelete}>
                <i className="fas fa-trash"></i>
            </button>
        </li>
    }
}

export default Habit;