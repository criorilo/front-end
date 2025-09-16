import { useState } from 'react'
import WelcomeScreen from './components/WelcomeScreen'
import LoginScreen from './components/LoginScreen'
import Dashboard from './components/Dashboard'

function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome')
  const [user, setUser] = useState(null)

  const handleNext = () => {
    setCurrentScreen('login')
  }

  const handleLogin = (userData) => {
    setUser(userData)
    setCurrentScreen('dashboard')
  }

  return (
    <div className="App">
      {currentScreen === 'welcome' && (
        <WelcomeScreen onNext={handleNext} />
      )}
      {currentScreen === 'login' && (
        <LoginScreen onLogin={handleLogin} />
      )}
      {currentScreen === 'dashboard' && user && (
        <Dashboard user={user} />
      )}
    </div>
  )
}

export default App
