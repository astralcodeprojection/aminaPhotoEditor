import React, { useState, useRef } from 'react';
import { Box, Typography, Button } from '@mui/material';

function LoadPhoto({
  handleImageUpload,
  selectedImage,
  brightness,
  contrast,
  handleBrightnessChange,
  handleContrastChange,
}) {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'calc(100vh - 56px)', // Full height minus the bottom nav height
        textAlign: 'center',
        mt: -8 // Adjust margin to properly align header
      }}
    >
      <input
        type="file"
        onChange={handleImageUpload}
        ref={fileInputRef}
        style={{ display: 'none' }}
      />
      {!selectedImage ? (
        <Box>
          <Typography variant="h6" gutterBottom>
            No Photo Loaded
          </Typography>
          <Button variant="contained" color="primary" onClick={handleButtonClick}>
            Load Photo
          </Button>
        </Box>
      ) : (
        <Box>
          <Typography variant="h6" gutterBottom>
            Preview:
          </Typography>
          <img
            src={selectedImage}
            alt="Selected"
            style={{
              width: '300px',
              filter: `brightness(${brightness}%) contrast(${contrast}%)`,
            }}
          />
          <div>
            <label>
              Brightness:
              <input
                type="range"
                min="0"
                max="200"
                value={brightness}
                onChange={handleBrightnessChange}
              />
            </label>
          </div>
          <div>
            <label>
              Contrast:
              <input
                type="range"
                min="0"
                max="200"
                value={contrast}
                onChange={handleContrastChange}
              />
            </label>
          </div>
        </Box>
      )}
    </Box>
  );
}

export default LoadPhoto;