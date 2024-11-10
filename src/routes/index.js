import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import Login from "../pages/Login";

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
    ],
  },
]);

export default route;