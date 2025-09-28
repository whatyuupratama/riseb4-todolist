import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateTodoList from './pages/CreateTodoList';
import { Todolist } from './pages/TodoList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Todolist />}></Route>
        <Route path='/Create' element={<CreateTodoList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
