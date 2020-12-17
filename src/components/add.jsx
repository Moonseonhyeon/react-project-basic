/* PureComponent를 상속해서 컴포넌트를 만들면 그냥 컴포넌트와 달리
shouldComponentUpdate()함수로 state나 props에 데이터가 변경되었는지 가벼운 비교를 해서 ture/false를 return합니다.
true면 render함수를 호출하고 false는 안합니다. */

import React, { memo } from 'react';
//memo 자동완성하면 import 자동으로 됨.
//함수형컴포넌트 s
const Add = memo(props => {
    /* memo는 class형 컴포넌트에서 PureComponent에서 처럼 props가 변경되지 않으면
    안에있는 함수가 호출되지 않습니다. */

    const formRef = React.createRef();
    const inputRef = React.createRef(); 
    /* 이렇게 맴버변수를 createRef()로 정의하면 Ref라는 오브젝트가 생김.
    돔에 직접 접근하지않고 우리가 원하는 해당하는 컴포포넌트에 ref에 값으로 연결해주면 됩니다.*/
    
    
    const onSubmit = event => {
        
        console.log(inputRef.current.value);
    
        /*submit이 발생하게 되면 페이지가 리프레시가 되거나 다른 페이지로 가는 걸 예상하고 있어요.
        그래서 preventDefault()라는 브라우저의 기본 기능을 취소를 해 줍니다.
        그럼 더이상 리프레시가 일어나지 않는 것을 볼 수가 있어요. */
        event.preventDefault();
    
        const name = inputRef.current.value;
        name && props.onAdd(name);
        console.log('submit!');
        /*Add버튼 누르고 나면 input 값이 초기화되도록 하기*/
        //this.inputRef.current.value = '';
        formRef.current.reset();
    };

    return (
        <form ref={formRef} className="add-form" onSubmit={onSubmit}>
            <input ref={inputRef} type="text" className="add-input" placeholder = "Habit"/>
            <button className="add-button">Add</button>
        </form>
    );
});

export default Add;