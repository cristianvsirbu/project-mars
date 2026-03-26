import { RouteObject } from 'react-router-dom';
import Home from './Home';
import About from './About';
import App from '../../App';
import Imagery from './Imagery';
import Weather from './Weather';
import Partners from './Partners';
import ErrorPage from './ErrorPage';
import Missions from './Missions';
import CelestialRouter from '../celestial/CelestialRouter';
import LayoutWrapper from '../LayoutWrapper';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'about',
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
        element: <Imagery />,
      },
      {
        path: 'weather',
        element: <Weather />,
      },
      {
        path: 'partners',
        element: <Partners />,
      },
    ],
  },
];

export default routes;
