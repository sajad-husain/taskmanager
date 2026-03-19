import React from 'react';
import Login from './components/Login';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Tasks from './components/Tasks';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
        {/* Navigation Bar */}
        <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">✓</span>
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  TaskFlow
                </h1>
              </div>

              {/* Quick Navigation Links */}
              <div className="hidden md:flex items-center space-x-4">
                <a href="/" className="text-gray-600 hover:text-indigo-600 transition-colors px-3 py-2 text-sm font-medium">
                  Login
                </a>
                <a href="/register" className="text-gray-600 hover:text-indigo-600 transition-colors px-3 py-2 text-sm font-medium">
                  Register
                </a>
                <a href="/tasks" className="text-gray-600 hover:text-indigo-600 transition-colors px-3 py-2 text-sm font-medium">
                  Tasks
                </a>
                <a href="/dashboard" className="text-gray-600 hover:text-indigo-600 transition-colors px-3 py-2 text-sm font-medium">
                  Dashboard
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="py-8">
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='tasks' element={<Tasks />} />
            <Route path='dashboard' element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;