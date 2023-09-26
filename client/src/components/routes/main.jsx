import ReactDOM from 'react-dom/client';
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from './routes';
import App from '../../App';
import { ModelsDataContextProvider } from '../models/modelsContext';

const router = createBrowserRouter(routes);

const root = ReactDOM.hydrateRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ModelsDataContextProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </ModelsDataContextProvider>
  </React.StrictMode>
);




