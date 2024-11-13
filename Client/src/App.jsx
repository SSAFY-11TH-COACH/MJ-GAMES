import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import MainPage from './pages/MainPage';
import EventDetailPage from './pages/EventDetailPage';
import Header from './components/Header';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <div className="w-full min-h-screen bg-gray-800">
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/event/:eventId" element={<EventDetailPage />} />
          </Routes>
        </div>
      </Router>
    </MantineProvider>
  );
}

export default App;
