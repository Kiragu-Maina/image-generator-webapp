import React, { useState, useEffect } from 'react';
import './App.css'
import axios from 'axios';

function App() {
  const [imageURL, setImageURL] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    fetchImage();
  }, []);

 

  const generateImage = async () => {
    setIsLoading(true); // Set loading state to true
    try {
      const response = await axios.get('https://django-server-production-602e.up.railway.app/apis/generate-image');
      setImageSrc(response.data);
      setIsLoading(false); // Set loading state to false after receiving the response
      } catch(error) {
        console.log(error);
        setIsLoading(false); // Set loading state to false in case of an error
      }
  };

  return (
    <div className="container">
      <h1>Image Generator App</h1>
      <button onClick={generateImage}>Generate Image</button>
      {isLoading ? (
        <div className="progress-bar">Loading...</div>
      ) : (
        imageURL && <img src={imageURL} alt="Generated Image" />
      )}
    </div>
  );
}

export default App;
