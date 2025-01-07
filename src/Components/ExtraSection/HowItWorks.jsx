import { keyframes } from "@emotion/react";
import { useEffect, useState } from "react";
import Reveal from "react-awesome-reveal";
import { Link } from "react-router-dom";

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-50px, -100px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export default function HowItWorks() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/howItWorks.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <section className="bg-base-200 my-10 font-poppins">
      <div className="w-3/4 mx-auto py-16 space-y-12">
        <Reveal keyframes={customAnimation} duration={1000}>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5">
            <div className="space-y-5">
              <h2 className="text-3xl lg:text-4xl font-semibold">
                An Exploration of <br />
                How it works
              </h2>
              <Link to="/auth/register" className="btn btn-primary text-white">
                Create An Account
              </Link>
            </div>
            <p className="text-base px-0 lg:px-12 text-justify">
              Discover the journey behind our platform's success in empowering
              ideas and causes. Learn how projects are initiated, funds are
              raised, and dreams are realized. Explore a seamless process that
              connects contributors with meaningful campaigns, ensuring
              transparency, trust, and impact. Together, we make visions a
              reality, one step at a time.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item) => (
            <Reveal
              key={item.id}
              keyframes={customAnimation}
              triggerOnce
              duration={1000}
            >
              <div className="card bg-transparent border border-gray-500 shadow-xl">
                <figure className="p-5">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="rounded-xl h-[200px] w-full object-cover"
                  />
                </figure>
                <div className="card-body items-start pt-0">
                  <h2 className="card-title">{item.title}</h2>
                  <p>{item.description}</p>
                  <div className="card-actions pt-2">
                    <Link to="/invest" className="btn btn-primary">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
              ;
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
