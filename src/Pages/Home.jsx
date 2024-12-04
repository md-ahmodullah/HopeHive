import Banner from "../Components/BannerComponent/Banner";
import HowItWorks from "../Components/ExtraSection/HowItWorks";
export default function Home() {
  return (
    <section>
      <div className="w-11/12 mx-auto">
        <Banner />
      </div>
      <div>
        <HowItWorks />
      </div>
    </section>
  );
}
