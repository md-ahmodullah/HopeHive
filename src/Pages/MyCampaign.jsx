import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
export default function MyCampaign() {
  const [campaigns, setCampaigns] = useState([]);
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;

  useEffect(() => {
    if (userEmail) {
      fetch(`http://localhost:5000/myCampaign?email=${userEmail}`)
        .then((res) => res.json())
        .then((data) => setCampaigns(data));
    }
  }, [userEmail]);
  const formatDate = (deadline) => {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    const date = new Date(deadline); // Parse the input date
    return date.toLocaleDateString("en-US", options);
  };
  return (
    <>
      <section className="bg-blue-50 mb-2 font-poppins">
        <div className="w-3/4 mx-auto py-16 space-y-12">
          <h2 className="text-xl lg:text-3xl font-bold text-blue-600">
            My Campaigns : {campaigns.length}
          </h2>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Title</th>
                  <th>Amount</th>
                  <th>Deadline</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {campaigns.map((campaign, index) => (
                  <tr key={campaign._id}>
                    <th>{index + 1}</th>
                    <td>{campaign.title}</td>
                    <td>${campaign.amount}</td>
                    <td>{formatDate(campaign.deadline)}</td>
                    <td>
                      <div className="flex items-center gap-1">
                        <Link to={`/update/${campaign._id}`}>
                          <button className="btn btn-primary text-white">
                            Update
                          </button>
                        </Link>
                        <button className="btn btn-error text-white bg-red-600">
                          Delete
                        </button>
                      </div>
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
