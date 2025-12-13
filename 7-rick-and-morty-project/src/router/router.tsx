import { createBrowserRouter } from "react-router-dom";

import { DashboardLayout } from "@/layout/dashboard-layout";
import HomeScreen from "@/app/home/home";
import FavoritesScreen from "@/app/favorites/favorites";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <HomeScreen /> },
      { path: "/favorites", element: <FavoritesScreen /> },
    ],
  },
]);
