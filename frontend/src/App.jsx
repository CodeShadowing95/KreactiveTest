import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import { Home, ProtectedRoute } from './components';


const App = () => {
  const [auth, setAuth] = useState(!!localStorage.getItem("token"));

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setAuth={setAuth} />} />
        <Route path="/home" element={<ProtectedRoute auth={auth}><Home /></ProtectedRoute>} />
      </Routes>
    </Router>
  )
}

export default App