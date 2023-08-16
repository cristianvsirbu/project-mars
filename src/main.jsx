import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import ErrorPage from './components/ErrorPage';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import App from './App';
import {routes} from './routes';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: routes.map((route) => ({
      path: route.path,
      text: route.text,
      element: route.element
    }))
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
