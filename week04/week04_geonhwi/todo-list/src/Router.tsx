import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Calendar from "./pages/Date";
import Note from "./pages/Note";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/Calendar",
    element: <Calendar />,
  },
  {
    path: "/Note",
    element: <Note />,
  },
]);
