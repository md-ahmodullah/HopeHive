import { useLoaderData } from "react-router-dom";
import Card from "../Components/DetailsData";
export default function Details() {
  const data = useLoaderData();

  return (
    <>
      <section className="bg-blue-50 mb-2 font-poppins">
        <div className="w-10/12 mx-auto py-16 space-y-12">
          <h2 className="text-base lg:text-xl font-bold text-blue-800 border-b-2 border-blue-200 pb-3">
            Campaign Details :{" "}
            <span className="text-orange-600">{data.title}</span>
          </h2>
          {
            <div className="grid grid-cols-1">
              <Card key={data._id} info={data} />
            </div>
          }
        </div>
      </section>
    </>
  );
}
