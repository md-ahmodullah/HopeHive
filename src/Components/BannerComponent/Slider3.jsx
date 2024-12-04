import { FiSearch } from "react-icons/fi";
export default function Slider3() {
  return (
    <section className="font-poppins text-white">
      <div className="bg-[url('https://i.ibb.co.com/ftk4fcW/slider1.jpg')] bg-blue-700 bg-blend-multiply bg-no-repeat bg-cover bg-center rounded-lg min-h-[600px]">
        <div className="flex flex-col items-center justify-center w-3/4 mx-auto py-8 space-y-10">
          <p className="bg-blue-500 text-yellow-200 px-4 py-2 text-xs font-normal rounded-full shadow-md">
            #1 trusted fund-raising platform
          </p>
          <div className="text-center space-y-5">
            <h1 className="text-lg md:text-2xl lg:text-4xl font-bold">
              Innovating Ideas, Transforming Lives Through Hope
            </h1>
            <p className="text-sm md:text-base text-gray-200 text-center w-full md:w-3/5 mx-auto">
              Discover a platform where dreams thrive and causes flourish. Unite
              with others to contribute, empower ideas, and make a
              transformative difference in communities and lives everywhere.
            </p>
          </div>
          <div className="bg-blue-500 bg-opacity-95 rounded-lg shadow-md flex items-center justify-between gap-3 p-1.5 w-2/5 mx-auto">
            <div>
              <input
                type="text"
                className="bg-transparent pl-3 text-white outline-none placeholder:text-slate-200 placeholder:text-xs"
                placeholder="Search campaign by categories..."
              />
            </div>
            <div className="bg-white px-3 py-1 rounded-md flex items-center gap-1 hover:bg-yellow-200">
              <FiSearch className="text-blue-600" />
              <button className="text-blue-600 text-sm">Search</button>
            </div>
          </div>
        </div>

        <div className="w-3/4 mx-auto py-8 flex items-center gap-20">
          <div className="bg-blue-600 bg-opacity-20 backdrop-blur-sm p-5 rounded-lg border border-gray-400">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold">Empower Your Vision</h2>
              <p className="text-sm text-gray-300">
                Empower Your Vision inspires individuals to turn their dreams
                into reality by connecting with a supportive community, raising
                funds, and transforming ideas into impactful projects for a
                better future.
              </p>
              <div className="flex items-start justify-between pt-3">
                <button className="btn btn-warning">Get Funded Today</button>
                <img
                  src="https://i.ibb.co.com/85GZNBW/pngwing-com-1.png"
                  alt=""
                  className="w-16 h-16 object-cover"
                />
              </div>
            </div>
          </div>

          <div className="bg-blue-600 bg-opacity-20 backdrop-blur-sm p-5 rounded-lg border border-gray-400">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold">Invest With Confidence</h2>
              <p className="text-sm text-gray-300">
                Invest With Confidence assures contributors of a secure,
                transparent platform where their support drives meaningful
                change, empowering projects, ideas, and causes to achieve their
                full potential with trust and reliability.
              </p>
              <div className="flex items-start justify-between pt-3">
                <button className="btn btn-info">Get Invest Today</button>
                <img
                  src="https://i.ibb.co.com/JdhmJkz/Screenshot-21-removebg-preview.png"
                  alt=""
                  className="w-16 h-16 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
