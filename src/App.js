import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Typography } from '@mui/material';
import BottomNav from './BottomNav';
import LoadPhoto from './LoadPhoto';

// Placeholder components
const Tab1 = () => <div>Tab 1 Content</div>;
const Tab2 = () => <div>Tab 2 Content</div>;
const Tab3 = () => <div>Tab 3 Content</div>;

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

  return (
    <Router>
      <div className="App">
        <header className="App-header">
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
                />
              }
            />
            <Route path="/tab1" element={<Tab1 />} />
            <Route path="/tab2" element={<Tab2 />} />
            <Route path="/tab3" element={<Tab3 />} />
          </Routes>
        </main>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;