import { useLoaderData } from "react-router-dom";
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
        <div className="w-3/4 mx-auto py-16 space-y-12">
          <h2 className="text-xl lg:text-3xl font-bold text-blue-600">
            All Campaigns : {data.length}
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
                </tr>
              </thead>
              <tbody>
                {data.map((d, index) => (
                  <tr key={d._id}>
                    <th>{index + 1}</th>
                    <td>{d.title}</td>
                    <td>${d.amount}</td>
                    <td>{formatDate(d.deadline)}</td>
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
{
  /* <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {data.map((d) => (
              <Card key={d._id} info={d} />
            ))}
          </div> */
}
