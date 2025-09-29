import { createBrowserRouter } from "react-router-dom";
import { MenuPage } from "./Pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MenuPage />,
  },
]);