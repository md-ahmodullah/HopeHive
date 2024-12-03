import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../Layout/AuthLayout";
import HomeLayout from "../Layout/HomeLayout";
import AddNewCampaign from "../Pages/AddNewCampaign";
import AllCampaign from "../Pages/AllCampaign";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import MyCampaign from "../Pages/MyCampaign";
import MyDonations from "../Pages/MyDonations";
import Register from "../Pages/Register";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-campaign",
        element: <AllCampaign />,
      },
      {
        path: "/add-new-campaign",
        element: <AddNewCampaign />,
      },
      {
        path: "/my-campaign",
        element: <MyCampaign />,
      },
      {
        path: "/my-donations",
        element: <MyDonations />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
]);
