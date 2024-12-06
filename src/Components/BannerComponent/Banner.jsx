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
import Slider1 from "./Slider1";
import Slider2 from "./Slider2";
import Slider3 from "./Slider3";

export default function Slider() {
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
        <Slider1 />
      </SwiperSlide>
      <SwiperSlide>
        <Slider2 />
      </SwiperSlide>
      <SwiperSlide>
        <Slider3 />
      </SwiperSlide>
    </Swiper>
  );
}
