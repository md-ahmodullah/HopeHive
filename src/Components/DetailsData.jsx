import { useContext } from "react";
import { BiCategory } from "react-icons/bi";
import { IoBarChart } from "react-icons/io5";
import { PiFlagFill } from "react-icons/pi";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
export default function Card({ info }) {
  const { user } = useContext(AuthContext);

  const email = user?.email;
  const displayName = user?.displayName;

  const { title, type, description, amount, deadline, photo } = info;
  const collected = (amount * 0.7) / 1000;
  const need_ = amount / 1000 - collected;
  const need = need_.toFixed(2);
  const formatDate = () => {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    const date = new Date(deadline);
    return date.toLocaleDateString("en-US", options);
  };

  const handleDonate = () => {
    const myDonatedCampaign = {
      email,
      displayName,
      title,
      type,
      description,
      amount,
      deadline,
      photo,
    };
    const lastDate = new Date(deadline);
    const currentDate = new Date();
    if (lastDate < currentDate) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Deadline is over!",
      });
      return;
    }
    fetch("https://hopehiveserver.vercel.app/donate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(myDonatedCampaign),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <>
      <div className="grid grid-cols-2 items-center gap-8">
        <figure>
          <img
            src={photo}
            alt={title}
            className="w-full h-[450px] object-cover rounded-lg shadow-md"
          />
        </figure>

        <div className="card-body border-l-2 border-blue-200 pl-8">
          <h2 className="text-2xl font-semibold text-black">{title}</h2>
          <p className="text-base text-gray-500 py-1">{description}</p>
          <div className="flex items-center justify-between pb-1">
            <div className="flex items-center gap-2">
              <BiCategory className="text-base" />
              <p className="text-base text-gray-700 font-medium">{type}</p>
            </div>

            <div className="flex items-center gap-2 text-lg pb-1">
              <IoBarChart />
              <p className="text-lg text-gray-700 font-medium">${amount}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-base pb-1">
            <PiFlagFill className="text-red-600" />
            <p className="text-red-600 font-semibold">Deadline</p>
            <span className="text-base text-red-600 font-semibold">
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
                <div>
                  <p className="text-gray-600 text-base">
                    Collected:{" "}
                    <span className="text-base font-medium text-gray-700">
                      {collected}K
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 text-base">
                    Need:{" "}
                    <span className="text-base font-medium text-gray-700">
                      {need}K
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-3">
            <button
              onClick={handleDonate}
              className="btn btn-outline text-orange-600 w-full hover:bg-orange-500 hover:text-black text-lg"
            >
              Donate
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
