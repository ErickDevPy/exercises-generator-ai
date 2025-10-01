import { createBrowserRouter } from "react-router-dom";
import { ConfigPage, ExercisesParamsPage, MenuPage } from "./Pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MenuPage />,
  },
  {
    path: "/config",
    element: <ConfigPage />,
  },
  {
    path: "/exercises-params",
    element: <ExercisesParamsPage />,
  },
]);