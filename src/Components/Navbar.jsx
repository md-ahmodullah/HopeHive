import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Theme from "./Theme";
export default function Navbar() {
  const { user, logOut } = useContext(AuthContext);

  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/all-campaign">All Campaign</NavLink>
      {user && (
        <>
          <NavLink to="/add-new-campaign">Add New Campaign</NavLink>
          <NavLink to="/my-campaign">My Campaign</NavLink>
          <NavLink to="/my-donations">My Donations</NavLink>
        </>
      )}
    </>
  );

  const handleLogOut = () => {
    logOut();
  };

  return (
    <section className="w-11/12 mx-auto font-poppins">
      <div className="navbar bg-transparent">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow gap-3"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="https://i.ibb.co.com/JBc6RpV/Screenshot-19-removebg-preview.png"
              alt="Logo"
              className="w-10 hidden md:flex"
            />
            <Link to="/" className="text-2xl text-blue-600 font-bold">
              HopeHive
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 items-center">
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-3">
          <div>
            <Theme />
          </div>
          {user && user.email ? (
            <>
              <img
                src={
                  user?.photoURL || "https://i.ibb.co.com/cJWSt88/user-1.png"
                }
                alt=""
                className="w-12 h-12 object-cover rounded-full border-2 border-blue-600 p-1"
                title={user?.displayName || "Failed to Get"}
              />
              <button
                onClick={handleLogOut}
                className="btn bg-blue-600 text-white"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link to="/auth/login" className="btn bg-blue-600 text-white">
                Login
              </Link>
              <Link to="/auth/register" className="btn bg-blue-600 text-white">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
