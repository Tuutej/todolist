import React, { useState } from 'react';
import TodoTable from './TodoTable';

function App() {
  const [todo, setTodo] = useState({ description: '', date: '' });
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({
      ...todo,
      [event.target.name]: event.target.value
    });
  }

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ description: '', date: '' });
  }

  const deleteTodo = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  }

  return (
    <div>
      <form>
        <label>
          Description:
          <input type="text" name="description" value={todo.description} onChange={inputChanged} />
        </label>
        <label>
          Date:
          <input type="text" name="date" value={todo.date} onChange={inputChanged} />
        </label>
        <button onClick={addTodo}>Add</button>
      </form>
      <TodoTable todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
