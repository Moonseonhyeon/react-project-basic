import React, { Component } from 'react';

class Add extends Component {
formRef = React.createRef();
inputRef = React.createRef(); 
/* 이렇게 맴버변수를 createRef()로 정의하면 Ref라는 오브젝트가 생김.
돔에 직접 접근하지않고 우리가 원하는 해당하는 컴포포넌트에 ref에 값으로 연결해주면 됩니다.*/


onSubmit = event => {
    
    console.log(this.inputRef.current.value);

    /*submit이 발샐하게 되면 페이지가 리프레시가 되거나 다른 페이지로 가는 걸 예상하고 있어요.
    그래서 preventDefault()라는 브라우저의 기본 기능을 취소를 해 줍니다.
    그럼 더이상 리프레시가 일어나지 않는 것을 볼 수가 있어요. */
    event.preventDefault();

    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    console.log('submit!');
    /*Add버튼 누르고 나면 input 값이 초기화되도록 하기*/
    //this.inputRef.current.value = '';
    this.formRef.current.reset();
}

    render() {
        return (
            <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
                <input ref={this.inputRef} type="text" className="add-input" placeholder = "Habit"/>
                <button className="add-button">Add</button>
            </form>
        );
    }
}

export default Add;