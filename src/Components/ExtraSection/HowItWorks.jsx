import { Link } from "react-router-dom";
export default function HowItWorks() {
  return (
    <section className="bg-blue-50 my-10 font-poppins">
      <div className="w-3/4 mx-auto py-16 space-y-12">
        <div className="grid grid-cols-2 items-center gap-5">
          <div className="space-y-5">
            <h2 className="text-4xl font-semibold">
              An Exploration of <br />
              How it works
            </h2>
            <Link to="/auth/register" className="btn btn-primary text-white">
              Create An Account
            </Link>
          </div>
          <p className="text-sm text-gray-600 px-12 text-justify">
            Discover the journey behind our platform's success in empowering
            ideas and causes. Learn how projects are initiated, funds are
            raised, and dreams are realized. Explore a seamless process that
            connects contributors with meaningful campaigns, ensuring
            transparency, trust, and impact. Together, we make visions a
            reality, one step at a time.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex flex-col items-center gap-2">
              <div>
                <img
                  src="https://i.ibb.co.com/FmnqhB4/icon1-removebg-preview.png"
                  alt=""
                  className="w-20 h-20 object-cover"
                />
              </div>
              <div className="space-y-3">
                <h2 className="text-xl font-semibold">
                  Find Your Passionate Project
                </h2>
                <p className="text-xs text-gray-500 text-justify">
                  Discover projects that ignite your passion and inspire action.
                  Support meaningful causes, creative ideas, and innovative
                  ventures, and be part of a community making a real difference
                  in the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
