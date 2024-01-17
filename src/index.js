import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './routes/home';
import About from './routes/about';
import Audio from './routes/audio';
import Video from './routes/video';
import Lighting from './routes/lighting';
import Data from './routes/data';
import Billboards from './routes/billboards';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import routes from './routes/routes';

const Components = {
  home: Home,
  about: About,
  audio: Audio,
  video: Video,
  lighting: Lighting,
  data: Data,
  billboards: Billboards,
} 

const router = createBrowserRouter(routes.map(route => ({...route, Component: Components[route.component]})));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
