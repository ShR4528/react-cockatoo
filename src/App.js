import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ data: {} });
        }, 2000);
      });

      setTodoList(result.data.todoList || []);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('todoList', JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  const storedTodoList = JSON.parse(localStorage.getItem('todoList')) || [];

  useEffect(() => {
    if (!isLoading) {
      setTodoList(storedTodoList);
    }
    // eslint-disable-next-line
  }, [isLoading]);


  const removeTodo = id => {
    const newTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(newTodoList);
  };

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodoForm addTodo={addTodo} />
      {isLoading ? <p>Loading...</p> : <TodoList todoList={todoList} onRemoveTodo={removeTodo} />}
    </div>
  );
}

export default App;




