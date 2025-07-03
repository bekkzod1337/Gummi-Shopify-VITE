"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const galleryImages = [
  "/Instagram/1.png",
  "/Instagram/2.png",
  "/Instagram/3.png",
  "/Instagram/4.png",
  "/Instagram/5.png",
  "/Instagram/6.png",
];

const InstagramGallery = () => {
  return (
    <section className="w-full bg-white py-16">
      <h2 className="text-center text-3xl font-medium text-black mb-12">#GOOD4ME</h2>

      <div className="max-w-[1400px] mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={16}
          breakpoints={{
            320: { slidesPerView: 1.3 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
        >
          {galleryImages.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div className="w-full h-[318px] bg-[#F4C8C3] flex items-center justify-center overflow-hidden rounded-md">
                <img
                  src={img}
                  alt={`gallery-${idx}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default InstagramGallery;
