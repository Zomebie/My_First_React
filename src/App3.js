import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form1 from './components/Form1';
import TodoItemList from'./components/TodoItemList';


class App extends Component {
  id =0 //

  state ={
    input: '',
    todos: [
        //이게 배열임 그래서 handleCreate으로 배열을 생성해줌.
    ]
  }

  handleChange = (e) =>{
    this.setState({
      input: e.target.value //input 의 다음 바뀔 값
    });
  }

  handleCreate = () =>{
    const {input,todos} = this.state;
    this.setState({
      input: '',//인풋 비우고
      // concat을 사용하여 배열에 추가 ->새 배열을 만듬.
      todos: todos.concat({ //자바스크립트는 보통 push로 새 데이터를 집어넣어주지만 나중에 최적화를 하게
        id: this.id++,      //될때 비교하여 리렌더링을 방지하게 되지만 push는 비교를 할수 없어서 최적화를 못함.
        text: input,
        checked: false
      })
    });
  }

  handleKeyPress = (e) => {
    //눌러진 키가 Enter이면 handleCreate 호출
    if(e.key === 'Enter'){
      this. handleCreate();
    }
  }

  handleToggle = (id) =>{
    const{todos} = this.state;
    //파라미터로 받은 id를 가지고 몇번째 아이템인지 찾습니다.
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; // 선택한 객체

    const nextTodos = [...todos]; //배열을 복사

    //기존의 값들을 복사하고 , checked 값을 덮어쓰기
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };//{...selected}라고 넣은것은, 내부의 값들이 모두 자동으로 props로 설정이 됨.

    this.setState({
      todos: nextTodos
    });
  }
  handleRemove = (id) =>{
      const {todos} = this.state;
      this.setState({
        todos: todos.filter(todo => todo.id !== id)
      });
    }


  render() {
    const { input, todos } =this.state;
    const {//비구조화 할당-> 이렇게 함으로써 this를 붙여줘야하느 작업을 생략 할 수 있음.
      handleChange, handleCreate, handleKeyPress, handleToggle, handleRemove
    } = this;

    return (
      <TodoListTemplate form={(
        <Form1
        value = {input}
        onKeyPress={handleKeyPress}
        onChange={handleChange}
        onCreate={handleCreate}
        />
      )}>
      <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
      </TodoListTemplate>
    );
  }
}

export default App;
