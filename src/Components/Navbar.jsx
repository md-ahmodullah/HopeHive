import { Link, NavLink } from "react-router-dom";
export default function Navbar() {
  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/all-campaign">All Campaign</NavLink>
      <NavLink to="/add-new-campaign">Add New Campaign</NavLink>
      <NavLink to="/my-campaign">My Campaign</NavLink>
      <NavLink to="/my-donations">My Donations</NavLink>
    </>
  );
  return (
    <section className="w-11/12 mx-auto">
      <div className="navbar bg-base-100 py-3">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-3"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="https://i.ibb.co.com/JBc6RpV/Screenshot-19-removebg-preview.png"
              alt="Logo"
              className="w-12"
            />
            <Link to="/" className="text-3xl text-blue-600 font-bold">
              HopeHive
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8 items-center">
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-3">
          <Link to="/auth/login" className="btn bg-blue-600 text-white">
            Login
          </Link>
          <Link to="/auth/register" className="btn bg-blue-600 text-white">
            Register
          </Link>
        </div>
      </div>
    </section>
  );
}
