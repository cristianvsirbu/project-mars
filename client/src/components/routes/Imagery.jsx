import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import PhotoCard from '../PhotoCard';

const Imagery = () => {
  const API_KEY = '3gdaS7EfzvN0wGfCVqKhm8atgymXVO7BSi2s0Hnq';
  const rovers = useMemo(() => ['curiosity', 'opportunity', 'spirit'], []);

  const [datesWithPhotos, setDatesWithPhotos] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [combinedPhotos, setCombinedPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAvailableDates = async () => {
      try {
        setLoading(true);
        const datesPromises = rovers.map((rover) =>
          axios.get(
            `https://api.nasa.gov/mars-photos/api/v1/manifests/${rover}/?api_key=${API_KEY}`
          )
        );

        const datesResponses = await Promise.all(datesPromises);

        // Extracted available Earth dates with photos from the retrieved data for each rover
        const availableDates = datesResponses.flatMap((response) =>
          response.data.photo_manifest.photos.map((photo) => photo.earth_date)
        );

        // Filtered out duplicates and set the available dates
        setDatesWithPhotos(Array.from(new Set(availableDates)));
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAvailableDates();
  }, [rovers]);

  useEffect(() => {
    const fetchPhotosForDate = async () => {
      try {
        const photoPromises = rovers.map((rover) =>
          axios.get(
            `https://mars-photos.herokuapp.com/api/v1/rovers/${rover}/photos?api_key=${API_KEY}&earth_date=${selectedDate}`
          )
        );

        const photoResponses = await Promise.all(photoPromises);

        // Combined photo data from all rovers
        const combinedData = photoResponses.flatMap((response) => response.data.photos);

        setCombinedPhotos(combinedData);
      } catch (error) {
        console.error(error);
      }
    };

    if (selectedDate) {
      fetchPhotosForDate();
    }
  }, [rovers, selectedDate]);

  const handleDateSelection = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div>
      {loading ? (<div className='h-[80vh] flex justify-center items-center'><img src='assets/astronaut.gif' className='w-[450px] z-50' /></div>) : (
        <div className='flex flex-col'>
          <h1 className='text-white font-bold text-3xl text-center'>
            Rovers Imagery
          </h1>
          <div className='flex flex-col self-center w-full lg:w-1/2'>
            <select className='p-2 m-4 blur__card text-orange-500 text-center text-[2rem] lg:text-[3rem] font-bold' value={selectedDate} onChange={handleDateSelection}>
              <option value="">Select a date</option>
              {datesWithPhotos.map((date, index) => (
                <option key={index} value={date}>
                  {date}
                </option>
              ))}
            </select>
          </div>
          <div className="p-8 lg:grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {combinedPhotos.map((photo, index) => (
              <PhotoCard key={index} photo={photo} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Imagery;
