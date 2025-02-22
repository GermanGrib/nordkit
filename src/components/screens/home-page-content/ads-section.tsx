"use client";
import React, { Fragment, useState } from "react";
import SliderArrows from "@/components/sliders/slider-controllers/slider-arrows";
import { useKeenSlider } from "keen-slider/react";
import Link from "next/link";
import Image from "next/image";

interface AdsSectionProps {
  adsData: { id: number; imgSrc: string; linkHref: string }[];
}

const AdsSection = ({ adsData }: AdsSectionProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [initialized, setInitialized] = useState(false);
  const [sliderLength, setSliderLength] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created(slider) {
      setSliderLength(slider.track.details.slides.length);
      setInitialized(true);
    },
    slides: {
      perView: 1,
      spacing: 10,
    },
  });

  const mobileSliderItemStyle = "keen-slider__slide";
  const mobileLinkStyle = "flex relative h-[116px] w-full md:h-[246px]";
  const mobileImgStyle = "rounded-xl";
  return (
    <section className="section">
      <div className="container">
        <div className="lg:hidden">
          <div className="relative">
            <div ref={sliderRef} className={`keen-slider rounded-xl`}>
              <div className={mobileSliderItemStyle}>
                <Link href={adsData[0].linkHref} className={mobileLinkStyle}>
                  <Image
                    className={mobileImgStyle}
                    src={adsData[0].imgSrc}
                    alt="Рекламный баннер"
                    fill
                  />
                </Link>
              </div>
              {adsData.slice(1).map((banner) => {
                const otherSlides = initialized ? "flex" : "hidden";
                return (
                  <Fragment key={banner.id}>
                    <div className={mobileSliderItemStyle + " " + otherSlides}>
                      <Link href={banner.linkHref} className={mobileLinkStyle}>
                        <Image
                          className={mobileImgStyle}
                          src={adsData[0].imgSrc}
                          alt="Рекламный баннер"
                          fill
                        />
                      </Link>
                    </div>
                  </Fragment>
                );
              })}
            </div>

            <SliderArrows
              currentSlide={currentSlide}
              showArrows
              sliderLength={sliderLength}
              instanceRef={instanceRef}
              variant="offerSlider"
            />
          </div>
        </div>
        <div className="hidden lg:flex gap-4 xl:gap-8 2xl:gap-10">
          {adsData.slice(0, 3).map((banner, index) => {
            return (
              <Link
                key={banner.id}
                className={`flex relative h-[270px] w-full ${index === 0 ? "flex-[2.15]" : "flex-1"} hover:scale-105 transition`}
                href={banner.linkHref}
              >
                <Image
                  className="object-cover rounded-xl"
                  src={banner.imgSrc}
                  alt={"Рекламный баннер"}
                  fill
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdsSection;
