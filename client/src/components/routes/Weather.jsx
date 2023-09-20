import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import barometer from '/assets/weather/barometer.svg';
import clear_day from '/assets/weather/clear_day.svg';
import sunrise from '/assets/weather/sunrise.svg';
import sunset from '/assets/weather/sunset.svg';
import thermometer_colder from '/assets/weather/thermometer_colder.svg';
import thermometer_warmer from '/assets/weather/thermometer_warmer.svg';
const WeatherCard = ({ weather, index }) => {
  const weatherItems = [
    {
      label: 'Sol',
      value: weather.dateSol,
      icon: clear_day,
      alt: 'Sol',
    },
    {
      label: 'Pressure',
      value: `${weather.pressure} Pa`,
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
      value: `${weather.sunrise}`,
      icon: sunrise,
      alt: 'Sunrise',
    },
    {
      label: 'Sunset',
      value: `${weather.sunset}`,
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
  })

  return (
    <div key={index} className='grid md:grid-cols-2 parallax blur__card items-center justify-around py-[2rem] mt-8 mx-8'>
      <div className='text-[2rem] col-span-2 text-center font-bold italic'>{weather.UTC}
      </div>
      {weatherItems.map((item, i) => (
        <div key={i} className='md:flex md:flex-col md:items-center'>
          <div key={i} className='w-[6rem] md:w-[8rem]'>
            <img src={item.icon} alt={item.alt} className='w-[100%] object-contain' />
          </div>
          {windowWidth > 767 && (
            <div className='text-[1.5rem] text-center text-orange-500'>{item.label}</div>
          )}	
          <div className='text-[1.3rem] md:text-[2rem] text-center font-medium'>
            {item.value}
          </div>
        </div>
      ))}
    </div>
  );
};

WeatherCard.propTypes = {
  weather: PropTypes.shape({
    dateSol: PropTypes.string.isRequired,
    UTC: PropTypes.string.isRequired,
    highCelsius: PropTypes.string.isRequired,
    lowCelsius: PropTypes.string.isRequired,
    pressure: PropTypes.string.isRequired,
    sunrise: PropTypes.string.isRequired,
    sunset: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};


const Weather = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`/daily-weather`)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Failed to fetch weather data');
        }
      })
      .then(data => {
        setWeatherData(data);
        setLoading(false);
        setError(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
        setError(true);
      });
  }, []);

  if (error) {
    setTimeout(() => {
      window.location.reload();
    }, 5000);
  }


  return (
    <div className='text-white'>
      {loading ? (
        <div className='h-[80vh] flex justify-center items-center'>
          <video autoPlay loop src="/assets/astronaut.webm" className="mx-auto w-[50%] h-[50%]" />
        </div>
      ) : (
          <div>
            <div className='flex flex-col items-center px-5 text-center'>
              <p className='font-bold text-[4rem] text-white text-center blink__word select-none my-10'>
                Weather
              </p>
              <p className='text-[1.3rem] md:text-[1.5rem] xl:text-[1.8rem] font-medium'>
                <Link to="/about/rovers/active/curiosity" className='text-orange-500 font-bold blink'>Curiosity </Link>
                is taking daily weather measurements at Gale Crater in the southern hemisphere of Mars, near the equator.
              </p>
            </div>
        <div className='flex flex-col lg:grid lg:grid-cols-2 xl:grid-cols-4 4k:grid-cols-7'>
          {weatherData.map((item, index) => (
            <WeatherCard key={index} weather={item} index={index} />
          ))}
            </div>
          </div>
      )}
    </div>
  );
};

export default Weather;
