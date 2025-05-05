import Home from './Home';
import About from './About';
import App from '../../App';
import Imagery from './Imagery';
import Weather from './Weather';
import Partners from './Partners';
import ErrorPage from './ErrorPage';
import Missions from './Missions';
import Mars from './Mars';
import Moon from './moons/Moon';
import Rover from './rovers/Rover';
import Satellite from './satellites/Satellite';
import MoonsCategory from './moons/MoonsCategory';
import RoversCategory from './rovers/RoversCategory';
import SatellitesCategory from './satellites/SatellitesCategory';
import RoversSubcategory from './rovers/RoversSubcategory';
import SatellitesSubcategory from './satellites/SatelliteSubcategory';

interface RouteObject {
  path: string;
  element: React.ReactNode;
  text?: string;
  errorElement?: React.ReactNode;
  children?: RouteObject[];
}

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        text: 'HOME',
        element: <Home />,
      },
      {
        path: 'about',
        text: 'ABOUT',
        element: <About />,
        children: [
          {
            path: 'mars',
            element: <Mars />,
          },
          {
            path: 'moons',
            element: <MoonsCategory />,
            children: [
              {
                path: ':moonId',
                element: <Moon />,
              },
            ],
          },
          {
            path: 'rovers',
            element: <RoversCategory />,
            children: [
              {
                path: ':subcategory',
                element: <RoversSubcategory />,
                children: [
                  {
                    path: ':roverId',
                    element: <Rover />,
                  },
                ],
              },
            ],
          },
          {
            path: 'satellites',
            element: <SatellitesCategory />,
            children: [
              {
                path: ':subcategory',
                element: <SatellitesSubcategory />,
                children: [
                  {
                    path: ':satelliteId',
                    element: <Satellite />,
                  },
                ],
              },
            ],
          },
          {
            path: 'missions',
            element: <Missions />,
          },
        ],
      },
      {
        path: 'imagery',
        text: 'IMAGERY',
        element: <Imagery />,
      },
      {
        path: 'weather',
        text: 'WEATHER',
        element: <Weather />,
      },
      {
        path: 'partners',
        text: 'PARTNERS',
        element: <Partners />,
      },
    ],
  },
];

export default routes;
