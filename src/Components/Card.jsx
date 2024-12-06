import { BiCategory } from "react-icons/bi";
import { IoBarChart } from "react-icons/io5";
import { PiFlagFill } from "react-icons/pi";
export default function Card({ info }) {
  const { title, type, description, amount, deadline, photo } = info;
  const collected = parseInt(amount * 0.07);
  const need = amount - collected;
  console.log(title, type, description, amount, deadline, photo);

  return (
    <>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            src={photo}
            alt={title}
            className="w-full h-[200px] object-cover"
          />
        </figure>

        <div className="card-body">
          <h2 className="text-lg font-medium text-black">{title}</h2>
          <p className="text-sm text-gray-500">{description}</p>
          <div className="flex items-center gap-2">
            <BiCategory />
            <p className="text-sm text-gray-700 font-medium">{type}</p>
          </div>

          <div className="flex items-center gap-2">
            <IoBarChart />
            <p className="text-sm text-gray-700 font-medium">${amount}</p>
          </div>

          <div className="bg-blue-100 rounded-lg">
            <div className="flex items-center">
              <div className="stat">
                <div className="text-gray-700 font-semibold">
                  {amount / 10}K
                </div>
                <div className="text-sm text-gray-600">Goal</div>
              </div>
              <div className="stat">
                <div className="text-gray-700 font-semibold">34</div>
                <div className="text-sm text-gray-600">Invested</div>
              </div>
              <div className="stat">
                <div className="text-gray-700 font-semibold">12%</div>
                <div className="text-sm text-gray-600">Equity</div>
              </div>
            </div>
            <div className="px-4">
              <div className="w-full">
                <progress
                  className="progress progress-primary"
                  value="70"
                  max="100"
                ></progress>
              </div>
              <div className="flex items-center justify-between w-full pt-1 pb-3">
                <p className="text-gray-600 text-xs">
                  Collected:{" "}
                  <span className="text-sm font-medium text-gray-700">
                    {collected}K
                  </span>
                </p>
                <p className="text-gray-600 text-xs">
                  Need:{" "}
                  <span className="text-sm font-medium text-gray-700">
                    {need}K
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <PiFlagFill className="text-red-600" />
            <p className="text-red-600 font-semibold">Deadline</p>
            <span className="text-sm text-red-600 font-semibold">
              {deadline}
            </span>
          </div>
          <div className="pt-3">
            <button className="btn btn-outline text-orange-500 w-full hover:bg-orange-500">
              Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
