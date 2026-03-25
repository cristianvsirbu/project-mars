import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import barometer from '/assets/weather/barometer.svg';
import clear_day from '/assets/weather/clear_day.svg';
import sunrise from '/assets/weather/sunrise.svg';
import sunset from '/assets/weather/sunset.svg';
import thermometer_colder from '/assets/weather/thermometer_colder.svg';
import thermometer_warmer from '/assets/weather/thermometer_warmer.svg';
import useMediaQuery from '../../hooks/useMediaQuery';
import { storeDataInLocalStorage, getAndCheckDataFromLocalStorage } from '../../lib/utils';
import { WeatherData } from '../../lib/types';

interface WeatherCardProps {
  weather: WeatherData;
}

const WeatherCard = ({ weather }: WeatherCardProps) => {
  const weatherItems = [
    {
      label: 'Sol',
      value: weather.dateSol,
      icon: clear_day,
      alt: 'Sol',
    },
    {
      label: 'Pressure',
      value: weather.pressure ? `${weather.pressure} Pa` : 'Missing data',
      icon: barometer,
      alt: 'Pressure',
    },
    {
      label: 'Max Temperature',
      value: `${weather.highCelsius}`,
      icon: thermometer_warmer,
      alt: 'Maximum Temperature',
    },
    {
      label: 'Min Temperature',
      value: `${weather.lowCelsius}`,
      icon: thermometer_colder,
      alt: 'Minimum Temperature',
    },
    {
      label: 'Sunrise',
      value: weather.sunrise ? weather.sunrise : 'Missing data',
      icon: sunrise,
      alt: 'Sunrise',
    },
    {
      label: 'Sunset',
      value: weather.sunset ? weather.sunset : 'Missing data',
      icon: sunset,
      alt: 'Sunset',
    },
  ];
  const isDesktop = useMediaQuery('(min-width:768px)');

  return (
    <div className="grid md:grid-cols-2 parallax blur__card items-center justify-around py-[2rem] mt-8 mx-8">
      <div className="text-[2rem] col-span-2 text-center font-bold italic">{weather.dateUTC}</div>
      {weatherItems.map((item, i) => (
        <div key={i} className="md:flex md:flex-col md:items-center">
          <div key={i} className="w-[6rem] md:w-[8rem]">
            <img src={item.icon} alt={item.alt} className="w-[100%] object-contain" />
          </div>
          {isDesktop && (
            <div className="text-[1.5rem] text-center text-orange-500">{item.label}</div>
          )}
          <div
            className={`text-center font-medium text-white ${
              item.value === 'Missing data'
                ? 'text-[14px] md:text-[16px]'
                : 'text-[20px] md:text-[24px]'
            }`}
          >
            {item.value}
          </div>
        </div>
      ))}
    </div>
  );
};

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
