import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import Home from './Home';
import App from '../../App';
import ErrorPage from './ErrorPage';
import LayoutWrapper from '../ui/LayoutWrapper';

const About = lazy(() => import('./About'));
const CelestialRouter = lazy(() => import('../celestial/CelestialRouter'));
const Missions = lazy(() => import('./Missions'));
const Imagery = lazy(() => import('./Imagery'));
const Weather = lazy(() => import('./Weather'));
const Partners = lazy(() => import('./Partners'));

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
