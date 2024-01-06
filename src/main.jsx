import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Main/Main';
import Home from './Home_page/Home';
import About from './Components/AboutUs/About';
import Login from './Pages/Login/Login';
import Singup from './Pages/Singup/Singup';
import AuthProvider from './Components/AuthProvider/AuthProvider';
import Dashboard from './Dashboard/Dashboard_Profile/Dashboard';
import Profile from './Dashboard/Profile/Profile';
import YtVideo from './Components/youtube_video/YtVideo';
import AddProduct from './Dashboard/Add_product/AddProduct';
const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: 'video',
        element: <YtVideo></YtVideo>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/singUp',
        element: <Singup></Singup>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'profile',
        element: <Profile></Profile>
      },
      {
        path: 'addproduct',
        element: <AddProduct></AddProduct>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <div className='lg:w-[1280px] mx-auto'>
          <RouterProvider router={router} />
        </div>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
