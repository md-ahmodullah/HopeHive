import Banner from "../Components/BannerComponent/Banner";
import Category from "../Components/ExtraSection/Category";
import HowItWorks from "../Components/ExtraSection/HowItWorks";
import Reviews from "../Components/ExtraSection/Reviews";
export default function Home() {
  return (
    <section>
      <div className="w-11/12 mx-auto">
        <Banner />
      </div>
      <div>
        <Category />
        <HowItWorks />
        <Reviews />
      </div>
    </section>
  );
}
