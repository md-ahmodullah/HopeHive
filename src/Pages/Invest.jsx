import { useLoaderData } from "react-router-dom";
import Cards from "../Components/Cards";
import BannerHeading from "../Components/Reusable Components/BannerHeading";
export default function Invest() {
  const data = useLoaderData();
  const sortedData = [...data].sort((a, b) => b.amount - a.amount);
  const topCampaign = sortedData.slice(0, 4);

  return (
    <div className="w-11/12 mx-auto">
      <BannerHeading
        title={"Invest With Confidence"}
        subTitle={
          "Invest With Confidence assures contributors of a secure, transparent projects, ideas, and causes to achieve their full potential with trust and reliability. Invest With Confidence assures contributors of a secure, transparent projects, ideas, and causes to achieve their full potential with trust and reliability."
        }
        button={"Get Invest Today"}
        img={"https://i.ibb.co.com/zGY0KLQ/slider2.jpg"}
      />

      <div className="py-5">
        <h2 className="text-xl lg:text-3xl text-center font-bold">
          How It Works
        </h2>
        <div className="py-10 flex justify-center">
          <ul className="steps steps-vertical lg:steps-horizontal w-4/6">
            <li className="step step-primary">Browse Projects</li>
            <li className="step step-primary">Analyze Potential</li>
            <li className="step step-primary">Invest Securely</li>
            <li className="step step-primary">Monitor Returns</li>
          </ul>
        </div>
      </div>

      <div className="py-8">
        <h2 className="text-xl lg:text-3xl text-center font-bold">
          Investment Opportunities : Top Investment Projects
        </h2>
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10">
          {topCampaign.map((campaign) => (
            <Cards key={campaign._id} info={campaign} />
          ))}
        </div>
      </div>
    </div>
  );
}
