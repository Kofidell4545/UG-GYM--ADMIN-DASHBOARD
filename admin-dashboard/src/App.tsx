import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';

// Add type for ProtectedRoute
interface ProtectedRouteProps {
  children: React.ReactNode;
}

function App() {
  // Function to check if user is authenticated
  const isAuthenticated = () => {
    const user = localStorage.getItem('currentUser');
    return user !== null;
  };

  // Protected Route Component with explicit typing
  const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    return isAuthenticated() ? <>{children}</> : <Navigate to="/login" replace />;
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route 
            path="/admin-dashboard" 
            element={
              <ProtectedRoute>
                <AdminDashboard location={{ state: { user: JSON.parse(localStorage.getItem('currentUser') || '{}') } }} />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/" 
            element={<Navigate to="/login" replace />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;