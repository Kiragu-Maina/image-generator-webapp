import React, { useState } from 'react';
import './App.css'
import GoogleAds from './Aidfork';

function App() {
  const [imageURL, setImageURL] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const generateImage = () => {
    fetch('https://django-server-production-602e.up.railway.app/apis/generate-image')
      .then(response => response.blob())
      .then(blob => {
        const imageURL = URL.createObjectURL(blob);
        
        setIsLoading(false); // Set loading state to false after receiving the response
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false); // Set loading state to false in case of an error
      });
  };

  return (
    <div>
    <div className="container">
      <h1>Image Generator App</h1>
      <button onClick={generateImage}>Generate Image</button>
      {isLoading ? (
        <div className="progress-bar">Loading...</div>
      ) : (
        imageURL && <img src={imageURL} alt="Generated Image" />
      )}
    </div>
     <GoogleAds />
     </div>
  );
}

export default App;
