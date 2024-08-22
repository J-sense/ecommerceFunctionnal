import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import ProoductDetails from "./components/ProoductDetails.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch('https://dummyjson.com/products')
      },
      {
        path: "/product/:id",
        element:<ProoductDetails></ProoductDetails>
        
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <RouterProvider router={router} />
  </StrictMode>,
)
