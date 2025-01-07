import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

export default function MyDonations() {
  const [campaigns, setCampaigns] = useState([]);
  const { user } = useContext(AuthContext);

  const formatDate = (deadline) => {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    const date = new Date(deadline);
    return date.toLocaleDateString("en-US", options);
  };

  useEffect(() => {
    const userEmail = user?.email;
    if (userEmail) {
      fetch(`https://hopehiveserver.vercel.app/myDonation?email=${userEmail}`)
        .then((res) => res.json())
        .then((data) => setCampaigns(data));
    }
  }, [user]);

  return (
    <section className="bg-transparent mb-2 font-poppins">
      <div className="w-10/12 mx-auto py-16 space-y-12">
        <h2 className="text-xl lg:text-3xl font-bold text-blue-600 border-b-2 border-blue-200 pb-3">
          My Donations ({campaigns.length})
        </h2>
        <div className="">
          <div className="overflow-x-auto">
            <table className="table">
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
                {campaigns.map((campaign, index) => (
                  <tr key={campaign._id}>
                    <th>{index + 1}</th>
                    <td>{campaign.title}</td>
                    <td>${campaign.amount}</td>
                    <td>{formatDate(campaign.deadline)}</td>
                    <td>
                      <Link
                        to={`/details/${campaign._id}`}
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
      </div>
    </section>
  );
}
