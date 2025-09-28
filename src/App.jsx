import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateTodoList from './pages/CreateTodoList.jsx';
import TodoList from './pages/TodoList.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TodoList />}></Route>
        <Route path='/Create' element={<CreateTodoList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
