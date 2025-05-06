import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from './components/routes/routes';
import { ModelsDataContextProvider } from './components/models/modelsContext';

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <ModelsDataContextProvider>
      <RouterProvider router={router} />
    </ModelsDataContextProvider>
  </React.StrictMode>
);
