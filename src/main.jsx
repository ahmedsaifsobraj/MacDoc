import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './components/Layout/Main.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import Reviews from './components/Reviews/Reviews.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Blogs from './components/Blogs/Blogs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "reviews",
        element: <Reviews />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
