import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Message from "./Pages/Message/Message";
import Messages from "./Pages/Messages/Messages";
import Gigs from "./Pages/Gigs/Gigs";
import Gig from "./Pages/Gig/Gig";
import Orders from "./Pages/Orders/Orders";
import MyGigs from "./Pages/MyGigs/MyGigs";
import Add from "./Pages/Add/Add"
import Login from "./Pages/Login/Login"
import Register from "./Pages/Register/Register"


function App() {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/gigs",
          element:<Gigs/>
        },
        {
          path:"/gig/:id",
          element:<Gig/>
        },
        {
          path:"/orders",
          element:<Orders/>
        },
        {
          path:"/mygigs",
          element:<MyGigs/>
        },
        {
          path:"/add",
          element:<Add/>
        },
        {
          path:"/messages",
          element:<Messages/>
        },
        {
          path:"/message/:id",
          element:<Message/>
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ]
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
