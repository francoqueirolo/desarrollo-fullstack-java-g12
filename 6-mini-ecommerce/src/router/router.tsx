import HomeScreen from "@/app/home/home";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
]);
