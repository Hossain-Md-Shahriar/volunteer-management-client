import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../layouts/Main";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NeedVolunteer from "../pages/NeedVolunteer";
import AddVolunteerPost from "../pages/AddVolunteerPost";
import ManageMyPost from "../pages/ManageMyPost";
import PrivateRoute from "./PrivateRoute";
import ScrollToTop from "../components/ScrollToTop";
import PostDetails from "../pages/PostDetails";
import BeAVolunteer from "../pages/BeAVolunteer";
import UpdatePost from "../pages/UpdatePost";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <Main />
      </>
    ),
    errorElement: <ErrorPage />,
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
      {
        path: "/need-volunteer/:id",
        element: (
          <PrivateRoute>
            <PostDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/be-volunteer/:id",
        element: (
          <PrivateRoute>
            <BeAVolunteer />
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdatePost />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
