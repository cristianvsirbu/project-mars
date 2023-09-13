import { Area, AreaChart, Label, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { useContext, useState, useEffect } from "react";
import { ModelsDataContext } from "../models/modelsContext";



const MissionsPage = () => {
  const data = useContext(ModelsDataContext);
  const launchesByDecade = data.find((model) => model.category === 'missions').launches_by_decade;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  const renderLineChart = (
    <div className='w-[90vw] h-[40vh] mt-10'>
      <ResponsiveContainer>
        <LineChart
          layout="vertical"
          data={launchesByDecade}
          margin={{
            top: 40,
            right: 20,
            bottom: 40,
          }}
        >
          <CartesianGrid strokeDasharray="5 5" stroke='#d4d4d444' />
          <XAxis type="number" style={{ fontSize: '1.2rem', fontWeight: 'bold', fill: '#fff', fontStyle: 'italic' }} >
            <Label
              value="Mission launches by decade"
              position="top"
              offset={400}
              height={30}
              width={280}
              style={{ fontSize: '1rem', fill: '#d4d4d474', fontWeight: 'bold', fontStyle: 'italic' }}
            />
          </XAxis>

          <YAxis dataKey="decade" type="category" style={{ fontSize: '1rem', fontWeight: 'bold', fill: '#d4d4d464', fontStyle: 'italic' }} />
          <Tooltip />
          <Label value="Launches" offset={10} position="inside" fill='#fff' style={{ fontSize: '1.2rem', fontWeight: 'bold', fontStyle: 'italic' }} />
          <Line dataKey="launches" stroke="#e2723d" type={"monotone"} strokeWidth={3} activeDot={{ r: 6 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )


  const renderAreaChart = (
    <div className='md:w-[90vw] md:h-[40vh] xl:w-[60vw] xl:h-[60vh] mr-10 mt-10 select-none'>
      <ResponsiveContainer>
        <AreaChart
          data={launchesByDecade}
          margin={{ top: 10, right: 10, bottom: 50, left: 10 }}
          className={`backdrop-blur-sm`}
        >
          <svg >
            <defs>
              <linearGradient id="customGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#e2723d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#e2723d" stopOpacity={0} />
              </linearGradient>
            </defs>
          </svg>

          <Area
            type="monotone"
            dataKey="launches"
            stroke="#e2723d"
            strokeWidth={4}
            activeDot={{ r: 7 }}
            fill="url(#customGradient)"
          />
          <CartesianGrid stroke="#d4d4d434" strokeDasharray="5 5" />

          <XAxis
            dataKey="decade"
            tick={{ dy: 8 }}
            style={{ fontSize: '1.45rem', fontWeight: 'bold', fill: '#d4d4d454', fontStyle: 'italic' }}
            axisLine={{ stroke: '#d4d4d464', strokeWidth: 2 }}
          >
            <Label
              position="top"
              offset={20}
              height={50}
              width={350}
              className='text-2xl font-bold italic'
              value="Mission launches by decade"
              style={{ fill: 'white' }}
            />
          </XAxis>
          <YAxis
            style={{ fontSize: '1.45rem', fontWeight: 'bold', fontStyle: 'italic', fill: 'white' }}
            tickMargin={4}
            tick={{ dy: -2 }}
            axisLine={{ stroke: '#d4d4d464', strokeWidth: 2 }}
          />
          <Tooltip contentStyle={{ borderRadius: '10px', fontSize: '1.45rem', fontWeight: 'bold', fontStyle: 'italic' }} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )

  const Missions = () => {
    const missions = data.find((model) => model.category === 'missions').missions;

    const getColorClass = (value) => {
      if (value.toLowerCase().includes('fail')) {
        return 'text-red-500';
      } else if (value.toLowerCase().includes('mostly') || value.toLowerCase().includes('partial')) {
        return 'text-yellow-500';
      } else if (value.toLowerCase().includes('success')) {
        return 'text-green-500';
      }
      return '';
    };

    return (
      <div className='text-white grid grid-cols-1 auto-cols-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 4k:grid-cols-6 gap-8 mx-8'>
        {missions.map((mission, index) => (
          <div key={index} className='blur__card p-10 parallax'>
              {mission.logo && (
                <div className='w-full h-[20rem]'>
                  <img src={mission.logo} className='w-full h-full object-contain' alt={mission.Mission} />
                </div>
              )}
            <ul key={index} className='text-[1.1rem] lg:text-[1.3rem] 4k:text-[1.4rem]'>
              {Object.entries(mission).map(([key, value]) => {
                if (key === 'logo') {
                  return null;
                }
                return (
                  <li key={key} className={`flex flex-col text-slate-400 font-medium`}>
                    <strong className='text-orange-500'>{key}: </strong>
                    <span className={`
                ${key === 'Mission' ? 'font-bold italic text-[1.8rem] text-white' : ''}
                ${key === 'Outcome' ? getColorClass(value) : ''}`}>
                      {value}
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </div>
    )
  };

  return (
    <div>
      <div className="flex flex-col items-center">
        {windowWidth > 767 ? renderAreaChart : renderLineChart}
        <p className='font-bold text-[4rem] text-white text-center blink__word select-none mb-10'>
          Missions
        </p>
      </div>
      <Missions />
    </div>
  )

}

export default MissionsPage