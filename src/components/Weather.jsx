import { useEffect, useState } from 'react';



const Weather = () => {

  const URL = "https://api.nasa.gov/insight_weather/?api_key=3gdaS7EfzvN0wGfCVqKhm8atgymXVO7BSi2s0Hnq&feedtype=json&ver=1.0";
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [weather, setWeather] = useState({
    sol: "",
    minTemp: "",
    maxTemp: "",
    season: "",
    solDate: "",
    avgPressure: "",
    // horizontalWindSpeed: "",
  });


  const fetchData = () => {
    return fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        const { sol_keys, validity_checks, ...solData } = data;
        console.log(data?.PRE?.mx);
        console.log(data?.PRE?.mn);
        console.log(data?.season);
        console.log(data?.PRE?.av);
        if (data?.PRE?.mx && data?.PRE?.mn && data?.season && data?.PRE?.av) {
          return Object.entries(solData).map(([sol, data]) => {
            if (sol_keys[sol_keys.length - 1] === sol) {
              return {
                sol: sol,
                maxTemp: data?.PRE?.mx,
                minTemp: data?.PRE?.mn,
                date: new Date(data?.First_UTC),
                season: data?.Season,
                avgPressure: data?.PRE?.av,
              };
            } else {
              return null;
            }
          });
        }
      })
      .catch((error) => {
        setError(true);
      })
  }

  useEffect(() => {
    fetchData().then((weather) => {
      if (weather) {
        for (let i = 0; i < weather.length; i++) {
          if (weather[i] !== null) {
            setWeather({
              sol: weather[i].sol,
              minTemp: weather[i].minTemp,
              maxTemp: weather[i].maxTemp,
              season: weather[i].season,
              solData: weather[i].date,
              avgPressure: weather[i].avgPressure,
            });
          }
        }
        setLoading(false);
      } else {
        setLoading(false);
        setError(true);
      }
    });
  }, []);



  return (
    <div className='flex flex-col h-[80vh] justify-center items-center text-center'>
      {loading ? (
        <img src='src/assets/astronaut.gif' className='w-[450px] z-10' />
      ) : error ? (
        <div className='flex flex-col justify-center items-center'>
          <img src='src/assets/rover.png' className='w-[450px] z-10 pb-20' />
          <p className='text-slate-600 text-lg md:text-[24px] lg:text-[30px] 4k:text-[40px] font-bold'>Data unavailable for today. Please check again in a few days.</p>
        </div>
      ) : (
        <h1 className='text-white text-5xl'>Data</h1>
      )}
    </div>
  );

}


export default Weather
