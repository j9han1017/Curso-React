import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton'
import './App.css';
import React from 'react'

const defaultTodos = [
  { text: 'Cortar cebollla', completed: true },
  { text: 'Tomar curso de Intro a React.js', completed: false },
  { text: 'Llora con la llorona', completed: false },
  { text: 'Ir al gym', completed: true },
  { text: 'Ir al gym', completed: true },
]
function App() {
  return (
    <React.Fragment>

      <TodoCounter completed={16} total={25} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}
export default App;