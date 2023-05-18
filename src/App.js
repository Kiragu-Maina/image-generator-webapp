import React, { useState } from 'react';
import './App.css'

function App() {
  const [imageURL, setImageURL] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const generateImage = () => {
    setIsLoading(true); // Set loading state to true

    // Replace 'YOUR_API_ENDPOINT' with the actual endpoint that generates the image
    fetch('https://django-server-production-602e.up.railway.app/apis/generate-image')
      .then(response => response.json())
      .then(data => {
        // Assuming the API response returns the image URL
        setImageURL(data.imageURL);
        setIsLoading(false); // Set loading state to false after receiving the response
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false); // Set loading state to false in case of an error
      });
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
