import React, { Children } from 'react'
import Root from './routes/Root';
import Home from './Components/Home/Home';
import Products from './Components/Product/Products';
import Carts from './Components/Carts/Carts';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/> ,
    children:[
      {
        path: "/",
        element:<Home/>,
      },

      {
        path: "/Carts",
        element:<Carts/>,
      },
      {
        path: "/Products",
        element:<Products/>,
      },
      {
        path: "/Login",
        element:<Login/>,
      },
      {
        path: "/Register",
        element:<Register/>,
      },


    ]
  },
  
]);

function App() {
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default App