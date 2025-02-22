"use client";
import { ProductResponse } from "@/types/interfaces/wordpress/product.interface";
import React, { Fragment, useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import ProductCard from "@/components/cards/productCard";
import StockStatuses from "@/types/enums/products";
import SliderArrows from "@/components/sliders/slider-controllers/slider-arrows";
import Link from "next/link";

interface OffersSliderProps {
  sliderData: {
    title: string;
    allProductsHref: string;
    productsData: ProductResponse[];
  };
  showArrows?: boolean;
}

const OffersSlider = ({ sliderData, showArrows = true }: OffersSliderProps) => {
  const { title, productsData } = sliderData;
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
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 20 },
      },
      "(min-width: 1280px)": {
        slides: { perView: 3.6, spacing: 20 },
      },
      "(min-width: 1536px)": {
        slides: { perView: 4, spacing: 40 },
      },
    },
  });

  return (
    <>
      <div className="mb-4 sm:mb-8 flex justify-between items-center">
        <div className="font-bold text-xl sm:text-3xl lg:text-4xl leading-tight sm:leading-snug lg:leading-tight">
          {title}
        </div>
        <Link
          className="hidden sm:flex text-nk-main hover:text-nk-main-hover active:text-nk-main-active transition font-base leading-normal underline"
          href={sliderData.allProductsHref}
        >
          Смотреть все
        </Link>
      </div>
      <div className="relative">
        <div ref={sliderRef} className={`keen-slider`}>
          <div
            className={`keen-slider__slide flex sm:max-w-[49%] lg:max-w-[32%] xl:max-w-[26.5%] 2xl:max-w-[23%]`}
          >
            <ProductCard productData={productsData[0]} />
          </div>
          {productsData.map((slide, index) => {
            const otherSlides = index !== 0 && initialized ? "flex" : "hidden";
            return (
              <Fragment key={slide.id}>
                {index !== 0 &&
                  slide.stock_status === StockStatuses.inStock && (
                    <>
                      <div className={`keen-slider__slide ${otherSlides}`}>
                        <ProductCard productData={productsData[index]} />
                      </div>
                    </>
                  )}
              </Fragment>
            );
          })}
        </div>

        <SliderArrows
          currentSlide={currentSlide}
          showArrows={showArrows}
          sliderLength={sliderLength}
          instanceRef={instanceRef}
          variant="offerSlider"
        />
      </div>
    </>
  );
};

export default OffersSlider;
