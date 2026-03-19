import React from 'react'
import Login from './components/Login'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './components/Register'
import Tasks from './components/Tasks'
import Dashboard from './components/Dashboard'

const App = () => {
  return (
    <div>
      <h1>Task Manager</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='tasks' element={<Tasks />} />
          <Route path='dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App