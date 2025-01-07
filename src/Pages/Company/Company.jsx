import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import BannerHeading from "../../Components/Reusable Components/BannerHeading";

export default function Company() {
  const data = useLoaderData();
  return (
    <div className="w-11/12 mx-auto">
      <div className="pt-5">
        <BannerHeading
          title={"Who We Are?"}
          subTitle={
            "Driving innovation and connecting ideas with opportunities. Learn how projects are initiated, funds are raised, and dreams are realized. Explore a seamless process that connects contributors with meaningful campaigns, ensuring transparency, trust, and impact."
          }
          button={"Join Us"}
          img={"https://i.ibb.co.com/ftk4fcW/slider1.jpg"}
        />
      </div>

      <div className="bg-base-200">
        <div className="py-10 w-11/12 mx-auto">
          <h2 className="text-xl lg:text-3xl text-center font-bold">
            About Us
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center text-white company pt-8">
            <NavLink
              to="/company"
              className="flex items-center gap-4 bg-blue-400 px-10 py-3"
            >
              <div>
                <h3 className="text-lg font-semibold">Our Story</h3>
                <p className="text-xs">About us & History</p>
              </div>
            </NavLink>
            <NavLink
              to="/company/purposes"
              className="flex items-center gap-4 bg-blue-400 px-10 py-3"
            >
              <div>
                <h3 className="text-lg font-semibold">Our Purposes</h3>
                <p className="text-xs">Make a Change</p>
              </div>
            </NavLink>
            <NavLink
              to="/company/values"
              className="flex items-center gap-4 bg-blue-400 px-10 py-3"
            >
              <div>
                <h3 className="text-lg font-semibold">Our Values</h3>
                <p className="text-xs">Better Commitments</p>
              </div>
            </NavLink>
          </div>
          <div className="pt-5">
            <Outlet />
          </div>
        </div>
      </div>
      <div className="py-8 w-11/12 mx-auto">
        <h2 className="text-xl lg:text-3xl text-center font-bold">
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10">
          {data.map((d, i) => (
            <div className="card bg-base-100 image-full shadow-xl">
              <figure>
                <img src={d.photo} alt={d.name} />
              </figure>
              <div className="card-body justify-center">
                <h2 className="card-title">{d.name}</h2>
                <p>{d.role}</p>
                <Link to="/auth/register" className="btn btn-primary">
                  Connect
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
