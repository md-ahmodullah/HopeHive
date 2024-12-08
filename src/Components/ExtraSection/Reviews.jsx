import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { ImQuotesLeft } from "react-icons/im";
export default function Reviews() {
  return (
    <section className="w-3/4 mx-auto font-poppins my-12">
      <h1 className="text-3xl lg:text-4xl font-semibold pb-8">
        Satisfied Words for <br />
        Hope Hive
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 items-start lg:items-start gap-5">
        <div className="space-y-7">
          <ImQuotesLeft className="text-4xl text-yellow-500" />
          <h3 className="font-medium text-lg w-full lg:w-3/5 ">
            "I was skeptical at first, but HopeHive exceeded my expectations.
            The team is incredibly helpful, and the platform is easy to
            navigate. I've already recommended it to several friends."
          </h3>
          <p className="font-semibold">Robert Kiwisaki</p>
          <div className="flex items-center gap-3">
            <div className="bg-blue-50 rounded-full p-2 border border-gray-300 text-blue-600">
              <FaArrowLeft />
            </div>
            <div className="bg-blue-50 rounded-full p-2 border border-gray-300 text-blue-600">
              <FaArrowRight />
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://i.ibb.co.com/DQR72W0/20241208-085427.png"
            alt=""
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
