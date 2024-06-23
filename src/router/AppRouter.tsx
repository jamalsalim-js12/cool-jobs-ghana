import App from "@/App";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import { createBrowserRouter } from "react-router-dom";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "/services",
        element: <Services />,
        index: true,
      },
    ],
  },
]);

export default AppRouter;
