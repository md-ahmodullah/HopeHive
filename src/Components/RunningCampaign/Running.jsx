import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import TypeWriter from "../TypeWriter";
import RunningCard from "./RunningCard";
export default function Running() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetch("https://hopehiveserver.vercel.app/campaign")
      .then((res) => res.json())
      .then((data) => {
        const filteredData = data.filter((d) => {
          const date = new Date(d.deadline);
          const currentDate = new Date();
          return date >= currentDate;
        });
        setCampaigns(filteredData);
      });
  }, []);

  return (
    <>
      <section className="font-poppins text-white">
        <div className="bg-[url('https://i.ibb.co.com/RYrhw59/Blog-page-images-3-141-768x402.jpg')] bg-blue-800 bg-blend-multiply bg-no-repeat bg-cover bg-center">
          <div className="flex flex-col items-center justify-center w-10/12 mx-auto pt-2 space-y-10">
            <div className="text-center">
              <TypeWriter />
            </div>
          </div>
          <Marquee pauseOnHover={true} gradient={false} speed={50}>
            <div className="flex items-center gap-8 py-8 ml-8">
              {campaigns.map((campaign) => (
                <RunningCard key={campaign._id} campaign={campaign} />
              ))}
            </div>
          </Marquee>
        </div>
      </section>
    </>
  );
}
