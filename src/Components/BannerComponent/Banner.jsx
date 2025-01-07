import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Slider from "../Reusable Components/Slider";

export default function Sliders() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
    >
      <SwiperSlide>
        <Slider
          img={"https://i.ibb.co.com/ftk4fcW/slider1.jpg"}
          title={"Empowering Dreams, One Contribution at a Time"}
          subTitle={
            "A alive. To support personal needs, creative projects, and innovative startups. Let's turn hope into action!"
          }
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slider
          img={"https://i.ibb.co.com/zGY0KLQ/slider2.jpg"}
          title={"Building Dreams Together, One Step Forward"}
          subTitle={
            "Join a community to support innovative ideas, heartfelt causes, and projects. Together, we can turn hope into action and create meaningful, lasting impact in lives around the world."
          }
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slider
          img={
            "https://i.ibb.co.com/RYrhw59/Blog-page-images-3-141-768x402.jpg"
          }
          title={"Innovating Ideas, Transforming Lives Through Hope"}
          subTitle={
            "Discover a platform where dreams thrive and causes flourish. Unite with others to contribute, empower ideas, and make a transformative difference in communities and lives everywhere."
          }
        />
      </SwiperSlide>
    </Swiper>
  );
}
