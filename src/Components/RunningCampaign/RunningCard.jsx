import { BiCategory } from "react-icons/bi";
import { IoBarChart } from "react-icons/io5";
import { PiFlagFill } from "react-icons/pi";
import { Link } from "react-router-dom";
export default function RunningCard({ campaign }) {
  const { _id, title, type, description, amount, deadline, photo } = campaign;
  const collected = (amount * 0.7) / 1000;
  const need_ = amount / 1000 - collected;
  const need = need_.toFixed(2);
  const formatDate = () => {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    const date = new Date(deadline);
    return date.toLocaleDateString("en-US", options);
  };
  return (
    <>
      <div className="bg-blue-600 bg-opacity-20 backdrop-blur-sm px-4 py-5 rounded-lg border border-gray-400">
        <figure>
          <img
            src={photo}
            alt={title}
            className="w-[320px] h-[200px] object-cover rounded-lg"
          />
        </figure>

        <div className="card-body pt-6 pb-0 px-0">
          <h2 className="text-base font-semibold text-gray-100">{title}</h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BiCategory className="text-sm" />
              <p className="text-sm text-gray-300 font-medium">{type}</p>
            </div>
            <div className="flex items-center gap-2">
              <IoBarChart />
              <p className="text-sm text-gray-300 font-semibold">${amount}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <PiFlagFill className="text-yellow-400" />
            <p className="text-yellow-400 font-semibold text-sm">Deadline</p>
            <span className="text-sm text-yellow-400 font-semibold">
              {formatDate()}
            </span>
          </div>
          <div className="bg-transparent rounded-lg border border-gray-400">
            <div className="flex items-center overflow-hidden">
              <div className="stat pr-2 pt-2 pb-0">
                <div className="text-gray-300 font-semibold">
                  {amount / 1000}K
                </div>
                <div className="text-sm text-gray-300">Goal</div>
              </div>
              <div className="stat pt-2 pb-0">
                <div className="text-gray-300 font-semibold">34</div>
                <div className="text-sm text-gray-300">Invested</div>
              </div>
              <div className="stat pt-2 pb-0">
                <div className="text-gray-300 font-semibold">12%</div>
                <div className="text-sm text-gray-300">Equity</div>
              </div>
            </div>
            <div className="px-4">
              <div className="w-full">
                <progress
                  className="progress progress-warning"
                  value="70"
                  max="100"
                ></progress>
              </div>
              <div className="flex items-center justify-between w-full pt-1 pb-3">
                <p className="text-gray-300 text-xs">
                  Collected:{" "}
                  <span className="text-sm font-medium text-gray-300">
                    {collected}K
                  </span>
                </p>
                <p className="text-gray-300 text-xs">
                  Need:{" "}
                  <span className="text-sm font-medium text-gray-300">
                    {need}K
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <Link
              to={`/details/${_id}`}
              className="btn btn-outline text-gray-300 w-full hover:bg-orange-500 hover:text-black text-base"
            >
              See More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
