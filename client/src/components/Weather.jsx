import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const WeatherCard = ({ weather, index }) => {
  const cardNumber = index + 1;
  

  return (
    <div key={index} className='px-4'>
      <h3>Day {cardNumber}</h3>
      <p>{weather.dateSol}</p>
      <p>Date: {weather.UTC}</p>
      <p>T.max:{weather.highCelsius}</p>
      <p>T.min:{weather.lowCelsius}</p>
      <p>Pressure: {weather.pressure} Pa</p>
      <p>Sunrise: {weather.sunrise}</p>
      <p>Sunset: {weather.sunset}</p>
    </div>
  );
};
WeatherCard.propTypes = {
  weather: PropTypes.shape({
    dateSol: PropTypes.string.isRequired,
    UTC: PropTypes.string.isRequired,
    highCelsius: PropTypes.number.isRequired,
    lowCelsius: PropTypes.number.isRequired,
    pressure: PropTypes.number.isRequired,
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
        console.log(data);
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
      <h1>Weather Data</h1>
      {loading ? (
        <div className='h-[80vh] flex justify-center items-center'><img src='/assets/astronaut.gif' className='w-[450px] z-50' /></div>
      ) : (
      <div className='flex'>
        {weatherData.map((item, index) => (
          <WeatherCard key={index} weather={item} index={index} className='' />
        ))}
        </div>
      )}
    </div>
  );
};

export default Weather;
