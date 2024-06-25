import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Typography } from '@mui/material';
import BottomNav from './BottomNav';
import LoadPhoto from './LoadPhoto';
import EditTab from './EditTab';
import Tab3 from './Tab3';
import Tab4 from './Tab4';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);

  const handleImageUpload = (event) => {
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleBrightnessChange = (event) => {
    setBrightness(event.target.value);
  };

  const handleContrastChange = (event) => {
    setContrast(event.target.value);
  };

  const handleReset = () => {
    setBrightness(100);
    setContrast(100);
    setSelectedImage(null);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Typography variant="h4">Photo Editor</Typography>
        </header>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <LoadPhoto
                  handleImageUpload={handleImageUpload}
                  selectedImage={selectedImage}
                  brightness={brightness}
                  contrast={contrast}
                  handleBrightnessChange={handleBrightnessChange}
                  handleContrastChange={handleContrastChange}
                  handleReset={handleReset}
                />
              }
            />
            <Route
              path="/tab1"
              element={
                <LoadPhoto
                  handleImageUpload={handleImageUpload}
                  selectedImage={selectedImage}
                  brightness={brightness}
                  contrast={contrast}
                  handleBrightnessChange={handleBrightnessChange}
                  handleContrastChange={handleContrastChange}
                  handleReset={handleReset}
                />
              }
            />
            <Route
              path="/tab2"
              element={
                <EditTab
                  selectedImage={selectedImage}
                  setSelectedImage={setSelectedImage}
                />
              }
            />
            <Route path="/tab3" element={<Tab3 />} />
            <Route path="/tab4" element={<Tab4 />} />
          </Routes>
        </main>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;