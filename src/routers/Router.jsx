import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import AddCoffee from "../pages/AddCoffee/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee/UpdateCoffee";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivatRoute from "../firebase/PrivatRoute/PrivatRoute";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: () => fetch('http://localhost:5000/coffees'),
        },
        {
          path:'/about',
          element:<About />,
        },
        {
          path:'/contact',
          element:<Contact />,
        },
        {
          path:'/addCoffee',
          element:<PrivatRoute>
            <AddCoffee />
          </PrivatRoute>,
        },
        {
          path:'/updateCoffee/:id',
          element:<UpdateCoffee />,
          loader:({params}) =>fetch(`http://localhost:5000/coffees/${params.id}`)
        },
        
      ],
    },
    {
      path:'login',
      element:<Login />,
    },
    {
      path:'register',
      element:<Register />,
    },
  ]);
  export default router;