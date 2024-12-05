import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { ImQuotesLeft } from "react-icons/im";
export default function Reviews() {
  return (
    <section className="w-3/4 mx-auto font-poppins my-12">
      <div className="grid grid-cols-2 items-center gap-5">
        <div className="space-y-7">
          <h1 className="text-4xl font-semibold">
            Satisfied Words for <br />
            Hope Hive
          </h1>
          <ImQuotesLeft className="text-4xl text-yellow-500" />
          <h3 className="font-medium text-lg w-3/5">
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
            src="https://i.ibb.co.com/9vHg0Gr/reviews.png"
            alt=""
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
