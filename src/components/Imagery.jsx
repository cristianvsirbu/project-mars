import { useState, useEffect } from 'react';
import axios from 'axios';
import PhotoCard from './PhotoCard';

const Imagery = () => {
  const API_KEY = '3gdaS7EfzvN0wGfCVqKhm8atgymXVO7BSi2s0Hnq';
  const URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=${API_KEY}&sol=100`;

  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchImagery = async () => {
      try {
        const response = await axios.get(URL);
        setPhotos(response.data.photos);
        setLoading(false);
        console.log(response);
      } catch (error) {
        setError(true);
        setLoading(false);
        console.error(error);
      }
    };

    fetchImagery();
  }, []);

  return (
    <div>
      <h1>Mars Rover Imagery</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error fetching data</p>
      ) : (
        <div className="photo-gallery">
          {photos.map((photo, index) => (
            <PhotoCard key={index} photo={photo} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Imagery;
