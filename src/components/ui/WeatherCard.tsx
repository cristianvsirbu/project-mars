import barometer from '/assets/weather/barometer.svg';
import clear_day from '/assets/weather/clear_day.svg';
import sunrise from '/assets/weather/sunrise.svg';
import sunset from '/assets/weather/sunset.svg';
import thermometer_colder from '/assets/weather/thermometer_colder.svg';
import thermometer_warmer from '/assets/weather/thermometer_warmer.svg';
import useMediaQuery from '../../hooks/useMediaQuery';
import { WeatherCardProps } from '../../lib/types';

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
          <div className="w-[6rem] md:w-[8rem]">
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

export default WeatherCard;
