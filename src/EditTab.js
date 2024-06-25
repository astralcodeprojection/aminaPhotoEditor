import React, { useState, useRef } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import { Button } from '@mui/material';

const EditTab = ({ selectedImage, setSelectedImage }) => {
  const cropperRef = useRef(null);
  const [croppedImage, setCroppedImage] = useState(null);

  const handleCrop = () => {
    const cropper = cropperRef.current.cropper;
    setCroppedImage(cropper.getCroppedCanvas().toDataURL());
  };

  const handleSave = () => {
    setSelectedImage(croppedImage);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      {selectedImage ? (
        <>
          <Cropper
            src={selectedImage}
            style={{ height: 400, width: '100%' }}
            // Cropper.js options
            initialAspectRatio={1}
            guides={false}
            ref={cropperRef}
          />
          <Button variant="contained" onClick={handleCrop}>
            Crop
          </Button>
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save
          </Button>
        </>
      ) : (
        <p>No image to edit</p>
      )}
    </div>
  );
};

export default EditTab;
