import { useState } from "react";
import { ImEqualizer2 } from "react-icons/im";
import { Link, useLoaderData } from "react-router-dom";
export default function AllCampaign() {
  const loadedData = useLoaderData();
  const [data, setData] = useState(loadedData);
  const formatDate = (deadline) => {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    const date = new Date(deadline); // Parse the input date
    return date.toLocaleDateString("en-US", options);
  };
  const handleSort = () => {
    const sortedData = [...data].sort((a, b) => a.amount - b.amount);
    setData(sortedData);
  };
  return (
    <>
      <section className="bg-transparent mb-2 font-poppins">
        <div className="w-full px-2 md:w-11/12 lg:w-10/12 mx-auto py-16 space-y-12">
          <div className="flex items-center justify-between border-b-2 border-blue-200 pb-3">
            <h2 className="text-xl lg:text-3xl font-bold text-blue-600 ">
              All Campaigns({data.length})
            </h2>
            <button
              onClick={handleSort}
              className="btn btn-outline text-blue-600 text-lg hover:btn-warning flex items-center gap-2"
            >
              <ImEqualizer2 />
              Sort
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="text-gray-400">
                <tr>
                  <th></th>
                  <th>Title</th>
                  <th>Amount</th>
                  <th>Deadline</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((d, index) => (
                  <tr key={d._id}>
                    <th>{index + 1}</th>
                    <td>{d.title}</td>
                    <td>${d.amount}</td>
                    <td>{formatDate(d.deadline)}</td>
                    <td>
                      <Link
                        to={`/details/${d._id}`}
                        className="btn btn-primary hover:btn-warning"
                      >
                        See More
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
