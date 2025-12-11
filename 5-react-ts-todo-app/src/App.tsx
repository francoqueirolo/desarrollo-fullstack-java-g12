import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { ThemeProvider } from "./provider/theme/theme-context";

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
