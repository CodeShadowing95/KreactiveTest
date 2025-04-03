import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Auth, Home } from './pages';


const App = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <Router>
      <Routes>
        <Route path="/home" element={user ? <Home /> : <Navigate to="/auth" />} />
        <Route path="/auth" exact element={<Auth />} />
        <Route path="/auth" exact element={!user ? <Navigate to="/auth" /> : <Home />} />
      </Routes>
    </Router>
  )
}

export default App