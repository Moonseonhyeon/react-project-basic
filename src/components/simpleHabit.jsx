import React, { useState, useRef, useCallback, useEffect } from 'react';
//useEffect는 componentDidMount와 componentDidUpdate를 합친거다.
const SimpleHabit = props => {
    //state={
    //  count : 0,
    //};     
    const [count, setCount] = useState(0);
//count, setCount 이렇게 두가지를 선언해 놓으면 useState()함수를 호출하면 리액트에서 두가지를 return해 줍니다.
//실제의 count값과 count를 업데이트 할 수있는 setCount함수를 제공해 줍니다.
   
const spanRef = useRef(); //React.createRef(); 
    //함수형 컴포넌트를 호출할 때마다 새로운 레퍼런트를 만드는 것이 아니라 한번만 만들고 메모리에 저장해 놓고 다시 그것을 재사용합니다.
  
    // handleIncrement = () => {
   //     this.setState({count : this.count + 1 });
   // };
    const handleIncrement = useCallback(() => {
        setCount(count + 1);
    });
    //함수형컴포넌트가 호출될 때마다 이 콜백함수도 매번 호출되어 생성되어 아래 onClick에 새로운 것이 할당됨.
    //그래서 memo를 사용해도 props자체가 즉 함수자체가 변경이 되기 때문에 계속 업데이트가 되는 side effect가 있어요.
    //그래서 이것을 방지하고자 userCallback을 사용하면 리액트가 cash를 하기 때문에 handelIncrement 함수를 반복해서 호출이 되어도 동일한 콜백함수를 전달해준다.

    useEffect(()=>{console.log(`mounted and updated : ${count}`);}, [count]);
    //두번 째 인자에 []안에 적어준 것만이 변경되었을 때만 호출한다.
    //두번 쩨 인자, []안에 아무것도 안적으면 mount되 때만 호출한다. 데이터가 변경되어도 호출안됨.
    
    return (
        <li className="habit">
          <span ref={spanRef} className="habit-name">
            Reading
          </span>
          <span className="habit-count">{count}</span>
          <button className="habit-button habit-increase" onClick={handleIncrement}>
            <i className="fas fa-plus-square"></i>
          </button>
        </li>
    );
};

export default SimpleHabit;

//class는 한번 만들어지면 안에 맴버변수들 딱 한번만 만들어지고 업데이트 되면 render 함수호출.
//함수형은 props나 state 변경되면 전부 반복해서  지역변수, 함수들 다 무한정 반복.