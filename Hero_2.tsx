import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useRef, useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const images = ["/images/H_1.jpg", "/images/H_2.jpg", "/images/H_3.jpg"];
const textColors = ["text-white-400", "text-yellow-200", "text-green-300"];

const HeroSlider = () => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative h-screen">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          if (
            swiper.params.navigation &&
            typeof swiper.params.navigation === "object"
          ) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        effect="fade"
        loop
        className="h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <img
                src={src}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
                <h1
                  className={`text-xl md:text-4xl font-bold mb-4 leading-snug ${textColors[activeIndex]}`}
                >
                  আলো ছড়াও জ্ঞানের মাধ্যমে <br />
                  কুরআন, হাদীস, ফিকহ ও তাফসীর শেখো তোমার রবের নামে
                </h1>
                <p
                  className={`text-[12px] md:text-sm mb-4 ${textColors[activeIndex]}`}
                >
                  ঘরে বসেই ইসলামিক শিক্ষার আলোয় আলোকিত হও
                </p>
                <div className="flex gap-4">
                  <Link to="/courses">
                    <Button className="text-[14px]  bg-blue-400 ">
                      কোর্স দেখুন
                    </Button>
                  </Link>
                  <a
                    href="https://wa.me/8801602867954"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      // variant="outline"
                      className="text-[14px] bg-blue-400"
                    >
                      যোগাযোগ করুন
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div
        ref={prevRef}
        className="absolute top-1/2 left-4 z-10 text-white text-3xl cursor-pointer select-none"
      >
        ❮
      </div>
      <div
        ref={nextRef}
        className="absolute top-1/2 right-4 z-10 text-white text-3xl cursor-pointer select-none"
      >
        ❯
      </div>
    </div>
  );
};

export default HeroSlider;
