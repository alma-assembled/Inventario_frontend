import { BrowserRouter as Router } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Login from './componets/Login/Login'
import loginService from './services/login'
import Notification from './componets/SimpleNotification/SimpleNotification'

import { setupInterceptors } from './services/apiClient';
import { useNavigate } from 'react-router-dom';

import Sidebar from './componets/Sidebar/Sidebar';
import NavBar from './componets/NavBar/NavBar'; // Asegúrate de ajustar la ruta si es necesario
import InventarioPage from './pages/InventarioPage/InventarioPage'
import './App.css'

const AppContent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const navigate = useNavigate();

  useEffect(() => {
    setupInterceptors(navigate);
  }, [navigate]);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedInventario')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      //empleadosService.setToken(user.token)
    }
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username,
        password
      })
  
      window.localStorage.setItem(
        'loggedInventario', JSON.stringify(user)
      )

      //empleadosService.setToken(user.token)

      setUser(user)
      setUsername('')
      setPassword('')
    } catch(e) {
      setErrorMessage('Credenciales erroneas')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  return (
    <div className="App">
      <div>
        {
          user
            ? (
              <div className="layout">
                <div className="nav">
                  <NavBar />
                  <Sidebar />
                  <div className="main-content">
                    <InventarioPage />
                  </div>
                </div>
              </div>
            )
            : 
             <Login
                username={username}
                password={password}
                handleUsernameChange={
                  ({target}) => setUsername(target.value)}
                handlePasswordChange={
                  ({target}) => setPassword(target.value)
                }
                handleSubmit={handleLogin}
              /> 
        }
        <Notification message={errorMessage} />
        </div>
      </div>
  );
}

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;