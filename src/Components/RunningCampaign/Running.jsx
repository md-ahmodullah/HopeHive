import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Tooltip from "../Tooltip";
import TypeWriter from "../TypeWriter";
import RunningCard from "./RunningCard";
export default function Running() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetch("https://hope-hive-server.vercel.app/campaign/running")
      .then((res) => res.json())
      .then((data) => setCampaigns(data));
  }, []);

  return (
    <>
      <section className="font-poppins text-white">
        <div className="bg-[url('https://i.ibb.co.com/RYrhw59/Blog-page-images-3-141-768x402.jpg')] bg-blue-800 bg-blend-multiply bg-no-repeat bg-cover bg-center min-h-[600px]">
          <div className="flex flex-col items-center justify-center w-10/12 mx-auto pt-12 space-y-10">
            <div className="text-center space-y-5">
              {/* <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">
                Join Our Running Campaigns
              </h1> */}
              <TypeWriter />
              <p className="text-sm md:text-base text-gray-200 text-center w-full lg:w-4/5 mx-auto">
                To support personal needs, creative projects, and innovative
                startups. Let's turn hope into action!
              </p>
            </div>
          </div>
          <Marquee pauseOnHover={true} gradient={false} speed={50}>
            <div className="flex items-center gap-8 py-12 ml-8">
              {campaigns.map((campaign) => (
                <RunningCard key={campaign._id} campaign={campaign} />
              ))}
            </div>
          </Marquee>
        </div>
        <Tooltip />
      </section>
    </>
  );
}
