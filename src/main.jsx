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
import Login from './Pages/Login/Login';
import Singup from './Pages/Singup/Singup';
import AuthProvider from './Components/AuthProvider/AuthProvider';
import Dashboard from './Dashboard/Dashboard_Profile/Dashboard';
import Profile from './Dashboard/Profile/Profile';
import YtVideo from './Components/youtube_video/YtVideo';
import Blogs from './Components/Blogs/Blogs';
import Contact from './Components/AboutUs/Contact';
import About from './Components/AboutUs/About';
import BlogDetails from './Components/Blogs/BlogDetails';
import AddBlog from './Dashboard/Add_product/AddProduct';
import AddProducts from './Dashboard/AddProducts/AddProducts';
import ProductsDetails from './Home_page/Products/ProductsDetails';
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
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: 'video',
        element: <YtVideo></YtVideo>
      },
      {
        path: '/blog',
        element: <Blogs></Blogs>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/singUp',
        element: <Singup></Singup>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/blog/:id',
        element: <BlogDetails></BlogDetails>
      },
      {
        path: '/products/:id',
        element: <ProductsDetails></ProductsDetails>
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
        path: 'addBlog',
        element: <AddBlog></AddBlog>
      },
      {
        path: 'add-product',
        element: <AddProducts></AddProducts>
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
