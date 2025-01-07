import { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";
export default function WhyHopeHive() {
  const [facilities, setFacilities] = useState([]);
  useEffect(() => {
    fetch("/facilities.json")
      .then((res) => res.json())
      .then((data) => setFacilities(data));
  }, []);
  return (
    <>
      <div className="w-10/12 mx-auto py-8 my-12 font-poppins">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="col-span-3">
            <h1 className="font-bold text-4xl pb-3">
              Why HopeHive is the <br /> Right Choice for your <br /> Investment
              Goals
            </h1>
            <p className="text-sm font-medium py-4">
              Some important facilities to consider including are:
            </p>
            <div className="grid grid-cols-2 gap-4 pb-8">
              {facilities.map((facility) => (
                <div key={facility.id} className=" flex items-center gap-2">
                  <div className="bg-yellow-400 w-4 rounded-md">
                    <TiTick />
                  </div>
                  <p>{facility.facility}</p>
                </div>
              ))}
            </div>
            <Link to="/all-campaign" className="btn btn-primary">
              Browse Project
            </Link>
          </div>
          <div className="col-span-2">
            <div>
              <div className="flex items-center gap-1 py-2">
                <Link to="/">
                  <img
                    src="https://i.ibb.co.com/JBc6RpV/Screenshot-19-removebg-preview.png"
                    alt="Logo"
                    className="w-5"
                  />
                </Link>
                <Link
                  to="/"
                  className="text-sm md:text-lg text-blue-600 font-bold hidden md:flex"
                >
                  HopeHive
                </Link>
              </div>
              <h2 className="text-xl font-semibold pb-3">
                We are globally{" "}
                <span className="bg-yellow-400 rounded-full px-3 py-0.5">
                  100%
                </span>{" "}
                trusted <br />
                investment & Fund Raising company
              </h2>
            </div>
            <div>
              <img
                src="https://i.ibb.co.com/0y2TbXB/Screenshot-6.png"
                alt=""
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
