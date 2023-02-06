import React, { useState, useEffect } from 'react'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'


function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Learn React" },
    { id: 2, title: "Learn GraphQL" },
    { id: 3, title: "Learn TypeScript" }
  ]);

  function useSemiPersistentState(key) {
    const [value, setValue] = useState(
      Array.isArray(JSON.parse(localStorage.getItem(key))) ?
        JSON.parse(localStorage.getItem(key))
        : []
    );



    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value))
    }, [value, key]);

    return [value, setValue];
  }

  // function App() {
  //   const [todoList, setTodoList] =
  //     useSemiPersistentState('savedTodoList')

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo])
  }
  // const addTodo = (todo) => {
  //   setTodoList([...todoList, todo]);
  // };
  const removeTodo = (id) => {
    setTodoList(todoList.filter(todo => todo.id !== id));
  };

  return (
    // <>
    //   <form>
    //     <input type="text" />
    //     <button type="submit" onClick={(e) => {
    //       e.preventDefault();
    //       addTodo({ text: e.target.previousSibling.value, completed: false });
    //     }}>Add Todo</button>
    //   </form>
    //   <ul>
    //     {todoList.map((todo, index) => (
    //       <li key={index}>{todo.text}</li>
    //     ))}
    //   </ul>
    // </>
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} addTodo={addTodo} />
      <TodoList todoList={todoList} todos={todoList} onRemoveTodo={removeTodo} />
    </>
  );
}


export default App;

