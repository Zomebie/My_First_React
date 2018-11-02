import React from 'react';
import './Tem.css';
import logo from './clock.svg'

const TodoListTemplate = ({form}) => {

  return (

    <div className="todo-list-template">

      <div className="title"> {/*두개 이상의 element는 무조건!!하나의 element로 감싸야 한다. */}
      Show Me How Lazy You Are
      </div>

      <div className="logdiv">
      <img src={logo} className="App-logo" alt="logo" />
      </div>

      <section className="form-wrapper">
        {form}
      </section>

    </div>



  );
};

export default TodoListTemplate;
