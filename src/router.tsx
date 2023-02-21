import "./App.css";
import { createHashRouter, RouterProvider } from "react-router-dom";

const routes = createHashRouter([
  {
    path: "/",
    element: <h1>testing</h1>,
  },
]);

function Router() {
  return <RouterProvider router={routes} />;
}

export default Router;
