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
        {/* Animated Background Blobs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        {/* Navigation Bar */}
        <nav className="relative bg-white/80 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Logo Section */}
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-all duration-300">
                  <span className="text-white font-bold text-2xl">✓</span>
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    TaskFlow
                  </h1>
                  <p className="text-xs text-gray-500">Manage your tasks efficiently</p>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-2">
                <NavLink href="/" icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                }>Login</NavLink>

                <NavLink href="/register" icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                }>Register</NavLink>

                <NavLink href="/tasks" icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                }>Tasks</NavLink>

                <NavLink href="/dashboard" icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                }>Dashboard</NavLink>
              </div>

              {/* Mobile Menu Button */}
              <button className="md:hidden p-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="relative py-8">
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

// Custom NavLink Component
const NavLink = ({ href, children, icon }) => {
  const isActive = window.location.pathname === href;

  return (
    <a
      href={href}
      className={`group relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${isActive
        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md'
        : 'text-gray-600 hover:bg-white/50 hover:text-indigo-600'
        }`}
    >
      <span className={`${isActive ? 'text-white' : 'text-gray-400 group-hover:text-indigo-600'} transition-colors`}>
        {icon}
      </span>
      {children}

      {/* Active Indicator */}
      {isActive && (
        <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></span>
      )}
    </a>
  );
};

export default App;