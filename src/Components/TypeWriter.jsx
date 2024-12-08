import { Typewriter } from "react-simple-typewriter";
export default function TypeWriter() {
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-white">
          Join Our{" "}
          <span className="text-yellow-400">
            <Typewriter
              words={["Running Campaigns", "Fund-raising Club"]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
      </div>
    </>
  );
}
