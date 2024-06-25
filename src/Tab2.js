// Tab2.js

import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';

function Tab2({ selectedImage }) {
  const [croppedImage, setCroppedImage] = useState(null); // State to hold the cropped image

  const handleCrop = () => {
    // Logic to crop the image, for example:
    // This is a simplified example, you may need a library or more complex logic for actual cropping
    if (selectedImage) {
      // Simulating cropping by resizing the image
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      img.onload = () => {
        canvas.width = 200; // Adjust as per your requirements
        canvas.height = 200; // Adjust as per your requirements
        ctx.drawImage(img, 0, 0, 200, 200); // Crop to 200x200 pixels (example)
        const dataURL = canvas.toDataURL('image/jpeg'); // Get cropped image as Data URL
        setCroppedImage(dataURL); // Save cropped image to state
      };
      img.src = selectedImage;
    }
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
      <Box>
        <Typography variant="h6" gutterBottom>
          Edit Tab
        </Typography>
        {selectedImage && (
          <Box>
            <Typography variant="h6" gutterBottom>
              Original Image:
            </Typography>
            <img
              src={selectedImage}
              alt="Original"
              style={{
                width: '300px',
              }}
            />
            {croppedImage && (
              <Box mt={2}>
                <Typography variant="h6" gutterBottom>
                  Cropped Image:
                </Typography>
                <img
                  src={croppedImage}
                  alt="Cropped"
                  style={{
                    width: '200px', // Adjust as per your cropped image size
                    height: '200px',
                    objectFit: 'cover',
                  }}
                />
              </Box>
            )}
            <Button variant="contained" color="primary" onClick={handleCrop}>
              Crop Image
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Tab2;