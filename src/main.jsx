import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import ErrorPage from './components/ErrorPage';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import App from './App';
import About from './components/About';
import Imagery from './components/Imagery';
import Weather from './components/Weather';
import Home from './components/Home';
import Partners from './components/Partners';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/imagery',
        element: <Imagery />
      },
      {
        path: '/weather',
        element: <Weather />
      },
      {
        path: '/partners',
        element: <Partners />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
