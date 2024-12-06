import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
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

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/myCampaign/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = campaigns.filter(
                (campaign) => campaign._id !== _id
              );
              setCampaigns(remaining);
            }
          });
      }
    });
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
                        <button
                          onClick={() => handleDelete(campaign._id)}
                          className="btn btn-error text-white bg-red-600"
                        >
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
