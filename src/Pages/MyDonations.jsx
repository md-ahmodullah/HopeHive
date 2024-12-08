import { useLoaderData } from "react-router-dom";
import Cards from "../Components/Cards";
export default function MyDonations() {
  const data = useLoaderData();
  return (
    <>
      <section className="bg-transparent mb-2 font-poppins">
        <div className="w-10/12 mx-auto py-16 space-y-12">
          <h2 className="text-xl lg:text-3xl font-bold text-blue-600 border-b-2 border-blue-200 pb-3">
            My Donations({data.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((d) => (
              <Cards key={d._id} info={d} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
