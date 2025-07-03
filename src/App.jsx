import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Registration";
import ForgotPassword from "./components/ForgotPassword";
import Dashboard from "./components/Dashboard";
import BottomNav from "./components/BottomNav";
import Navbar from "./components/NavBar";
import Home from "./components/home";
import Community from "./components/Community";
import Location from "./components/Location";
import CheckInOut from "./components/checkInOut";
import CheckInOutInfo from "./components/CheckInOutInfo";
import CheckIn from "./components/Text";
import Profile from "./components/Profile";
function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/forgotPassword", element: <ForgotPassword /> },
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        { index: true, element: <Community /> },
        { path: "/dashboard/profile", element: <Profile /> },
        { path: "/dashboard/checkIn", element: <CheckInOut /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      {/* <Community/> */}
    </>
  );
}

export default App;
