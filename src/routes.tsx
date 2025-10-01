import { createBrowserRouter } from "react-router-dom";
import { ConfigPage, ExercisesPage, ExercisesParamsPage, MenuPage } from "./Pages";

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
  {
    path: "/exercises",
    element: <ExercisesPage />,
  }
]);