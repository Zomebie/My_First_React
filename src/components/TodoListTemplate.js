import React from 'react';
import './TodoListTemplate.css';

const TodoListTemplate = ({form,children}) =>{
  return (
    <main className ="todo-list-template1">
    <div className="title1">
    To do list
    </div>
    <section className="form-wrapper1">
    {form}
    </section>
    <section className="todos-wrapper">{children}</section>
    </main>
  )
}

export default TodoListTemplate;
