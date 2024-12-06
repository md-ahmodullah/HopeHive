import { Link, useLoaderData } from "react-router-dom";
export default function AllCampaign() {
  const data = useLoaderData();
  const formatDate = (deadline) => {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    const date = new Date(deadline); // Parse the input date
    return date.toLocaleDateString("en-US", options);
  };
  return (
    <>
      <section className="bg-blue-50 mb-2 font-poppins">
        <div className="w-11/12 mx-auto py-16 space-y-12">
          <h2 className="text-xl lg:text-3xl font-bold text-blue-600 border-b-2 border-blue-200 pb-3">
            All Campaigns({data.length})
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
