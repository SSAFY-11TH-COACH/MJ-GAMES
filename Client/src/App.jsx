import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import EventDetailPage from './pages/EventDetailPage'
import './App.css'

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="flex min-h-screen">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/event/:eventId" element={<EventDetailPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
