import { createBrowserRouter } from "react-router-dom";
import App from "../App";

// Define the routes
const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

// Export the correct variable 'route'
export default route;