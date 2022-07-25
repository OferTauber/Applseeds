import React, { useState } from 'react';
import './App.css';
import InputFeild from './components/inputfeild';
import { Todo } from './components/model';
import TodoList from './components/todoList';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handelAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      const temp = [...todos];
      const newTask: Todo = { id: Date.now(), todo, isDone: false };
      temp.push(newTask);
      setTodos(temp);
      setTodo('');
    }
    setTimeout(() => {
      console.log(todos);
    }, 300);
  };

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputFeild todo={todo} setTodo={setTodo} handelAdd={handelAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
