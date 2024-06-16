import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Calendar from "./pages/Date";
import Home from "./pages/Home";

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
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/Home/:date", // 날짜를 파라미터로 받는 Note 경로 추가
    element: <Home />,
  },
]);
