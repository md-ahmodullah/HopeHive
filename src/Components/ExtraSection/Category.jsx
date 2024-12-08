// import { useEffect, useState } from "react";
// export default function Category() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("/category.json")
//       .then((result) => result.json())
//       .then((fetchData) => setData(fetchData));
//   }, []);
//   return (
//     <section className="font-poppins my-16 bg-transparent">
//       <div className="w-3/4 mx-auto py-16">
//         <h1 className="text-3xl text-center font-bold">
//           Exploring The Latest <br />
//           Categories Of Business Trends
//         </h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-16">
//           {data.map((d) => (
//             <div
//               key={d.id}
//               className={`bg-${d?.color} rounded-lg px-5 py-3 text-black flex items-center justify-center gap-2 shadow-md hover:transition-transform hover:-translate-y-1.5 `}
//             >
//               <img
//                 src={d.icon}
//                 alt={d.category_name}
//                 className="w-6 h-6 object-cover"
//               />
//               <h2>{d.category_name}</h2>
//               <p>({d.number_of_projects})</p>
//             </div>
//           ))}
//         </div>
//         <div className="text-center pt-12">
//           <button className="btn btn-primary text-white btn-wide">
//             See All
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }
import { keyframes } from "@emotion/react";
import React, { useEffect, useState } from "react";
import Reveal from "react-awesome-reveal";

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-200px, -100px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export default function Category() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/category.json")
      .then((result) => result.json())
      .then((fetchData) => setData(fetchData));
  }, []);

  return (
    <section className="font-poppins my-16 bg-transparent">
      <div className="w-3/4 mx-auto py-16">
        <Reveal keyframes={customAnimation} duration={1500}>
          <h1 className="text-3xl text-center font-bold">
            Exploring The Latest <br />
            Categories Of Business Trends
          </h1>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-16">
          {data.map((d) => (
            <Reveal keyframes={customAnimation} triggerOnce key={d.id}>
              <div
                className={`bg-${d?.color} rounded-lg px-5 py-3 text-black flex items-center justify-center gap-2 shadow-md hover:transition-transform hover:-translate-y-1.5`}
              >
                <img
                  src={d.icon}
                  alt={d.category_name}
                  className="w-6 h-6 object-cover"
                />
                <h2>{d.category_name}</h2>
                <p>({d.number_of_projects})</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="text-center pt-12">
          <Reveal keyframes={customAnimation}>
            <button className="btn btn-primary text-white btn-wide">
              See All
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
