import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import Dashboard from './pages/Dashboard';
import CropMonitoring from './pages/CropMonitoring';
import WeatherAnalysis from './pages/WeatherAnalysis';
import SoilAnalysis from './pages/SoilAnalysis';
import ResourceManagement from './pages/ResourceManagement';
import CommunityHub from './pages/CommunityHub';
import Settings from './pages/Settings';
import LandingPage from './pages/LandingPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="crop-monitoring" element={<CropMonitoring />} />
          <Route path="weather" element={<WeatherAnalysis />} />
          <Route path="soil" element={<SoilAnalysis />} />
          <Route path="resources" element={<ResourceManagement />} />
          <Route path="community" element={<CommunityHub />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;