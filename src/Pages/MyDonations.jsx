// import { useContext, useEffect, useState } from "react";
// import Cards from "../Components/Cards";
// import { AuthContext } from "../Provider/AuthProvider";
// export default function MyDonations() {
//   const [campaigns, setCampaigns] = useState([]);
//   const { user } = useContext(AuthContext);
//   const userEmail = user?.email;
//   console.log(userEmail);

//   useEffect(() => {
//     if (userEmail) {
//       fetch(`https://hopehiveserver.vercel.app/donate?email=${userEmail}`)
//         .then((res) => res.json())
//         .then((data) => setCampaigns(data));
//     }
//   }, [userEmail]);
//   return (
//     <>
//       <section className="bg-transparent mb-2 font-poppins">
//         <div className="w-10/12 mx-auto py-16 space-y-12">
//           <h2 className="text-xl lg:text-3xl font-bold text-blue-600 border-b-2 border-blue-200 pb-3">
//             My Donations({campaigns.length})
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {campaigns.map((d) => (
//               <Cards key={d._id} info={d} />
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
import { useContext, useEffect, useState } from "react";
import Cards from "../Components/Cards";
import { AuthContext } from "../Provider/AuthProvider";

export default function MyDonations() {
  const [campaigns, setCampaigns] = useState([]);
  const { user } = useContext(AuthContext);

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign) => (
            <Cards key={campaign._id} info={campaign} />
          ))}
        </div>
      </div>
    </section>
  );
}
