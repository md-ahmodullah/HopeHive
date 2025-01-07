import Banner from "../Components/BannerComponent/Banner";
import Category from "../Components/ExtraSection/Category";
import HowItWorks from "../Components/ExtraSection/HowItWorks";
import Reviews from "../Components/ExtraSection/Reviews";
import Running from "../Components/RunningCampaign/Running";
import WhyHopeHive from "../Components/WhyHopeHive";
export default function Home() {
  return (
    <section>
      <Banner />
      <div>
        <Category />
        <Running />
        <WhyHopeHive />
        <HowItWorks />
        <Reviews />
      </div>
    </section>
  );
}
