import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../components/layouts/root-layout";
import HomeScreen from "../app/home/home";
import AboutScreen from "../app/about/about";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomeScreen /> },
      { path: "/about", element: <AboutScreen /> },
    ],
  },
]);
