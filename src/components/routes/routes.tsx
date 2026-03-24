import Home from './Home';
import About from './About';
import App from '../../App';
import Imagery from './Imagery';
import Weather from './Weather';
import Partners from './Partners';
import ErrorPage from './ErrorPage';
import Missions from './Missions';
import CelestialRouter from './celestial/CelestialRouter';
import LayoutWrapper from '../LayoutWrapper';

interface RouteObject {
  path?: string;
  element: React.ReactNode;
  text?: string;
  errorElement?: React.ReactNode;
  children?: RouteObject[];
  index?: boolean;
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
        element: <LayoutWrapper />,
        children: [
          {
            index: true,
            element: <About />,
          },
          {
            path: ':category',
            element: <CelestialRouter />,
          },
          {
            path: ':category/:subcategory',
            element: <CelestialRouter />,
          },
          {
            path: ':category/:subcategory/:id',
            element: <CelestialRouter />,
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
