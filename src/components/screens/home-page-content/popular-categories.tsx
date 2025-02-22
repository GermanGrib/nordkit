"use client";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import SliderArrows from "@/components/sliders/slider-controllers/slider-arrows";

interface PopularCategoriesProps {
  categoriesData: {
    id: number;
    title: string;
    imgSrc: string;
    href: string;
  }[];
}

const PopularCategories = ({ categoriesData }: PopularCategoriesProps) => {
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
      perView: 1.4,
      spacing: 12,
    },
    breakpoints: {
      "(min-width: 500px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 640px)": {
        slides: { perView: 2.5, spacing: 20 },
      },
      "(min-width: 880px)": {
        slides: { perView: 3.6, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 4, spacing: 24 },
      },
      "(min-width: 1536px)": {
        slides: { perView: 4, spacing: 40 },
      },
    },
  });

  const sliderItemHeight = "h-[120px] md:h-[175px]";
  const linkStyle =
    "flex flex-col relative px-3 py-2.5 md:px-6 justify-center items-center w-full bg-nk-secondary rounded-2xl";
  const linkChildrenStyle = "relative flex w-full h-full";
  const imgStyle = "object-contain";
  const textStyle =
    "text-xs sm:text-lg font-bold leading-snug sm:leading-snug line-clamp-1";

  return (
    <section className="section">
      <div className="container">
        <div className="mb-4 sm:mb-8 font-bold text-xl sm:text-3xl lg:text-4xl leading-tight sm:leading-snug lg:leading-tight">
          Популярные категории
        </div>
        <div className="relative">
          <div ref={sliderRef} className={`keen-slider`}>
            <div
              className={`keen-slider__slide max-w-[70%] sm:max-w-[39%] lg:max-w-[23%] flex ${sliderItemHeight}`}
            >
              <Link href="/" className={linkStyle}>
                <div className={linkChildrenStyle}>
                  <Image
                    className={imgStyle}
                    src={categoriesData[0].imgSrc}
                    fill
                    alt={`Категория ${categoriesData[0].title}`}
                  />
                </div>
                <div className={textStyle}>{categoriesData[0].title}</div>
              </Link>
            </div>
            {categoriesData.slice(1).map((category) => {
              return (
                <Fragment key={category.id}>
                  <div
                    className={`keen-slider__slide ${sliderItemHeight} ${initialized ? "flex" : "hidden"}`}
                  >
                    <Link href="/" className={linkStyle}>
                      <div className={linkChildrenStyle}>
                        <Image
                          className={imgStyle}
                          src={category.imgSrc}
                          fill
                          alt={`Категория ${category.title}`}
                        />
                      </div>
                      <div className={textStyle}>{category.title}</div>
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
    </section>
  );
};

export default PopularCategories;
