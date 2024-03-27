import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter, RouterProvider, Outlet
} from "react-router-dom";
import Mounting from './components/Mounting';
import Unmounting from './components/Unmounting';
import Updating from './components/Updating';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <div></div>
      },
      {
        path: "/mounting",
        element: <Mounting />
      },
      {
        path: "/unmounting",
        element: <Unmounting />
      },
      {
        path: "/updating",
        element: <Updating />
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      </RouterProvider>
  </React.StrictMode>
)