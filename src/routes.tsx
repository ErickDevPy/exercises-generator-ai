import { createBrowserRouter } from "react-router-dom";
import { ConfigPage, MenuPage } from "./Pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MenuPage />,
  },
  {
    path: "/config",
    element: <ConfigPage />,
  },
]);