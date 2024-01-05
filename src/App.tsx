import React from 'react';
import './App.scss';
import { NavLink, Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <div className="nav" style={{ position: 'relative' }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/auth">Auth</NavLink>
        <NavLink to="/playground">GraphiQL</NavLink>
      </div>
      <Outlet />
      <Toaster />
    </>
  );
}

export default App;
