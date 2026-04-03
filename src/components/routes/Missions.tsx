import {
  Area,
  AreaChart,
  Label,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from 'recharts';
import BackToTop from '../ui/BackToTop';
import { MISSIONS } from '../../lib/constants';
import useMediaQuery from '../../hooks/useMediaQuery';
import { getColorClass } from '../../lib/utils';

const LABEL_MAP: Record<string, string> = {
  mission: 'Mission',
  spacecraft: 'Spacecraft',
  launchDate: 'Launch Date',
  operator: 'Operator',
  missionType: 'Mission Type',
  outcome: 'Outcome',
  remarks: 'Remarks',
  carrierRocket: 'Carrier Rocket',
};

//TODO: Add filtering/sorting 
const Missions = () => {
  return (
    <div className="m-8 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 4k:grid-cols-6 text-white">
      {MISSIONS.missionsList.map((mission, index) => (
        <div key={index} className="blur__card p-6 parallax">
          {mission.logo && (
            <div className="w-full h-[10rem]">
              <img
                src={mission.logo}
                className="w-full h-full object-contain"
                alt={mission.mission}
                loading="lazy"
              />
            </div>
          )}
          <ul key={index} className="text-[1rem] lg:text-[1.3rem] 4k:text-[1.4rem]">
            {Object.entries(mission).map(([key, value]) => {
              if (key === 'logo') {
                return null;
              }
              return (
                <li
                  key={key}
                  className={`block text-slate-400 font-medium ${key === 'mission' ? 'text-center my-6' : ''}`}
                >
                  {key !== 'mission' && (
                    <strong className="text-orange-500">{LABEL_MAP[key]}: </strong>
                  )}
                  <span
                    className={`${
                      key === 'mission' ? 'font-bold text-3xl text-white' : ''
                    } ${key === 'outcome' ? getColorClass(value) : ''}`}
                  >
                    {value}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};

const MissionsPage = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const renderLineChart = (
    <div className="w-full h-[40vh]">
      <ResponsiveContainer>
        <LineChart
          layout="vertical"
          data={MISSIONS.launchesByDecade}
          margin={{
            top: 40,
            right: 20,
            bottom: 40,
          }}
        >
          <CartesianGrid strokeDasharray="5 5" stroke="#d4d4d444" />
          <XAxis
            type="number"
            style={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              fill: '#fff',
              fontStyle: 'italic',
            }}
          >
            <Label
              value="Mission launches by decade"
              position="insideTop"
              offset={-350}
              height={30}
              width={280}
              style={{
                fontSize: '1rem',
                fill: '#d4d4d474',
                fontWeight: 'bold',
                fontStyle: 'italic',
              }}
            />
          </XAxis>

          <YAxis
            dataKey="decade"
            type="category"
            style={{
              fontSize: '1rem',
              fontWeight: 'bold',
              fill: '#d4d4d464',
              fontStyle: 'italic',
            }}
          />
          <Tooltip />
          <Label
            value="Launches"
            offset={10}
            position="inside"
            fill="#fff"
            style={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              fontStyle: 'italic',
            }}
          />
          <Line
            dataKey="launches"
            stroke="#e2723d"
            type={'monotone'}
            strokeWidth={3}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  const renderAreaChart = (
    <div className="md:w-full md:p-[2rem] md:h-[40vh] xl:p-[3rem] xl:h-[80vh] select-none">
      <ResponsiveContainer>
        <AreaChart
          data={MISSIONS.launchesByDecade}
          margin={{ top: 10, right: 30, bottom: 10, left: -30 }}
          className={`backdrop-blur-sm`}
        >
          <svg>
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
            style={{
              fontSize: '1.45rem',
              fontWeight: 'bold',
              fill: '#d4d4d454',
              fontStyle: 'italic',
            }}
            axisLine={{ stroke: '#d4d4d464', strokeWidth: 2 }}
          >
            <Label
              position="top"
              offset={20}
              height={50}
              width={350}
              className="text-2xl font-bold italic"
              value="Mission launches by decade"
              style={{ fill: 'white' }}
            />
          </XAxis>
          <YAxis
            style={{
              fontSize: '1.45rem',
              fontWeight: 'bold',
              fontStyle: 'italic',
              fill: 'white',
            }}
            tickMargin={4}
            tick={{ dy: -2 }}
            axisLine={{ stroke: '#d4d4d464', strokeWidth: 2 }}
          />
          <Tooltip
            contentStyle={{
              borderRadius: '10px',
              fontSize: '1.45rem',
              fontWeight: 'bold',
              fontStyle: 'italic',
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );

  return (
    <div className="flex flex-col self-center">
      <p className="font-bold text-[3rem] lg:text-[4rem] text-white text-center blink__word select-none">
        Missions
      </p>
      {isDesktop ? renderAreaChart : renderLineChart}
      <p className="text-[1.3rem] md:text-[1.5rem] xl:text-[1.8rem] text-white text-center mx-4 font-medium">
        {MISSIONS.description}
      </p>
      <Missions />
      <BackToTop />
    </div>
  );
};

export default MissionsPage;
