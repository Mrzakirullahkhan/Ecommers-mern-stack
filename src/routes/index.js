import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";

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
    ],
  },
]);

export default route;