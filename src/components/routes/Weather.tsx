import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import barometer from '/assets/weather/barometer.svg';
import clear_day from '/assets/weather/clear_day.svg';
import sunrise from '/assets/weather/sunrise.svg';
import sunset from '/assets/weather/sunset.svg';
import thermometer_colder from '/assets/weather/thermometer_colder.svg';
import thermometer_warmer from '/assets/weather/thermometer_warmer.svg';

interface WeatherCardProps {
  weather: {
    dateSol: string;
    dateUTC: string;
    highCelsius: string;
    lowCelsius: string;
    pressure?: string;
    sunrise?: string;
    sunset?: string;
  };
  index: number;
}

const WeatherCard = ({ weather, index }: WeatherCardProps) => {
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

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[]);

  return (
    <div
      key={index}
      className="grid md:grid-cols-2 parallax blur__card items-center justify-around py-[2rem] mt-8 mx-8"
    >
      <div className="text-[2rem] col-span-2 text-center font-bold italic">{weather.dateUTC}</div>
      {weatherItems.map((item, i) => (
        <div key={i} className="md:flex md:flex-col md:items-center">
          <div key={i} className="w-[6rem] md:w-[8rem]">
            <img src={item.icon} alt={item.alt} className="w-[100%] object-contain" />
          </div>
          {windowWidth > 767 && (
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
  const [weatherData, setWeatherData] = useState<
    {
      dateSol: string;
      dateUTC: string;
      highCelsius: string;
      lowCelsius: string;
      pressure?: string;
      sunrise?: string;
      sunset?: string;
    }[]
  >();

  // Function to store data in localStorage with a timestamp
  function storeDataInLocalStorage(data: any) {
    const currentTime = new Date().getTime();
    const dataToStore = {
      data: data,
      timestamp: currentTime,
    };
    localStorage.setItem('weatherData', JSON.stringify(dataToStore));
  }

  // Function to retrieve and check data from localStorage
  function getAndCheckDataFromLocalStorage() {
    const storedData = localStorage.getItem('weatherData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      const { data, timestamp } = parsedData;
      const currentTime = new Date().getTime();
      const expirationTime = 24 * 60 * 60 * 1000; // 24 hours

      if (currentTime - timestamp <= expirationTime) {
        // The data is still valid (less than 24 hours)
        return data;
      }
    }
    // Data is either not in localStorage or has expired
    return null;
  }

  useEffect(() => {
    const fetchDataAndStore = async () => {
      try {
        const data = await fetch('/api/scraper').then((res) => res.json());
        console.log(data);
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

    // First, try to get data from localStorage
    let weatherData = getAndCheckDataFromLocalStorage();

    if (!weatherData) {
      // Data is not available or has expired, fetch it
      fetchDataAndStore();
    } else {
      // Data is available in localStorage, use it
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
            {weatherData?.map((item, index) => (
              <WeatherCard key={index} weather={item} index={index} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
