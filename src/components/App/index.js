import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUi } from './AppUI';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: false },
//   { text: 'Comprar pan', completed: false },
//   { text: 'Estudiar React', completed: true },
// ];



function App() {
  return (
    <TodoProvider>
      <AppUi/>
    </TodoProvider>
  );
}

export { App };
