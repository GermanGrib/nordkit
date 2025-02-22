"use client";
import { ProductResponse } from "@/types/interfaces/wordpress/product.interface";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import CountdownTimer from "@/components/count-down-timer"; // components/DiscountBadge.tsx
import React, { useEffect, useState } from "react";
import StarRating from "@/components/star-rating";
import formatPrice from "@/utils/formatiPrice";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ProductOfDayProps {
  productData: ProductResponse[];
}

const ProductOfDaySlider = ({ productData }: ProductOfDayProps) => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProductIndex((prevIndex) =>
        prevIndex + 1 < productData.length ? prevIndex + 1 : 0,
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [productData.length]);

  const product = productData[currentProductIndex];

  if (!product) return null;

  const { name, price, regular_price, average_rating, rating_count } = product;

  const handleToCartBtnClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
  };

  const tooltipTriggerStyle =
    "relative w-fit mb-4 font-bold text-xl leading-tight";
  const tooltipQuestionStyle =
    "absolute w-4 h-4 inline-flex justify-center items-center -right-6 -top-1 bg-[#2D2C2C] opacity-50 text-white rounded-full text-xs";

  return (
    //ToDO: add href
    <Link
      href={"/next/public"}
      className="relative flex flex-grow justify-between flex-col px-3 py-5 md:px-8 md:py-10 lg:py-8 lg:pl-4 lg:pr-6 bg-nk-secondary rounded-2xl lg:h-[300px]"
    >
      <Image
        priority
        className="absolute top-3 right-3"
        width={32}
        height={32}
        src="/publicImages/global/icons/discount.svg"
        alt="Иконка скидки"
      />
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className={`${tooltipTriggerStyle} lg:hidden`}>
            Товары дня <span className={tooltipQuestionStyle}>?</span>
          </TooltipTrigger>
          <TooltipContent>
            <p>Скидка только сегодня!</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <div className="flex flex-col">
        <div className="flex gap-3 justify-between mb-3">
          <div className="lg:flex-1">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger
                  className={`${tooltipTriggerStyle} hidden lg:flex`}
                >
                  Товары дня <span className={tooltipQuestionStyle}>?</span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Скидка только сегодня!</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <div className="relative w-[140px] h-[132px] sm:w-[178px] lg:w-[140px] xl:w-[192px] xl:h-[149px]">
              {productData.map((product, index) => {
                return (
                  <Image
                    key={product.id}
                    priority={index === 0}
                    loading={index === 0 ? "eager" : "lazy"}
                    className={
                      currentProductIndex === index
                        ? "flex object-contain"
                        : "hidden"
                    }
                    sizes="(max-width: 640px) 140px, 178px"
                    src={product.images[0].src}
                    fill
                    alt="Изображение товара"
                  />
                );
              })}
            </div>
          </div>
          <div className="lg:flex-1">
            <div className="flex h-7 mb-3">
              <CountdownTimer />
            </div>
            <div>
              <div className="flex max-w-[105px] justify-between min-w-[108px] items-center mb-4 lg:mb-3 text-white text-xs font-bold rounded">
                <div className="p-1 pl-1.5 grow bg-black rounded-l">Скидка</div>
                <div className="p-1 pr-1.5 grow bg-nk-main rounded-r text-right">
                  <span>–</span>
                  <span>
                    {Math.ceil(
                      Math.abs(
                        ((+regular_price - +price) / +regular_price) * 100,
                      ),
                    )}
                    %
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2 md:gap-3 lg:gap-2 lg:mb-3">
                <span className="text-sm line-through font-normal">
                  {formatPrice(price, 0)}
                </span>
                <span className="font-bold text-lg leading-tight">
                  {formatPrice(regular_price, 0)}
                </span>
              </div>
              <div className="hidden lg:flex mb-1.5 gap-2 items-center lg:gap-1">
                <StarRating rating={Number(average_rating)} />
                <div className="opacity-60 text-xs font-normal whitespace-nowrap">
                  <span>{rating_count}</span> <span>отзывов</span>
                </div>
              </div>
              <div className="hidden lg:block mb-3 min-h-10 font-bold text-base leading-tight overflow-hidden overflow-ellipsis line-clamp-2 lg:text-base lg:font-normal lg:leading-tight lg:max-h-[40px]">
                {name}
              </div>
              <Button
                className="w-full hidden lg:flex"
                variant="accent"
                size="accent"
                onClick={(e) => handleToCartBtnClick(e)}
                preventProgressBar
              >
                <Image
                  style={{ width: "24px", height: "24px" }}
                  width={24}
                  height={24}
                  src="/publicImages/global/icons/cart-white.svg"
                  alt="иконка корзины"
                />
                <span>В корзину</span>
              </Button>
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <div className="flex mb-1.5 gap-2 items-center">
            <StarRating rating={Number(average_rating)} />
            <div className="opacity-60 text-xs font-normal">
              <span>{rating_count}</span> <span>отзывов</span>
            </div>
          </div>
          <div className="mb-3 min-h-10 font-bold text-base leading-tight overflow-hidden overflow-ellipsis line-clamp-2">
            {name}
          </div>
          <Button
            className="flex w-full h-10 sm:h-12"
            variant="accent"
            onClick={(e) => handleToCartBtnClick(e)}
          >
            <Image
              width={24}
              height={24}
              src="/publicImages/global/icons/cart-white.svg"
              alt="иконка корзины"
              style={{ width: "24px", height: "24px" }}
            />
            <span>В корзину</span>
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default ProductOfDaySlider;
