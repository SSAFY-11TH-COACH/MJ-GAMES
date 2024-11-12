import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import EventDetailPage from './pages/EventDetailPage'
import './App.css'
import CoinGamePage from './pages/CoinGamePage'

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="w-full min-h-screen flex flex-col items-center justify-center">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/event/:eventId" element={<EventDetailPage />} />
          <Route path="/event/:eventId/game/coin" element={<CoinGamePage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
