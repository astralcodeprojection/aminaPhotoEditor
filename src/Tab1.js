import React from 'react';
import { Box, Typography } from '@mui/material';

const Tab1 = ({ selectedImage, brightness, contrast, handleBrightnessChange, handleContrastChange }) => {
  return (
    <Box>
      <Typography variant="h5">Tab 1 - Basic Editing</Typography>
      {selectedImage && (
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
};

export default Tab1;