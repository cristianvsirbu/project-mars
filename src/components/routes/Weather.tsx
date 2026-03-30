import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { storeDataInLocalStorage, getAndCheckDataFromLocalStorage } from '../../lib/utils';
import { WeatherData } from '../../lib/types';
import WeatherCard from '../ui/WeatherCard';

const Weather = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [weatherData, setWeatherData] = useState<WeatherData[]>();

  useEffect(() => {
    const fetchDataAndStore = async () => {
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
      {loading ? (
        <div className="h-[80vh] flex justify-center items-center">
          <video autoPlay loop src="/assets/astronaut.webm" className="mx-auto w-[50%] h-[50%]" />
        </div>
      ) : (
        <div>
          <div className="flex flex-col items-center px-5 text-center">
            <p className="font-bold text-[4rem] text-white text-center blink__word select-none my-10">
              Weather
            </p>
            <p className="text-[1.3rem] md:text-[1.5rem] xl:text-[1.8rem] font-medium">
              <Link to="/about/rovers/active/curiosity" className="text-orange-500 font-bold blink">
                Curiosity{' '}
              </Link>
              is taking daily weather measurements at Gale Crater in the southern hemisphere of
              Mars, near the equator.
            </p>
          </div>
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
