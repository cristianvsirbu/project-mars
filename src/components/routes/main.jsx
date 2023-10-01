import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from './routes';
import App from '../../App';
import { ModelsDataContextProvider } from '../models/modelsContext';

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ModelsDataContextProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </ModelsDataContextProvider>
);




