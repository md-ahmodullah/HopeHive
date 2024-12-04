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
import PrivateRouter from "./PrivateRouter";
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
        element: (
          <PrivateRouter>
            <AddNewCampaign />
          </PrivateRouter>
        ),
      },
      {
        path: "/my-campaign",
        element: (
          <PrivateRouter>
            <MyCampaign />
          </PrivateRouter>
        ),
      },
      {
        path: "/my-donations",
        element: (
          <PrivateRouter>
            <MyDonations />
          </PrivateRouter>
        ),
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
