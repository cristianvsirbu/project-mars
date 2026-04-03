import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { storeDataInLocalStorage, getAndCheckDataFromLocalStorage } from '../../lib/utils';
import { WeatherData } from '../../lib/types';
import WeatherCard from '../ui/WeatherCard';
import Loader from '../ui/Loader';

const Weather = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [weatherData, setWeatherData] = useState<WeatherData[]>();

  const fetchDataAndStore = async () => {
    setError(false);
    setLoading(true);
    try {
      const data = await fetch('/api/scraper').then((res) => res.json());
      setWeatherData(data);
      storeDataInLocalStorage(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError(true);
      setLoading(false);
      setWeatherData([]);
    }
  };

  useEffect(() => {
    let weatherData = getAndCheckDataFromLocalStorage();

    if (!weatherData) {
      fetchDataAndStore();
    } else {
      setWeatherData(weatherData);
      setLoading(false);
    }
  }, []);

  return (
    <div className="text-white">
      <div className="flex flex-col items-center px-5 text-center">
        <p className="font-bold text-6xl text-white text-center blink__word select-none my-10">
          Weather
        </p>
        <p className="text-xl md:text-2xl font-medium">
          <Link to="/about/rovers/active/curiosity" className="text-orange-500 font-bold blink">
            Curiosity{' '}
          </Link>
          is taking daily weather measurements at Gale Crater in the southern hemisphere of Mars,
          near the equator.
        </p>
      </div>
      {loading ? (
        <Loader />
      ) : error ? (
        <div className="flex flex-col my-16 justify-center items-center">
          <p className="text-red-500 font-bold text-2xl mb-4">Weather fetching failed!</p>
          <button
            className="button__style navigation_button mb-4 relative inline-block mx-4 lg:w-[5rem] self-center"
            onClick={fetchDataAndStore}
          >
            <span>Try Again</span>
          </button>
        </div>
      ) : (
        <div>
          <div className="flex flex-col lg:grid lg:grid-cols-2 xl:grid-cols-4 4k:grid-cols-7">
            {weatherData?.map((item) => (
              <WeatherCard key={item.dateSol} weather={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
