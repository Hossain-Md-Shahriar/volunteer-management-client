import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../layouts/Main";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NeedVolunteer from "../pages/NeedVolunteer";
import AddVolunteerPost from "../pages/AddVolunteerPost";
import ManageMyPost from "../pages/ManageMyPost";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/need-volunteer",
        element: <NeedVolunteer />,
      },
      {
        path: "/add-volunteer-post",
        element: (
          <PrivateRoute>
            <AddVolunteerPost />
          </PrivateRoute>
        ),
      },
      {
        path: "/manage-my-post",
        element: (
          <PrivateRoute>
            <ManageMyPost />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
