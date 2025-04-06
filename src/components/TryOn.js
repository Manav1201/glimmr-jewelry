// src/components/TryOn.js
import React, { useState } from 'react';

const TryOn = () => {
  const [userPhoto, setUserPhoto] = useState(null);

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUserPhoto(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Virtual Try-On</h2>
      <input type="file" onChange={handlePhotoUpload} />
      {userPhoto && <img src={userPhoto} alt="User" className="mt-4" />}
      {/* Add jewelry overlay logic here */}
    </div>
  );
};

export default TryOn;