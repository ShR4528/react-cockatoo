import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
      }
    })
      .then(response => response.json())
      .then(result => {
        setTodoList(result.records);
        setIsLoading(false);
      });
  }, []);


  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('todoList', JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);



  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("todoList", JSON.stringify(todoList));
      //setTodoList(storedTodoList);
    }
    // eslint-disable-next-line
  }, [todoList, isLoading]);


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
      {isLoading ? <p>Loading...</p> : <TodoList todoList={todoList}
        setTodoList={setTodoList}
        onRemoveTodo={removeTodo} />}
    </div>
  );
}

export default App;




