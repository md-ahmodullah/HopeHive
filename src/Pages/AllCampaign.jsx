import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cards from "../Components/Cards";
export default function AllCampaign() {
  const loadedData = useLoaderData();

  const [data, setData] = useState(loadedData);
  const handleSort = (e) => {
    const selectedFilter = e.target.value;
    const low2Hisorted = [...data].sort((a, b) => a.amount - b.amount);
    const Hi2Lowsorted = [...data].sort((a, b) => b.amount - a.amount);
    selectedFilter === "Low To High"
      ? setData(low2Hisorted)
      : setData(Hi2Lowsorted);
  };
  return (
    <>
      <section className="bg-transparent mb-2 font-poppins">
        <div className="px-2 w-11/12 lg:w-10/12 mx-auto py-16 space-y-12">
          <div className="flex items-center justify-between border-b-2 border-blue-200 pb-3">
            <h2 className="text-xl lg:text-3xl font-bold text-blue-600">
              All Campaigns({data.length})
            </h2>
            <div className="flex items-center gap-2">
              <select
                className="select select-bordered w-full"
                onChange={handleSort}
              >
                <option>Default</option>
                <option>Low To High</option>
                <option>High To Low</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.map((d) => (
              <Cards key={d._id} info={d} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/*
const collected = (amount * 0.7) / 1000;
  const need_ = amount / 1000 - collected;
  const need = need_.toFixed(2);
  const formatDate = () => {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    const date = new Date(deadline);
    return date.toLocaleDateString("en-US", options);
  };
  import { BiCategory } from "react-icons/bi";
import { IoBarChart } from "react-icons/io5";
import { PiFlagFill } from "react-icons/pi";
<div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BiCategory className="text-base" />
              <p className="text-base text-gray-700 font-medium">{type}</p>
            </div>
            <div className="flex items-center gap-2">
              <IoBarChart />
              <p className="text-base text-gray-700 font-medium">${amount}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <PiFlagFill className="text-red-600" />
            <p className="text-red-600 font-semibold">Deadline</p>
            <span className="text-sm text-red-600 font-semibold">
              {formatDate()}
            </span>
          </div>
          <div className="bg-blue-100 rounded-lg">
            <div className="flex items-center overflow-hidden">
              <div className="stat pr-2">
                <div className="text-gray-700 font-semibold">
                  {amount / 1000}K
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
                    {collected.toFixed(2)}K
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
*/
