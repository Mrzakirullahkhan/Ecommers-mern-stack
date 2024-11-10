import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import SignUp from "../pages/SignUp";

// Define the routes
const route = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "",
        element: <Home />,  // Default route when at "/"
      },
      {
        path:"login",
        element:<Login/>
      },
      {
        path:"forgot-password",
        element:<ForgotPassword/>
      },
      {
        path:"sign-up",
        element:<SignUp/>
      },
    ],
  },
]);

export default route;