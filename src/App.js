import React from 'react';

const todoList = [
  { id: 1, title: 'Complete assignment' },
  { id: 2, title: 'Go grocery shopping' },
  { id: 3, title: 'Take out the trash' },
];

function App() {
  return (
    <>
      <h1>Todo List</h1>
      <ul>
        {todoList.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;

