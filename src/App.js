import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import useSemiPersistentState from './useSemiPersistentState';

function App() {
  const [todoList, setTodoList] = useSemiPersistentState(
    'savedTodoList',
    []
  );
  // function removeTodo(id) {
  //   setTodoList(todoList.filter(todo => todo.id !== id));
  // }
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
      <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
    </div>
  );
}

export default App;




