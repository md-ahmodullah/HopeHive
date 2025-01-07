import BannerCards from "./BannerCard";

export default function Slider({ img, title, subTitle }) {
  return (
    <section className="font-poppins text-white">
      <div
        className={`bg-[url('${img}')] bg-blue-600 bg-blend-multiply bg-no-repeat bg-cover bg-center`}
      >
        <div className="flex flex-col items-center justify-center w-3/4 mx-auto pt-10 space-y-8">
          <p className="bg-blue-500 text-yellow-200 px-4 py-2 text-xs font-normal rounded-full shadow-md">
            #1 trusted fund-raising platform
          </p>
          <div className="text-center space-y-7">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">
              {title}
            </h1>
            <p className="text-sm md:text-base text-gray-200 text-center w-full lg:w-4/5 mx-auto">
              {subTitle}
            </p>
          </div>
        </div>

        <div className="w-3/4 mx-auto py-10 flex flex-col lg:flex-row items-center gap-5 lg:gap-20">
          <BannerCards
            title={"Empower Your Vision"}
            subTitle={
              "Empower Your Vision inspires individuals to turn their dreams into reality by connecting with a supportive community."
            }
            btn={"btn btn-warning"}
            btnText={"Get Funded Today"}
            img={"https://i.ibb.co.com/85GZNBW/pngwing-com-1.png"}
          />

          <BannerCards
            title={"Invest With Confidence"}
            subTitle={
              "Invest With Confidence assures contributors of a secure, transparent platform where their support drives meaningful changes."
            }
            btn={"btn btn-info"}
            btnText={"Get Invest Today"}
            img={
              "https://i.ibb.co.com/JdhmJkz/Screenshot-21-removebg-preview.png"
            }
          />
        </div>
      </div>
    </section>
  );
}
