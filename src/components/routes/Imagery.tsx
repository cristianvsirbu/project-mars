import { useState, useEffect, useMemo, SetStateAction } from 'react';
import PhotoCard from '../PhotoCard';
import BackToTop from '../BackToTop';
import { getNasaManifest, getRoverPhotos } from '../../services/nasaApi';

const Imagery = () => {
  const rovers = useMemo(() => ['curiosity', 'opportunity', 'spirit'], []);

  const [datesWithPhotos, setDatesWithPhotos] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [combinedPhotos, setCombinedPhotos] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadedImagesCount, setLoadedImagesCount] = useState(50);
  const [apiError, setApiError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchAvailableDates = async () => {
      try {
        setLoading(true);
        setApiError(false);
        const datesPromises = rovers.map((rover) => getNasaManifest(rover));
        const datesResponses = await Promise.all(datesPromises);
        const availableDates = datesResponses.flatMap((response: any) =>
          response.photo_manifest.photos.map((photo: { earth_date: any }) => photo.earth_date)
        );

        setDatesWithPhotos(Array.from(new Set(availableDates)));
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        setApiError(true);
        if (error.message && error.message.includes('404')) {
          setErrorMessage('The NASA Mars Rover API appears to be unavailable or has moved.');
        } else {
          setErrorMessage('Could not connect to the NASA Mars Rover API. Please try again later.');
        }
      }
    };

    fetchAvailableDates();
  }, [rovers]);

  useEffect(() => {
    const fetchPhotosForDate = async () => {
      try {
        setApiError(false);
        const photoPromises = rovers.map((rover) => getRoverPhotos(rover, selectedDate));
        const photoResponses = await Promise.all(photoPromises);
        const combinedData = photoResponses.flatMap((response: any) => response.photos);

        setCombinedPhotos(combinedData);
      } catch (error: any) {
        setApiError(true);
        if (error.message && error.message.includes('404')) {
          setErrorMessage('The NASA Mars Rover API appears to be unavailable or has moved.');
        } else {
          setErrorMessage('Could not connect to the NASA Mars Rover API. Please try again later.');
        }
      }
    };

    if (selectedDate) {
      fetchPhotosForDate();
    }
  }, [rovers, selectedDate]);

  const handleDateSelection = (event: { target: { value: SetStateAction<string> } }) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="flex flex-col w-full">
      {loading ? (
        <div className="h-[80vh] flex justify-center items-center">
          <video autoPlay loop src="/assets/astronaut.webm" className="mx-auto w-[50%] h-[50%]" />
        </div>
      ) : apiError ? (
        <div className="h-[80vh] flex flex-col justify-center items-center">
          <p className="text-red-500 text-2xl mb-4">NASA Mars Rover API Error</p>
          <p className="text-white text-xl mb-8">{errorMessage}</p>
          <button
            className="button__style navigation_button mb-4 relative inline-block mx-4 lg:w-[5rem] self-center"
            onClick={() => window.location.reload()}
          >
            <span>Try Again</span>
          </button>
        </div>
      ) : (
        <div className="flex flex-col">
          <p className="my-10 font-bold text-[4rem] text-white text-center blink__word select-none">
            Imagery
          </p>
          <div className="flex flex-col self-center w-full lg:w-1/2">
            <select
              className="p-2 m-4 blur__card text-orange-500 text-center text-[2rem] lg:text-[3rem] font-bold"
              value={selectedDate}
              onChange={handleDateSelection}
            >
              <option value="">Select a date</option>
              {datesWithPhotos.map((date, index) => (
                <option key={index} value={date}>
                  {date}
                </option>
              ))}
            </select>
          </div>
          <div className="p-8 lg:grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {combinedPhotos.slice(0, loadedImagesCount).map((photo, index) => (
              <PhotoCard key={index} photo={photo} />
            ))}
          </div>
        </div>
      )}
      {loadedImagesCount < combinedPhotos.length && !apiError && (
        <button
          className="button__style navigation_button mb-4 relative inline-block mx-4 lg:w-[5rem] self-center"
          onClick={() => setLoadedImagesCount(loadedImagesCount + 50)}
        >
          <span>Load More</span>
        </button>
      )}
      <BackToTop />
    </div>
  );
};

export default Imagery;
