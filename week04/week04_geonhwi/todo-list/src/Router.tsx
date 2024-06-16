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
  {
    path: "/Note/:date", // 날짜를 파라미터로 받는 Note 경로 추가
    element: <Note />,
  },
]);
