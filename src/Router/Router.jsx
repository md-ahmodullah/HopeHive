import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../Layout/AuthLayout";
import HomeLayout from "../Layout/HomeLayout";
import AddNewCampaign from "../Pages/AddNewCampaign";
import AllCampaign from "../Pages/AllCampaign";
import Company from "../Pages/Company/Company";
import Purposes from "../Pages/Company/Purpose";
import Story from "../Pages/Company/Story";
import Values from "../Pages/Company/Values";
import Details from "../Pages/Details";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Invest from "../Pages/Invest";
import Login from "../Pages/Login";
import MyCampaign from "../Pages/MyCampaign";
import MyDonations from "../Pages/MyDonations";
import Register from "../Pages/Register";
import Resources from "../Pages/Resources";
import Update from "../Pages/Update";
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
        loader: () => fetch("https://hopehiveserver.vercel.app/campaign"),
      },
      {
        path: "/details/:id",
        element: <Details />,
        loader: ({ params }) =>
          fetch(`https://hopehiveserver.vercel.app/campaign/${params.id}`),
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
        loader: () => fetch("https://hopehiveserver.vercel.app/campaign"),
      },
      {
        path: "/my-donations",
        element: (
          <PrivateRouter>
            <MyDonations />
          </PrivateRouter>
        ),
        loader: () => fetch("https://hopehiveserver.vercel.app/donate"),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRouter>
            <Update />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`https://hopehiveserver.vercel.app/myCampaign/${params.id}`),
      },
      {
        path: "/invest",
        element: <Invest />,
        loader: () => fetch("https://hopehiveserver.vercel.app/campaign"),
      },
      {
        path: "/resources",
        element: <Resources />,
        loader: () => fetch("/resources.json"),
      },
      {
        path: "/company",
        element: <Company />,
        loader: () => fetch("/team.json"),
        children: [
          {
            path: "/company",
            element: <Story />,
          },
          {
            path: "/company/values",
            element: <Values />,
          },
          {
            path: "/company/purposes",
            element: <Purposes />,
          },
        ],
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
