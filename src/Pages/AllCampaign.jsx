import { useLoaderData } from "react-router-dom";
import Card from "../Components/Card";
export default function AllCampaign() {
  const data = useLoaderData();
  return (
    <>
      <section className="bg-blue-50 my-10 font-poppins">
        <div className="w-3/4 mx-auto py-16 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.map((d) => (
              <Card key={d.id} info={d} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
